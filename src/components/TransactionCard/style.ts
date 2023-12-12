import styled from "styled-components"
import { theme } from "../../theme"

export const Container = styled.div`
width: 24rem;
height: 12rem;
background-color: ${theme.colors.white[100]};
border-radius: 5px;
padding: 17px 20px;

display: flex;
flex-direction: column;
transition: all 300ms;

&:hover{
    transform: scale(1.1);
    cursor: pointer;
}



`
export const Title = styled.h1`

font-size: 1.6rem;
font-family: 'Poppins', sans-serif;
font-weight: 500;
color: ${theme.colors.blue[100]};

`
export const Amount = styled.h1`
flex: 1;
font-size: 2.2rem;
font-family: 'Poppins', sans-serif;
font-weight: 400;
color: ${theme.colors.green[100]};
`

export const Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap : 1rem;
`

export const ContainerIcon = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 2px;

`
export const Icon = styled.img`
width: 20px;
height: 20px;
`
export const IconText = styled.p`
font-size: 1.4rem;
font-family: 'Poppins', sans-serif;
font-weight: 400;
color: ${theme.colors.grey[100]};
`
export const Date = styled.div`
font-size: 1.4rem;
font-family: 'Poppins', sans-serif;
font-weight: 400;
color: ${theme.colors.grey[100]};
`
