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

import { Controller, useForm } from 'react-hook-form';
import { useAuth } from '../../Contexts/AuthContext';

import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type LoginProps = {
    email: string;
    password: string;
};

let schema = yup.object().shape({
    email : yup.string().email("Informe um e-mail válido").required("Preencha com um e-mail"),
    password : yup.string().required("Preencha com uma senha"),
})

export function Signln() {

    const { control, handleSubmit, reset } = useForm({
        resolver : yupResolver(schema)
    });

    const { signln } = useAuth()

    const navigate = useNavigate();

    async function handleLogin({ email, password }: LoginProps) {
        try {
            const credentials = {
                email,
                password
            }

            console.log("nao cheguei aqui porque os meus campos nao foram preenchidos corretamente");

            signln(credentials);

            reset({
                email: '',
                password: ''
            });

        } catch (error) {
            console.log(error)
        }
    }


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
                    <Controller
                        name='email'
                        control={control}
                        defaultValue=''
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder='E-mail'
                                onChange={(event) => onChange(event.target.value)}
                                value={value}

                            />
                        )}

                    />

                    <Controller
                        name='password'
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder='Password'
                                onChange={(event) => onChange(event.target.value)}
                                value={value}
                                type='password'

                            />
                        )}

                    />

                    <ButtonLogin
                        onClick={handleSubmit(handleLogin)}
                    >
                        Logar
                    </ButtonLogin>

                    <ForgetPassword>
                        Esqueci minha senha!
                    </ForgetPassword>

                </ContainerInputs>

                <DontHaveAccount onClick={() => navigate("/register")}>
                    Ainda não tem conta? Crie uma!
                </DontHaveAccount>
            </ContainerLogin>
        </Container>
    )
}