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
    PhraseRegister,
    ContainerInputs,
    ButtonRegister,
    AlreadyHaveAccount,
} from './style'

export function Signup() {
    return (
        <Container>
            <ContainerLogin>
                <Header>
                    <TextLogin>
                        Register
                    </TextLogin>

                    <PhraseRegister>
                        Seja bem vindo! <br />
                        Comece a gerenciar suas finanças de forma simples e eficiente.
                    </PhraseRegister>
                </Header>

                <ContainerInputs>
                    <Input placeholder='Nome' />

                    <Input placeholder='E-mail' />

                    <Input placeholder='Password' />

                    <ButtonRegister>
                        Register
                    </ButtonRegister>

                </ContainerInputs>

                <AlreadyHaveAccount>
                    Já tem uma conta? Logar!
                </AlreadyHaveAccount>
            </ContainerLogin>

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
        </Container>
    )
}