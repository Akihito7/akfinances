import { useState } from 'react';
import {
    Container,
    ContainerIcon,
    Title,
} from './style'

import { useNavigate } from "react-router-dom"
import { FormatListBulleted, AttachMoney, PieChart } from "@mui/icons-material";
import { theme } from '../../theme';

export function Menu({ screenSelected }: { screenSelected: string }) {

    const navigate = useNavigate();
    const [selected, setSelected] = useState(screenSelected);

    function handleNavigation(navigateTo: string) {

        navigate(navigateTo);
    };

    return (
        <Container>
            <ContainerIcon onClick={() => handleNavigation("/")}>
                <FormatListBulleted
                    style={{
                        width: 24,
                        height: 24,
                        color: selected === 'home' ? theme.colors.orange[100] : theme.colors.blue[100]
                    }}
                />
                <Title
                    selected={selected === 'home' && true}
                >
                    Transações
                </Title>
            </ContainerIcon>

            <ContainerIcon onClick={() => handleNavigation("/register")}>
                <AttachMoney
                    style={{
                        width: 24,
                        height: 24,
                        color: selected === 'register' ? theme.colors.orange[100] : theme.colors.blue[100]
                    }}
                />
                <Title
                    selected={selected === 'register' && true}
                >
                    Cadastrar
                </Title>
            </ContainerIcon>

            <ContainerIcon onClick={() => handleNavigation("/resume")}>
                <PieChart
                    style={{
                        width: 24,
                        height: 24,
                        color: selected === 'resume' ? theme.colors.orange[100] : theme.colors.blue[100]
                    }}
                />
                <Title
                    selected={selected === 'resume' && true}
                >
                    Resumo
                </Title>
            </ContainerIcon>

        </Container>
    )
}  