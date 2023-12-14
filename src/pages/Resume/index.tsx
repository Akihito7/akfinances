import { theme } from '../../theme';
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
    Main,
    PizzaGraphic,
    ContainerCategories,
    CardCategory,
    TitleCategory,
    AmountCategory,
    SpanCategory,
} from './style'

import { VictoryPie } from 'victory';

const CATEGORIES = [
    { x: 3, y: 6, label: "15%", color: theme.colors.categories.food },
    { x: 3, y: 6, label: "15%", color: theme.colors.categories.leisure },
    { x: 2, y: 8, label: "20%", color: theme.colors.categories.car },
    { x: 1, y: 40, label: "50%", color: theme.colors.categories.purchases },
]


export function Resume() {
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

            </Header>

          <Main>
            <PizzaGraphic>
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

        </Container>
    )
}