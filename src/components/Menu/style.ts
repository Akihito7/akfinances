import styled from "styled-components";
import { theme } from "../../theme";

type PropsSelected = {
    selected : boolean;
};


export const Container = styled.div`

width: 52.1rem;
height: 5rem;
border-radius: 10px;
padding: 0 4rem;

background-color: ${theme.colors.white[100]};

position: absolute;
top : 88%;
left: 50%;
transform: translateX(-50%);

display: flex;
align-items: center;
justify-content: space-around;

`

export const ContainerIcon = styled.div`

display: flex;
gap: 1rem;
transition : all 300ms;

&:hover{
    transform: scale(1.1);
    cursor : pointer;
}

`

export const Title = styled.h1<PropsSelected>`

font-family: "Poppins", sans-serif;
font-size: 1.6rem;
color : ${({ selected }) => selected ? theme.colors.orange[100] : theme.colors.blue[100]}

`