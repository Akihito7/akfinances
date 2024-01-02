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

const CATEGORIES = [
    { x: 3, y: 6, label: "15%", color: theme.colors.categories.food },
    { x: 3, y: 6, label: "15%", color: theme.colors.categories.leisure },
    { x: 2, y: 8, label: "20%", color: theme.colors.categories.car },
    { x: 1, y: 40, label: "50%", color: theme.colors.categories.purchases },
]


export function Resume() {

    const [dateSelected, setDateSelected] = useState(new Date());

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

    useEffect(() => {
        dateSelected
    }, []);

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
                    <CardCategory category="purchases">
                        <TitleCategory>Compras</TitleCategory>
                        <AmountCategory><SpanCategory>R$</SpanCategory>1.200</AmountCategory>
                    </CardCategory>
                    <CardCategory category="car">
                        <TitleCategory>Carro</TitleCategory>
                        <AmountCategory><SpanCategory>R$</SpanCategory>7000</AmountCategory>
                    </CardCategory>
                    <CardCategory category="food">
                        <TitleCategory>Alimentação</TitleCategory>
                        <AmountCategory><SpanCategory>R$</SpanCategory>500</AmountCategory>
                    </CardCategory>
                    <CardCategory category="leisure">
                        <TitleCategory>Lazer</TitleCategory>
                        <AmountCategory><SpanCategory>R$</SpanCategory>500</AmountCategory>
                    </CardCategory>
                </ContainerCategories>
            </Main>

            <Menu screenSelected='resume' />

        </Container>
    )
}