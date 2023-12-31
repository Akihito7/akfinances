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

} from "./style"

import { api } from "../../axios"
import { useAuth } from "../../Contexts/AuthContext"
import { appError } from "../../utils/appError"

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
        expensiveTotal: "Nenhuma saida ainda",
        total: "Nenhuma transação ainda"
    });


    const { user, logout } = useAuth();

    async function getTransactions() {
        try {
            const response = await api.get(`/transaction/${user.id}`);
            setTransactions(response.data);

        } catch (error) {
            console.log(error)

            if (error instanceof appError) {
                return alert(error.message)
            }

            return alert("Erro interno!");
        }
    };

    function setHighlightCardsAmount() {

        let entriesTotal = 0;
        let expensiveTotal = 0;
        let lastEntriesTotal = "";
        let lastExpensiveTotal = "";

        let TOTALOFENTRIES = "";
        let TOTALOFEXPENSIVE = "";

        transactions.map((transaction => {
            if (transaction.type === "income") {
                entriesTotal = entriesTotal + Number(transaction.value);
                lastEntriesTotal = transaction.date;
                TOTALOFENTRIES = transaction.date;


            } else {
                expensiveTotal = expensiveTotal + Number(transaction.value);
                lastExpensiveTotal = transaction.date;
                TOTALOFEXPENSIVE = transaction.date;
            }
        }));

        const [dayLastEntries, monthLastEntries] = lastEntriesTotal.split("/");
        const [dayLastExpensive, monthLastExpensive] = lastExpensiveTotal.split("/");

        const LASTTRANSACTIONOFENTRIES = Number(TOTALOFENTRIES.split("/").join(""));
        const LASTTRANSACTIONOFEXPENSIVE = Number(TOTALOFEXPENSIVE.split("/").join(""));

        const LastTransactionOfTotal = LASTTRANSACTIONOFENTRIES > LASTTRANSACTIONOFEXPENSIVE ?
            LASTTRANSACTIONOFENTRIES : LASTTRANSACTIONOFEXPENSIVE;

        const dayTotal = String(LastTransactionOfTotal).substring(0, 2);
        const monthTotal = String(LastTransactionOfTotal).substring(2, 4);
        const monthNameTotal = new Date(0, Number(monthTotal) - 1).toLocaleString('default', { month: 'long' });

        const lastTransactionTotal = `01 a ${dayTotal} de ${monthNameTotal}`

        const monthNameLastEntries = new Date(0, Number(monthLastEntries) - 1).toLocaleString('default', { month: 'long' });

        const monthNameLastExpensive = new Date(0, Number(monthLastExpensive) - 1).toLocaleString('default', { month: 'long' });

        const lastEntriesTotalFormatted = `Ultima entrada em ${dayLastEntries} de ${monthNameLastEntries}`

        const lastExpensiveTotalFormatted = `Ultima saida em ${dayLastExpensive} de ${monthNameLastExpensive}`

        setLastTransaction({
            entriesTotal: lastEntriesTotalFormatted,
            expensiveTotal: lastExpensiveTotalFormatted,
            total: lastTransactionTotal,
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
        if (transactions.length > 0) {
            setHighlightCardsAmount();
        }
    }, [transactions])

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
                            <NameText>{user.name}</NameText>
                        </ContainerTextImage>
                    </ContainerImage>

                    <ButtonLogout onClick={logout}>
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
                        lastTransaction={LastTransaction.total}
                    />
                </ExtendedArea>
            </Header>

            <TransactionList>Lista de transações</TransactionList>

            <ContainerTransactions>

                {
                    transactions &&

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