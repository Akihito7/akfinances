import {
  Container,
  Header,
  ContainerHeader,
  ContainerImage,
  ContainerTextImage,
  Image,
  OlaText,
  NameText,
  ButtonLogout,
  ImageLogout,
  ResumeByCategory,
  Main,
  PizzaGraphic,
  ContainerButtonsMonth,
  MonthButton,
  MonthText,
  ContainerCategories,
  CardCategory,
  TitleCategory,
  AmountCategory,
  SpanCategory,
  NoRegister,
} from "./style";
import { Menu } from "../../components/Menu";
import { theme } from "../../theme";

import { addMonths, subMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { VictoryPie } from "victory";
import { useEffect, useState } from "react";
import { api } from "../../axios";
import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

type TransactionsProps = {
  name: string;
  value: string;
  category: string;
};

type TransactionsByCategoryProps = {
  name: string;
  amount: number;
  category: string;
  color: string;
};

const CATEGORIES_CONFIG: Record<
  string,
  { name: string; category: string; color: string }
> = {
  lazer: { name: "Lazer", category: "leisure", color: "#26195C" },
  alimentação: { name: "Alimentação", category: "food", color: "#FF872C" },
  salário: { name: "Salário", category: "salary", color: "#12A454" },
  carro: { name: "Carro", category: "car", color: "#E83F5B" },
  compras: { name: "Compras", category: "purchases", color: "#5636D3" },
  estudos: { name: "Estudos", category: "studies", color: "#9C001A" },
};

export function Resume() {
  const [dateSelected, setDateSelected] = useState(new Date().toISOString());
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
  const [transactionByCategory, setTransactionByCategory] = useState<
    TransactionsByCategoryProps[]
  >([]);
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  function handleDataSelected(type: "prev" | "next") {
    if (type === "next") {
      const nextMonth = addMonths(dateSelected, 1);
      console.log(nextMonth);
      setDateSelected(nextMonth.toISOString());
    } else {
      const prevDate = subMonths(dateSelected, 1);
      console.log(prevDate);
      setDateSelected(prevDate.toISOString());
    }
  }

  async function getTransactions() {
    const response = await api(`/transaction/bymonth/${dateSelected}`);
    return response.data;
  }

  async function handleGetTransactions() {
    try {
      const transactions = await getTransactions();
      setTransactions(transactions);
    } catch (error) {
      console.log(error ?? "Erro ao buscar transactions");
    }
  }

  function formattedTransactionByCategory() {
    let total = getTotalAmount(transactions);
    const transactionsByCategoryResult: {
      name: string;
      amount: number;
      category: string;
      color: string;
      percentage: string;
      total: number;
    }[] = [];

    transactions.forEach((transaction) => {
      const config = CATEGORIES_CONFIG[transaction.category];
      if (!config) return;

      const existing = transactionsByCategoryResult.find(
        (category) => category.name === config.name
      );

      if (existing) {
        existing.amount += Number(transaction.value);
        existing.total += Number(transaction.value);
        existing.percentage = `${((existing.amount / total) * 100).toFixed(
          0
        )}%`;
      } else {
        transactionsByCategoryResult.push({
          name: config.name,
          amount: Number(transaction.value),
          category: config.category,
          color: config.color,
          percentage: `${((Number(transaction.value) / total) * 100).toFixed(
            0
          )}%`,
          total: Number(transaction.value),
        });
      }
    });

    setTransactionByCategory(
      transactionsByCategoryResult.filter(
        (transaction) => transaction.amount > 0
      )
    );
  }

  function getTotalAmount(transactions: TransactionsProps[]) {
    if (!transactions) return 0;
    let totalAmount = transactions.reduce(
      (acc, current) => (acc += Number(current.value)),
      0
    );
    return totalAmount;
  }

  useEffect(() => {
    handleGetTransactions();
  }, [dateSelected]);

  useEffect(() => {
    formattedTransactionByCategory();
  }, [transactions]);

  return (
    <Container>
      <Header>
        <ContainerHeader>
          <ContainerImage>
            <Image name={user.name} alt="foto de perfil" size="60" />

            <ContainerTextImage>
              <OlaText>Olá</OlaText>
              <NameText>{user.name}</NameText>
            </ContainerTextImage>
          </ContainerImage>

          <ButtonLogout
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            <ImageLogout src="power.svg" alt="botão de logout" />
          </ButtonLogout>
        </ContainerHeader>

        <ResumeByCategory>Resumo por categoria</ResumeByCategory>
      </Header>

      <Main>
        <PizzaGraphic>
          <ContainerButtonsMonth>
            <MonthButton
              onClick={() => {
                handleDataSelected("prev");
              }}
              src="arrowLeftMonth.svg"
              alt="seta para a esquerda"
            />
            <MonthText>
              {format(dateSelected, "MMMM, yyyy", { locale: ptBR })}
            </MonthText>
            <MonthButton
              onClick={() => {
                handleDataSelected("next");
              }}
              src="arrowRightMonth.svg"
              alt="seta para a esquerda"
            />
          </ContainerButtonsMonth>
          {transactions.length > 0 ? (
            <VictoryPie
              data={transactionByCategory}
              colorScale={transactionByCategory.map((item) => item.color)}
              labelRadius={70}
              style={{
                labels: {
                  fontSize: 18,
                  fontWeight: "bold",
                  fill: theme.colors.white[100],
                },
              }}
              x="percentage"
              y="total"
            />
          ) : (
            <NoRegister>Sem registros para esse mês</NoRegister>
          )}
        </PizzaGraphic>

        <ContainerCategories>
          {transactionByCategory &&
            transactionByCategory.map(
              (transaction) =>
                transaction.amount > 0 && (
                  <CardCategory category={transaction.category}>
                    <TitleCategory>{transaction.name}</TitleCategory>
                    <AmountCategory>
                      <SpanCategory>R$ </SpanCategory>
                      {transaction.amount}
                    </AmountCategory>
                  </CardCategory>
                )
            )}
        </ContainerCategories>
      </Main>

      <Menu screenSelected="resume" />
    </Container>
  );
}
