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

type TransactionCardProps = {
    transaction: {
        name: string;
        value: string;
        category: string;
        date: string;
    }

}

export function TransactionCard({ transaction }: TransactionCardProps) {

    const amountFormatted = Number(transaction.value)
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <Container>
            <Title>{transaction.name}</Title>
            <Amount>{amountFormatted}</Amount>
            <Footer>
                <ContainerIcon>
                    <Icon
                        src={`${transaction.category}.svg`}
                        alt='Icone do tipo da transacão'
                    />
                    <IconText>{transaction.category}</IconText>
                </ContainerIcon>
                <Date>{transaction.date}</Date>
            </Footer>
        </Container>
    )
}