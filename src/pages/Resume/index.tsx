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
    PizzaGraphic,

} from './style'

import { VictoryPie } from 'victory';

const CATEGORIES = [
    { x: 3, y: 6, label: "15%", color: "green" },
    { x: 3, y: 6, label: "15%", color: "pink" },
    { x: 2, y: 8, label: "20%", color: "orange" },
    { x: 1, y: 40, label: "50%", color: "purple" },
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




        </Container>
    )
}