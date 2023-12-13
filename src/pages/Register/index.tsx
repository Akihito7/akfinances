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
    ExtendedArea,
} from './style'

import { Input } from '../../components/Input'

export function Register() {
    return (
        <Container>

            <Header>
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
                            <ButtonSelect>Categoria</ButtonSelect>
                            <ContainerButtonsCategory>
                                <ButtonOfCategory>
                                    <IconCategory src='coffee.svg' />
                                    Alimentação
                                </ButtonOfCategory>

                            </ContainerButtonsCategory>
                        </ContainerCategory>


                    </ContainerForm>

                </ExtendedArea>
            </Header>
        </Container>
    )
}