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
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                </ExtendedArea>
            </Header>
        </Container >
    )
}