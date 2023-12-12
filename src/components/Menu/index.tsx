import {
    Container,
    ContainerIcon,
    Icon,
    Title,
} from './style'

export function Menu() {
    return (
        <Container>
            <ContainerIcon>
                <Icon
                    src='Listagem.svg'
                    alt='icone de lista'
                />
                <Title>Transações</Title>
            </ContainerIcon>

            <ContainerIcon>
                <Icon
                    src='Importar.svg'
                    alt='icone do dollar'
                />
                <Title>Cadastrar</Title>
            </ContainerIcon>

            <ContainerIcon>
                <Icon
                    src='pie-chart.svg'
                    alt='icone de grafico pizza'
                />
                <Title>Resumo</Title>
            </ContainerIcon>

        </Container>
    )
}  