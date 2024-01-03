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
} from './style'
import { Menu } from '../../components/Menu';
import { theme } from '../../theme';

import { addMonths, subMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { VictoryPie } from 'victory';
import { useEffect, useState } from 'react';
import { api } from '../../axios';

const CATEGORIES = [
    { x: 3, y: 6, label: "15%", color: theme.colors.categories.food },
    { x: 3, y: 6, label: "15%", color: theme.colors.categories.leisure },
    { x: 2, y: 8, label: "20%", color: theme.colors.categories.car },
    { x: 1, y: 40, label: "50%", color: theme.colors.categories.purchases },
]

type TransactionsProps = {
    name: string;
    value: string;
    category: string;
};

type TransactionsByCategoryProps = {
    name: string;
    amount: number;
    category: string;
}

export function Resume() {

    const [dateSelected, setDateSelected] = useState(new Date());
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
    const [transactionByCategory, setTransactionByCategory] = useState<TransactionsByCategoryProps[]>([]);

    function handleDataSelected(type: 'prev' | 'next') {
        if (type === "next") {
            const nextMonth = addMonths(dateSelected, 1);
            console.log(nextMonth);
            setDateSelected(nextMonth);
        } else {
            const prevDate = subMonths(dateSelected, 1);
            console.log(prevDate);
            setDateSelected(prevDate)
        }
    };

    async function getTransactions() {
        try {
            const response = await api(`/transaction/bymonth/${dateSelected.toISOString()}`);
            setTransactions(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function startTransactions() {
        let amountLeisure = 0;
        let amountFood = 0;
        let amountSalary = 0;
        let amountCar = 0;
        let amountPurchases = 0;
        let amountStudies = 0;
        let total = 0

        transactions.map(transaction => {

            if (transaction.category === "lazer") {
                amountLeisure = amountLeisure + Number(transaction.value);
            }
            if (transaction.category === "alimentação") {
                amountFood = amountFood + Number(transaction.value);
            }
            if (transaction.category === "salário") {
                amountSalary = amountSalary + Number(transaction.value);
            }
            if (transaction.category === "carro") {
                amountCar = amountCar + Number(transaction.value);
            }
            if (transaction.category == "compras") {
                amountPurchases = amountPurchases + Number(transaction.value)
            }
            if (transaction.category === "estudos") {
                amountStudies = amountStudies + Number(transaction.value)
            }

            total = total + Number(transaction.value);

        })

        const transactionsByCategory = [
            { name: "Lazer", amount: amountLeisure, category: "leisure", color: "#26195C" },
            { name: "Alimentação", amount: amountFood, category: "food", color: "#FF872C" },
            { name: "Salário", amount: amountSalary, category: "salary", color: "#12A454" },
            { name: "Carro", amount: amountCar, category: "car", color: "#E83F5B" },
            { name: "Compras", amount: amountPurchases, category: "purchases", color: "#5636D3" },
            { name: "Estudos", amount: amountStudies, category: "studies", color: "##9C001A" }
        ]

        setTransactionByCategory(transactionsByCategory);
    }

    useEffect(() => {
        getTransactions();
    }, [dateSelected]);

    useEffect(() => {
        startTransactions();
    }, [transactions])

    return (
        <Container>
            <Header>
                <ContainerHeader>
                    <ContainerImage>
                        <Image
                            src='xama.png'
                            alt='foto de perfil'
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

                <ResumeByCategory>Resumo por categoria</ResumeByCategory>

            </Header>

            <Main>
                <PizzaGraphic>
                    <ContainerButtonsMonth>
                        <MonthButton
                            onClick={() => {
                                handleDataSelected("prev")
                            }}
                            src='arrowLeftMonth.svg'
                            alt='seta para a esquerda'
                        />
                        <MonthText>{format(dateSelected, 'MMMM, yyyy', { locale: ptBR })}
                        </MonthText>
                        <MonthButton
                            onClick={() => {
                                handleDataSelected("next")
                            }}
                            src='arrowRightMonth.svg'
                            alt='seta para a esquerda'
                        />
                    </ContainerButtonsMonth>
                    <VictoryPie

                        data={CATEGORIES}
                        colorScale={CATEGORIES.map(item => item.color)}
                        labelRadius={70}
                        style={{

                            labels: {
                                fontSize: 18,
                                fontWeight: 'bold',
                                fill: theme.colors.white[100]
                            }
                        }}

                    />
                </PizzaGraphic>

                <ContainerCategories>

                    {transactionByCategory &&

                        transactionByCategory.map(transaction => (

                            transaction.amount > 0 &&
                            <CardCategory category="purchases">
                                <TitleCategory>{transaction.name}</TitleCategory>
                                <AmountCategory><SpanCategory>R$ </SpanCategory>{transaction.amount}</AmountCategory>
                            </CardCategory>
                        ))
                    }

                </ContainerCategories>
            </Main>

            <Menu screenSelected='resume' />

        </Container>
    )
}