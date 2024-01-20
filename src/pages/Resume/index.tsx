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
} from './style'
import { Menu } from '../../components/Menu';
import { theme } from '../../theme';

import { addMonths, subMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { VictoryPie } from 'victory';
import { useEffect, useState } from 'react';
import { api } from '../../axios';
import { useAuth } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

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
}

export function Resume() {

    const [dateSelected, setDateSelected] = useState(new Date().toISOString());
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
    const [transactionByCategory, setTransactionByCategory] = useState<TransactionsByCategoryProps[]>([]);
    const navigate = useNavigate();

    const { user, logout } = useAuth()

    function handleDataSelected(type: 'prev' | 'next') {
        if (type === "next") {
            const nextMonth = addMonths(dateSelected, 1);
            console.log(nextMonth);
            setDateSelected(nextMonth.toISOString());
        } else {
            const prevDate = subMonths(dateSelected, 1);
            console.log(prevDate);
            setDateSelected(prevDate.toISOString());
        }
    };

    async function getTransactions() {
        try {
            const response = await api(`/transaction/bymonth/${dateSelected}`);
            setTransactions(response.data);
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
            console.log(transaction)

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
            console.log("total", total)

        });

        const transactionsByCategory = [
            {
                name: "Lazer", amount: amountLeisure, category: "leisure", color: "#26195C",
                percentage: `${((amountLeisure / total) * 100).toFixed(0)}%`, total: amountLeisure
            },
            {
                name: "Alimentação", amount: amountFood, category: "food", color: "#FF872C",
                percentage: `${((amountFood / total) * 100).toFixed(0)}%`, total: amountFood
            },
            {
                name: "Salário", amount: amountSalary, category: "salary", color: "#12A454",
                percentage: `${((amountSalary / total) * 100).toFixed(0)}%`, total: amountSalary
            },
            {
                name: "Carro", amount: amountCar, category: "car", color: "#E83F5B",
                percentage: `${((amountCar / total) * 100).toFixed(0)}%`, total: amountCar
            },
            {
                name: "Compras", amount: amountPurchases, category: "purchases", color: "#5636D3",
                percentage: `${((amountPurchases / total) * 100).toFixed(0)}%`, total: amountPurchases
            },
            {
                name: "Estudos", amount: amountStudies, category: "studies", color: "#9C001A",
                percentage: `${((amountStudies / total) * 100).toFixed(0)}%`, total: amountStudies
            }
        ]

        setTransactionByCategory(transactionsByCategory.filter(transaction => transaction.amount > 0));
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
                            name={user.name}
                            alt='foto de perfil'
                            size="60"
                        />

                        <ContainerTextImage>
                            <OlaText>Olá</OlaText>
                            <NameText>{user.name}</NameText>
                        </ContainerTextImage>
                    </ContainerImage>

                    <ButtonLogout
                    onClick={() => {
                        logout()
                        navigate("/")
                    }}
                    >
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
                    {
                        
                         transactions.length > 0 ?

                        <VictoryPie

                            data={transactionByCategory}
                            colorScale={transactionByCategory.map(item => item.color)}
                            labelRadius={70}
                            style={{

                                labels: {
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    fill: theme.colors.white[100]
                                }
                            }}
                            x="percentage"
                            y="total"

                        />

                        :

                        <NoRegister>Sem registros para esse mês</NoRegister>
                    }
                </PizzaGraphic>

                <ContainerCategories>

                    {transactionByCategory &&

                        transactionByCategory.map(transaction => (

                            transaction.amount > 0 &&
                            <CardCategory category={transaction.category}>
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