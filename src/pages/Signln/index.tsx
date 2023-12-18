import { Input } from '../../components/Input'
import {
    Container,
    ContainerLogo,
    Logo,
    TextLogo,
    PhraseLogo,
    Image,
    ContainerLogin,
    Header,
    TextLogin,
    PhraseLogin,
    ContainerInputs,
    ButtonLogin,
    ForgetPassword,
    DontHaveAccount,
} from './style'

export function Signln() {
    return (
        <Container>
            <ContainerLogo>

                <Logo src="Logo.png">

                </Logo>
                <TextLogo>
                    Akfinances
                </TextLogo>

                <PhraseLogo>
                    Controle suas
                    finanças de forma
                    muito simples
                </PhraseLogo>

                <Image
                    src="imageContainerLogo.svg"
                    alt='imagem homem sentado mexendo no notebok vendo suas finanças'
                />
            </ContainerLogo>

            <ContainerLogin>
                <Header>
                <TextLogin>
                    Login
                </TextLogin>

                <PhraseLogin>
                    Bem-vindo de volta! <br />
                    Continue no controle das suas finanças aqui.
                </PhraseLogin>
                </Header>

                <ContainerInputs>
                    <Input placeholder='E-mail' />

                    <Input placeholder='Password' />

                    <ButtonLogin>
                        Logar
                    </ButtonLogin>

                <ForgetPassword>
                    Esqueci minha senha!
                </ForgetPassword>

                </ContainerInputs>

                <DontHaveAccount>
                    Ainda não tem conta? Crie uma!
                </DontHaveAccount>
            </ContainerLogin>



        </Container>
    )
}