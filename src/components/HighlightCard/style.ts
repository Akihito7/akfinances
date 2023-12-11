import styled from "styled-components";
import { theme } from "../../theme";


export const Container = styled.div`

width: 33.2rem;
height: 16rem;

background-color: white;
border-radius: 5px;
padding: 15px 30px;

display: flex;
flex-direction: column;
justify-content: space-around;

position: absolute;

`
export const Header = styled.div`

display: flex;
align-items: start;
justify-content: space-between;
`

export const Title = styled.h1`
font-family: 'Poppins', sans-serif;
font-size: 2rem;
font-weight: 400;
color: ${theme.colors.blue[100]};
`
export const Icon = styled.img`

width: 40px;
height: 40px;
`
export const Footer = styled.div`
display: flex;
flex-direction: column;

`
export const Span = styled.span`
font-family: 'Poppins', sans-serif;
font-size: 3rem;
font-weight: 400;
color: ${theme.colors.blue[100]};
`


export const Amount = styled.h1`
font-family: 'Poppins', sans-serif;
font-size: 3rem;
font-weight: 600;
color: ${theme.colors.blue[100]};
line-height: 1;

`
export const LastTransaction = styled.p`
font-family: 'Poppins', sans-serif;
font-size: 1.2;
font-weight: 400;
color: ${theme.colors.grey[100]};
line-height: 1;
`