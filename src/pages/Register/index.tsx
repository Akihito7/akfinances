import {
    Container,
    ContainerForm,
    Title,
    ContainerButtons,
    ButtonTypeTransaction,
    ButtonIcon,
    InputCategory,
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


                    </ContainerForm>

                </ExtendedArea>
            </Header>
        </Container>
    )
}