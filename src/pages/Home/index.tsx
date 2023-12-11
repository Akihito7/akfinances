import { HighlightCard } from "../../components/HighlightCard"
import {
    Container,
    Header,
    ContainerHeader,
    ContainerImage,
    ContainerTextImage,
    ExtendedArea,
    Image,
    ButtonLogout,
    OlaText,
    NameText,
    GenericText,
    ImageLogout,

} from "./style"

export function Home() {
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
                        amount="17.400"
                        lastTransaction="Última entrada dia 13 de abril"
                    />

                    <HighlightCard
                        title="Saídas"
                        type="down"
                        amount="1.259"
                        lastTransaction="Última saída dia 03 de abril"
                    />

                    <HighlightCard
                        title="Total"
                        type="total"
                        amount="16.141"
                        lastTransaction="01 à 16 de abril"
                    />
                </ExtendedArea>
            </Header>
        </Container >
    )
}