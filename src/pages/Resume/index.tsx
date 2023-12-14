import {
    Container,
    Header,
    ContainerHeader,
    ContainerImage,
    ContainerTextImage,
    Image,
    OlaText,
    NameText,

} from './style'

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
                </ContainerHeader>

            </Header>


        </Container>
    )
}