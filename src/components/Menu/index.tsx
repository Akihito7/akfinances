import {
    Container,
    ContainerIcon,
    Icon,
    Title,
} from './style'

import { useNavigate } from "react-router-dom"

export function Menu() {

    const navigate = useNavigate();

    return (
        <Container>
         
                
            
            <ContainerIcon onClick={() =>navigate("/")}>
                <Icon
                    src='Listagem.svg'
                    alt='icone de lista'
                />
                <Title>Transações</Title>
            </ContainerIcon>

            <ContainerIcon onClick={() => navigate("/register")}>
                <Icon
                    src='Importar.svg'
                    alt='icone do dollar'
                />
                <Title>Cadastrar</Title>
            </ContainerIcon>

            <ContainerIcon  onClick={() =>navigate("/resume")}>
                <Icon
                    src='pie-chart.svg'
                    alt='icone de grafico pizza'
                />
                <Title>Resumo</Title>
            </ContainerIcon>

        </Container>
    )
}  