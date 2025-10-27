import { useEffect, useMemo, useState } from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { Menu } from "../../components/Menu";
import { TransactionCard } from "../../components/TransactionCard";
import {
  Container,
  Header,
  ContainerHeader,
  ContainerSlider,
  ContainerSliderTransactions,
  ContainerImage,
  ContainerTextImage,
  ExtendedArea,
  TransactionList,
  ContainerTransactions,
  Image,
  ContentImage,
  ButtonLogout,
  ImageLogout,
  OlaText,
  NameText,
} from "./style";

import { useAuth } from "../../Contexts/AuthContext";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFetch } from "../../hooks/use-fetch";
import { format, isAfter, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Home() {
  const handleResize = () => {
    setShouldRenderSlider(window.innerWidth <= 787);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };
  const [HighLightAmount, setHighLightAmount] = useState({
    entriesTotal: {
      amount: "0",
    },
    expensiveTotal: {
      amount: "0",
    },
    total: {
      amount: "0",
    },
  });
  const [shouldRenderSlider, setShouldRenderSlider] = useState(
    window.innerWidth <= 787
  );

  const [LastTransaction, setLastTransaction] = useState({
    entriesTotal: "Nenhuma entrada ainda",
    expensiveTotal: "Nenhuma saida ainda",
    total: "Nenhuma transação ainda",
  });

  const { user, logout } = useAuth();

  const { data, error, isLoading } = useFetch<any[]>({
    url: `/transaction/${user.id}`,
    refetchDependecies: [user.id],
  });

  const transactionsCards = useMemo(() => {
    return error ? (
      <>
        <span>Error : {error.message}</span>
      </>
    ) : isLoading ? (
      <span>Loading...</span>
    ) : !data || data?.length === 0 ? (
      <span>sem Items</span>
    ) : (
      data
        .map((transaction, index) => (
          <TransactionCard key={index} transaction={transaction} />
        ))
        .reverse()
    );
  }, [data]);

  function setHighlightCardsAmount() {
    let entriesAmountTotal = 0;
    let expensiveAmountTotal = 0;
    let lastDateEntriesTotal = "";
    let lastDateExpensiveTotal = "";

    data.forEach((transaction) => {
      if (transaction.type === "income") {
        entriesAmountTotal += Number(transaction.value);
        lastDateEntriesTotal = transaction.date;
      } else {
        expensiveAmountTotal += Number(transaction.value);
        lastDateExpensiveTotal = transaction.date;
      }
    });

    

    handleLastTransactionCards({
      lastDateEntriesTotal,
      lastDateExpensiveTotal,
    });

    setHighLightAmount({
      entriesTotal: { amount: String(entriesAmountTotal) },
      expensiveTotal: { amount: String(expensiveAmountTotal) },
      total: { amount: String(entriesAmountTotal - expensiveAmountTotal) },
    });
  }

  function handleLastTransactionCards({
    lastDateEntriesTotal,
    lastDateExpensiveTotal,
  }: {
    lastDateEntriesTotal: string;
    lastDateExpensiveTotal: string;
  }) {
    const dateLastEntriesParsed = parse(
      lastDateEntriesTotal,
      "dd/MM/yyyy",
      new Date()
    );
    const dataLastExpensiveParsed = parse(
      lastDateExpensiveTotal,
      "dd/MM/yyyy",
      new Date()
    );

    const LastDateTransactionOfTotal = isAfter(
      dateLastEntriesParsed,
      dataLastExpensiveParsed
    )
      ? dateLastEntriesParsed
      : dataLastExpensiveParsed;

    const dayTotal = format(LastDateTransactionOfTotal, "dd");
    const monthNameTotal = format(LastDateTransactionOfTotal, "MMMM", {
      locale: ptBR,
    });

    const lastTransactionTotalPhrase = `01 a ${dayTotal} de ${monthNameTotal}`;

    const dayNameLastEntries = format(dateLastEntriesParsed, "dd");
    const monthNameLastEntries = format(dateLastEntriesParsed, "MMMM", {
      locale: ptBR,
    });

    const dayNameLastExpensive = format(dataLastExpensiveParsed, "dd");
    const monthNameLastExpensive = format(dataLastExpensiveParsed, "MMMM", {
      locale: ptBR,
    });

    const lastDateEntriesTotalPhrase = lastDateEntriesTotal
      ? `Ultima entrada em ${dayNameLastEntries} de ${monthNameLastEntries}`
      : "Nenhuma entrada ainda";

    const lastDateExpensiveTotalPhrase = lastDateExpensiveTotal
      ? `Ultima saida em ${dayNameLastExpensive} de ${monthNameLastExpensive}`
      : "Nenhuma saída ainda";

    setLastTransaction({
      entriesTotal: lastDateEntriesTotalPhrase,
      expensiveTotal: lastDateExpensiveTotalPhrase,
      total: lastTransactionTotalPhrase,
    });
  }

  useEffect(() => {
    if (data?.length > 0) {
      setHighlightCardsAmount();
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Header>
        <ContainerHeader>
          <ContainerImage>
            <ContentImage>
              <Image name={user.name} alt="foto de perfil" size="60" />
            </ContentImage>
            <ContainerTextImage>
              <OlaText>Olá</OlaText>
              <NameText>{user.name}</NameText>
            </ContainerTextImage>
          </ContainerImage>

          <ButtonLogout onClick={logout}>
            <ImageLogout src="power.svg" alt="botão de logout" />
          </ButtonLogout>
        </ContainerHeader>

        {shouldRenderSlider ? (
          <ExtendedArea>
            <ContainerSlider>
              <Slider {...settings}>
                <HighlightCard
                  title="Entradas"
                  type="up"
                  amount={HighLightAmount.entriesTotal.amount}
                  lastTransaction={LastTransaction.entriesTotal}
                />

                <HighlightCard
                  title="Saídas"
                  type="down"
                  amount={HighLightAmount.expensiveTotal.amount}
                  lastTransaction={LastTransaction.expensiveTotal}
                />

                <HighlightCard
                  title="Total"
                  type="total"
                  amount={HighLightAmount.total.amount}
                  lastTransaction={LastTransaction.total}
                />
              </Slider>
            </ContainerSlider>
          </ExtendedArea>
        ) : (
          <ExtendedArea>
            <HighlightCard
              title="Entradas"
              type="up"
              amount={HighLightAmount.entriesTotal.amount}
              lastTransaction={LastTransaction.entriesTotal}
            />

            <HighlightCard
              title="Saídas"
              type="down"
              amount={HighLightAmount.expensiveTotal.amount}
              lastTransaction={LastTransaction.expensiveTotal}
            />

            <HighlightCard
              title="Total"
              type="total"
              amount={HighLightAmount.total.amount}
              lastTransaction={LastTransaction.total}
            />
          </ExtendedArea>
        )}
      </Header>

      <TransactionList>Lista de transações</TransactionList>

      {shouldRenderSlider ? (
        <ContainerSliderTransactions>
          {data &&
            data
              .map((transaction, index) => (
                <TransactionCard key={index} transaction={transaction} />
              ))
              .reverse()}
        </ContainerSliderTransactions>
      ) : (
        <ContainerTransactions>{transactionsCards}</ContainerTransactions>
      )}

      <Menu screenSelected="home" />
    </Container>
  );
}
