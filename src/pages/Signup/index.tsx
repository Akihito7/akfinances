import { useAuth } from '../../Contexts/AuthContext';
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

import { Controller, useForm } from "react-hook-form";

type SignupProps = {
    email: string;
    name: string;
    password: string;
}

export function Signup() {

    const { control, handleSubmit, reset } = useForm();
    const { signup } = useAuth();

    async function handleSignup(userInfo: SignupProps) {
        signup(userInfo)
        reset({
            name: '', 
            email: '', 
            password: '', 
        });
    }

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
                    <Controller
                        name='name'
                        control={control}

                        render={({ field: { onChange, value } }) => (
                            <Input
                                value={value}
                                onChange={(event) => onChange(event.target.value)}
                                placeholder='Nome'
                            />
                        )}
                    />

                    <Controller
                        name='email'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                value={value}
                                onChange={(event) => onChange(event.target.value)}
                                placeholder='E-mail'
                            />
                        )}
                    />
                    <Controller
                        name='password'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                value={value}
                                onChange={(event) => onChange(event.target.value)}
                                placeholder='Password'
                                type='password'
                            />
                        )}
                    />

                    <ButtonRegister onClick={handleSubmit(handleSignup)}>
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