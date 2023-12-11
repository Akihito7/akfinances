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

interface HighLightProps {
    title: string;
    type: 'up' | 'down' | 'total';
    amount: string;
    lastTransaction: string;
};

const iconTypes = {
    up: "Entradas.svg",
    down: "Saidas.svg",
    total: "Total.svg"
}



export function HighlightCard({ title, type, amount, lastTransaction }: HighLightProps) {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                <Icon
                    src={iconTypes[type]}
                    alt='icone da transação'
                />
            </Header>
            <Footer>
                <Amount type={type}><Span type={type}>R$</Span> {amount},<Span type={type}>00</Span></Amount>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    )
}