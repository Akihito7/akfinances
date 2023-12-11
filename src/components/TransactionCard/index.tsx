import {
    Container,
    Title,
    Amount,
    Footer,
    ContainerIcon,
    Icon,
    IconText,
    Date,

} from './style'

export function TransactionCard() {
    return (
        <Container>
            <Title>Hamburgueria Pizzy</Title>
            <Amount>-R$ 59.90</Amount>
            <Footer>
                <ContainerIcon>
                    <Icon 
                    src='Alimentação.svg'
                    alt='Icone do tipo da transacão'
                    ></Icon>
                    <IconText>Alimentação</IconText>
                </ContainerIcon>
                <Date>13/04/2020</Date>
            </Footer>
        </Container>
    )
}