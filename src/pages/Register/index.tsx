import { useState } from 'react';

import {
    Container,
    ContainerForm,
    Title,
    ContainerButtons,
    ButtonTypeTransaction,
    ButtonIcon,
    ContainerCategory,
    ContainerButtonsCategory,
    ButtonOfCategory,
    IconCategory,
    ButtonSelect,
    ButtonSend,
    Header,
    ContainerHeader,
    Image,
    Button,
    ExtendedArea,
} from './style'

import { Input } from '../../components/Input'
import { useNavigate } from "react-router-dom"

export function Register() {

    const [categoryOpen, setCategoryOpen] = useState(false);
    const navigate = useNavigate();

    function handleCategoryOpen() {
        if (categoryOpen) setCategoryOpen(false)
        else setCategoryOpen(true)
    };



    return (
        <Container>
            <Header>
                <ContainerHeader>
                    <Button onClick={() => navigate(-1)}>
                        <Image
                            src="arrowLeft.svg"
                            alt="botão de voltar"
                        />
                    </Button>

                    <Button>
                        <Image
                            src="power.svg"
                            alt="botão de logout"
                        />
                    </Button>

                </ContainerHeader>
                <ExtendedArea>
                    <ContainerForm>
                        <Title>Cadastro</Title>
                        <Input
                            placeholder='Nome'
                        />
                        <Input
                            placeholder='Preço'
                        />

                        <ContainerButtons>

                            <ButtonTypeTransaction>
                                <ButtonIcon
                                    src='Entradas.svg'
                                />
                                Income
                            </ButtonTypeTransaction>

                            <ButtonTypeTransaction>
                                <ButtonIcon
                                    src='Saidas.svg'
                                />
                                Income
                            </ButtonTypeTransaction>
                        </ContainerButtons>

                        <ContainerCategory>
                            <ButtonSelect onClick={handleCategoryOpen}>
                                Categoria
                            </ButtonSelect>
                            <ContainerButtonsCategory
                                className={categoryOpen ? '' : 'hidden'}
                            >
                                <ButtonOfCategory>
                                    <IconCategory src='coffee.svg' />
                                    Alimentação
                                </ButtonOfCategory>
                                <ButtonOfCategory>
                                    <IconCategory src='shopping-bag.svg' />
                                    Compras
                                </ButtonOfCategory>
                                <ButtonOfCategory>
                                    <IconCategory src='dollar-sign.svg' />
                                    Salário
                                </ButtonOfCategory>
                                <ButtonOfCategory>
                                    <IconCategory src='smile.svg' />
                                    Diversão
                                </ButtonOfCategory>
                                <ButtonOfCategory>
                                    <IconCategory src='book.svg' />
                                    Estudos
                                </ButtonOfCategory>
                            </ContainerButtonsCategory>
                        </ContainerCategory>

                        <ButtonSend>Salvar</ButtonSend>


                    </ContainerForm>

                </ExtendedArea>
            </Header>
        </Container>
    )
}