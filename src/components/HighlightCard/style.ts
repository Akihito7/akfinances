import styled, { css } from "styled-components";
import { theme } from "../../theme";

interface TypeProps {
    type: 'up' | 'down' | 'total';
    theme: typeof theme;

};


export const Container = styled.div<TypeProps>`

width: 28rem;
height: 14rem;

background-color: ${({ type }) => (type === 'total' ? theme.colors.orange[100] : theme.colors.white[100])};
border-radius: 5px;
padding: 15px 30px;

display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 30px;

transition: all 300ms;


&:hover {
 transform: scale(1.1);
 cursor: pointer;
}
`
export const Header = styled.div`

display: flex;
align-items: start;
justify-content: space-between;
`

export const Title = styled.h1<TypeProps>`
font-family: 'Poppins', sans-serif;
font-size: 2rem;
font-weight: 400;
color : ${({ type }) => (type === 'total' ? theme.colors.white[100] : theme.colors.blue[100])};
`

export const Icon = styled.img`

width: 40px;
height: 40px;
`
export const Footer = styled.div`
display: flex;
flex-direction: column;

`
export const Span = styled.span<TypeProps>`
font-family: 'Poppins', sans-serif;
font-size: 3rem;
font-weight: 400;

color : ${({ type }) => (type === 'total' ? theme.colors.white[100] : theme.colors.blue[100])}
`


export const Amount = styled.h1<TypeProps>`
font-family: 'Poppins', sans-serif;
font-size: 3rem;
font-weight: 600;
color : ${({ type }) => (type === 'total' ? theme.colors.white[100] : theme.colors.blue[100])};
line-height: 1;

`
export const LastTransaction = styled.p<TypeProps>`
font-family: 'Poppins', sans-serif;
font-size: 1.2;
font-weight: 400;
color : ${({ type }) => (type === 'total' ? theme.colors.white[100] : theme.colors.blue[100])};
line-height: 1;
`