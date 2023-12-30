import { useEffect, useState } from "react"
import { HighlightCard } from "../../components/HighlightCard"
import { Menu } from "../../components/Menu"
import { TransactionCard } from "../../components/TransactionCard"
import {
    Container,
    Header,
    ContainerHeader,
    ContainerImage,
    ContainerTextImage,
    ExtendedArea,
    TransactionList,
    ContainerTransactions,
    Image,
    ButtonLogout,
    ImageLogout,
    OlaText,
    NameText,
    GenericText,

} from "./style"

import { api } from "../../axios"
import { useAuth } from "../../Contexts/AuthContext"

export function Home() {

    const [transactions, setTransactions] = useState([]);
    const [HighLightAmount, setHighLightAmount] = useState({
        entriesTotal: {
            amount: '0'
        },
        expensiveTotal: {
            amount: '0'
        },
        total: {
            amount: '0'
        }
    });

    const [LastTransaction, setLastTransaction] = useState({
        entriesTotal: "Nenhuma entrada ainda",
        expensiveTotal: "Nenhuma saida ainda"
    });


    const { user } = useAuth();

    async function getTransactions() {
        try {
            const response = await api.get(`/transaction/${user.id}`);
            setTransactions(response.data);

        } catch (error) {
            console.log(error)
        }
    };

    function setHighlightCardsAmount() {

        let entriesTotal = 0;
        let expensiveTotal = 0;
        let lastEntriesTotal = "";
        let lastExpensiveTotal = "";

        transactions.map((transaction => {
            if (transaction.type === "income") {
                entriesTotal = entriesTotal + Number(transaction.value);
                lastEntriesTotal = transaction.date;

            } else {
                expensiveTotal = expensiveTotal + Number(transaction.value);
                lastExpensiveTotal = transaction.date
            }
        }));

        const [dayLastEntries, monthLastEntries] = lastEntriesTotal.split("/");
        const [dayLastExpensive, monthLastExpensive] = lastExpensiveTotal.split("/");

        const monthNameLastEntries = new Date(0, Number(monthLastEntries) - 1).toLocaleString('default', { month: 'long' });
        const monthNameLastExpensive = new Date(0, Number(monthLastExpensive) - 1).toLocaleString('default', { month: 'long' });

        const lastEntriesTotalFormatted = `Ultima transação em ${dayLastEntries} de ${monthNameLastEntries}`

        const lastExpensiveTotalFormatted = `Ultima transação em ${dayLastExpensive} de ${monthNameLastExpensive}`

        setLastTransaction({
            entriesTotal: lastEntriesTotalFormatted,
            expensiveTotal: lastExpensiveTotalFormatted,
        })


        setHighLightAmount({
            entriesTotal: { amount: String(entriesTotal) },
            expensiveTotal: { amount: String(expensiveTotal) },
            total: { amount: String(entriesTotal - expensiveTotal) }
        })
    };

    useEffect(() => {
        getTransactions();
    }, [])

    useEffect(() => {
        setHighlightCardsAmount();
    },[transactions])

    return (
        <Container>
            <Header>
                <ContainerHeader>
                    <ContainerImage>
                        <Image
                            src="xama.png"
                            alt="imagem de perfil"
                        />
                        <ContainerTextImage>
                            <OlaText>Olá</OlaText>
                            <NameText>Xamã</NameText>
                        </ContainerTextImage>
                    </ContainerImage>

                    <ButtonLogout>
                        <ImageLogout
                            src="power.svg"
                            alt="botão de logout"
                        />
                    </ButtonLogout>
                </ContainerHeader>

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
                        lastTransaction="01 à 16 de abril"
                    />
                </ExtendedArea>
            </Header>

            <TransactionList>Lista de transações</TransactionList>

            <ContainerTransactions>

                {
                    transactions.map((transaction, index) => (
                        <TransactionCard
                            key={index}
                            transaction={transaction}
                        />
                    ))
                }
            </ContainerTransactions>

            <Menu screenSelected="home" />
        </Container >
    )
}