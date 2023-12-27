import { useEffect, useState } from "react"
import { HighlightCard } from "../../components/HighlightCard"
import { Menu } from "../../components/Menu"
import { TransactionCard } from "../../components/TransactionCard"
import {
    Container,
    Header,
    ContainerHeader,
    ContainerImage,
    ContainerTextImage,
    ExtendedArea,
    TransactionList,
    ContainerTransactions,
    Image,
    ButtonLogout,
    ImageLogout,
    OlaText,
    NameText,
    GenericText,

} from "./style"

import { api } from "../../axios"
import { useAuth } from "../../Contexts/AuthContext"

export function Home() {

    const [transactions, setTransactions] = useState([]);

    const { user } = useAuth();

    async function getTransactions() {
        try {
            const response = await api.get(`/transaction/${user.id}`);
            setTransactions(response.data);
            console.log(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTransactions();
    }, [transactions])
    return (
        <Container>
            <Header>
                <ContainerHeader>
                    <ContainerImage>
                        <Image
                            src="xama.png"
                            alt="imagem de perfil"
                        />
                        <ContainerTextImage>
                            <OlaText>Olá</OlaText>
                            <NameText>Xamã</NameText>
                        </ContainerTextImage>
                    </ContainerImage>

                    <ButtonLogout>
                        <ImageLogout
                            src="power.svg"
                            alt="botão de logout"
                        />
                    </ButtonLogout>
                </ContainerHeader>

                <ExtendedArea>
                    <HighlightCard
                        title="Entradas"
                        type="up"
                        amount="17.400"
                        lastTransaction="Última entrada dia 13 de abril"
                    />

                    <HighlightCard
                        title="Saídas"
                        type="down"
                        amount="1.259"
                        lastTransaction="Última saída dia 03 de abril"
                    />

                    <HighlightCard
                        title="Total"
                        type="total"
                        amount="16.141"
                        lastTransaction="01 à 16 de abril"
                    />
                </ExtendedArea>
            </Header>

            <TransactionList>Lista de transações</TransactionList>

            <ContainerTransactions>

                {
                    transactions.map((transaction, index) => (
                        <TransactionCard
                            key={index}
                            transaction={transaction}
                        />
                    ))
                }
            </ContainerTransactions>

            <Menu screenSelected="home" />
        </Container >
    )
}