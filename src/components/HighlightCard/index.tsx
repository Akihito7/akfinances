import {
    Container,
    Header,
    Title,
    Icon,
    Span,
    Footer,
    Amount,
    LastTransaction
} from './style'


export function HighlightCard() {
    return (
        <Container>
            <Header>
                <Title>Entradas</Title>
                <Icon src='Entradas.svg'></Icon>
            </Header>
            <Footer>
                <Amount><Span>R$</Span> 17.400,<Span>00</Span></Amount>
                <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
            </Footer>
        </Container>
    )
}