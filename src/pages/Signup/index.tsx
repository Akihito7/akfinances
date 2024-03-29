import { useAuth } from '../../Contexts/AuthContext';
import { Input } from '../../components/Input'
import {
    Container,
    ContainerLogoMobile,
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

import { Controller, useForm, } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom"

type SignupProps = {
    email: string;
    name: string;
    password: string;
}

let schema = yup.object().shape({
    email: yup.string().email("Por favor use e-mail valído").required("Preencha o o e-mail"),
    name: yup.string().required("Preencha o nome"),
    password: yup.string().min(8, "A senha deve conter ao minímo 8 caracteres").required("Preencha a senha")
})

export function Signup() {

    const navigate = useNavigate();

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const { signup } = useAuth();

    async function handleSignup(userInfo: SignupProps) {
        signup(userInfo)
        reset({
            name: '',
            email: '',
            password: '',
        });
        navigate("/")
    }

    return (
        <Container>

            <ContainerLogoMobile>
                <Logo src="Logo.png">

                </Logo>
                <TextLogo>
                    Akfinances
                </TextLogo>
            </ContainerLogoMobile>
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

                        render={({ field: { onChange, value } }) => {

                            const errorMessage = errors.name?.message ? errors.name.message : null;

                            return (
                                <Input
                                    errorMessage={errorMessage}
                                    value={value}
                                    onChange={(event) => onChange(event.target.value)}
                                    placeholder='Nome'
                                />

                            )
                        }}
                    />

                    <Controller
                        name='email'
                        control={control}
                        render={({ field: { onChange, value } }) => {

                            const errorMessage = errors.email?.message ? errors.email.message : null;

                            return (
                                <Input
                                    errorMessage={errorMessage}
                                    value={value}
                                    onChange={(event) => onChange(event.target.value)}
                                    placeholder='E-mail'
                                />

                            )
                        }}
                    />
                    <Controller
                        name='password'
                        control={control}
                        render={({ field: { onChange, value } }) => {

                            const errorMessage = errors.password?.message ? errors.password.message : null;

                            return (
                                <Input
                                    errorMessage={errorMessage}
                                    value={value}
                                    onChange={(event) => onChange(event.target.value)}
                                    placeholder='Password'
                                    type='password'
                                />
                            )
                        }}

                    />

                    <ButtonRegister onClick={handleSubmit(handleSignup)}>
                        Register
                    </ButtonRegister>

                </ContainerInputs>

                <AlreadyHaveAccount
                onClick={() => {
                    navigate("/")
                }}
                >
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