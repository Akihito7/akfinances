import React ,{ useEffect, useState } from "react"
import { HighlightCard } from "../../components/HighlightCard"
import { Menu } from "../../components/Menu"
import { TransactionCard } from "../../components/TransactionCard"
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
    InputImage,
    ButtonLogout,
    ImageLogout,
    OlaText,
    NameText,

} from "./style"

import { api } from "../../axios"
import { useAuth } from "../../Contexts/AuthContext"
import { appError } from "../../utils/appError"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

    const settingsTransactions = {
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableHeight: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,

    };


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
    const [shouldRenderSlider, setShouldRenderSlider] = useState(
        window.innerWidth <= 787
    );

    const [LastTransaction, setLastTransaction] = useState({
        entriesTotal: "Nenhuma entrada ainda",
        expensiveTotal: "Nenhuma saida ainda",
        total: "Nenhuma transação ainda"
    });

    const { user, logout } = useAuth();

    async function getTransactions() {
        try {
            const response = await api.get(`/transaction/bymonth/${new Date().toISOString()}`);
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

        const lastEntriesTotalFormatted = lastEntriesTotal ? `Ultima entrada em ${dayLastEntries} de ${monthNameLastEntries}` : "Nenhuma entrada ainda"

        const lastExpensiveTotalFormatted =  lastExpensiveTotal ? `Ultima saida em ${dayLastExpensive} de ${monthNameLastExpensive}` : "Nenhuma saída ainda"

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

    async function handleFileChange(event){
        const image = event.target.files[0]

        try {
            const formData = new FormData();
            formData.append("avatar", image);

            await api.patch("/user/avatar", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            alert("deu bom")
        } catch (error) {
            alert("deu ruim")
        }
        
    }

    useEffect(() => {
        getTransactions();
    }, [])

    useEffect(() => {
        if (transactions.length > 0) {
            setHighlightCardsAmount();
        }
    }, [transactions])

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
                            <Image
                               name={user.name}
                               alt='foto de perfil'
                               size="60"
                            />
                        
                        </ContentImage>
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

                {
                    shouldRenderSlider ?
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

                        :
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


                }



            </Header>

            <TransactionList>Lista de transações</TransactionList>

            {
                shouldRenderSlider ?

                    <ContainerSliderTransactions>
                        
                            {
                                transactions &&

                                transactions.map((transaction, index) => (
                                    <TransactionCard
                                        key={index}
                                        transaction={transaction}
                                    />
                                )).reverse()
                            }
                       

                    </ContainerSliderTransactions>


                    :

                    <ContainerTransactions>

                        {
                            transactions &&

                            transactions.map((transaction, index) => (
                                <TransactionCard
                                    key={index}
                                    transaction={transaction}
                                />
                            )).reverse()
                        }
                    </ContainerTransactions>
            }

            <Menu screenSelected="home" />
        </Container >
    )
}