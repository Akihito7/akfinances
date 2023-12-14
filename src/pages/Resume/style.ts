import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`

width: 100vw;
height: 100vh;

display: flex;

`

export const Header = styled.div`

height: 35vh;
width: 100vw;
background-color: ${theme.colors.purple[100]};
padding: 4rem 8rem;

display: flex;
flex-direction: column;
gap: 3rem;

`

export const ContainerHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const ContainerImage = styled.div`

width: 15rem;
display: flex;
gap: 20px;

`

export const ContainerTextImage = styled.div`

display: flex;
flex-direction: column;
justify-content: flex-end;

`
export const Image = styled.img`

width: 6rem;
height: 6rem;
object-fit: cover;
border-radius: 10px;
`

export const OlaText = styled.p`

font-family: 'Poppins', sans-serif;
font-size: 2em;
font-weight: 400;
color: ${theme.colors.white[100]};
line-height: 1;
`
export const NameText = styled.p`

font-family: 'Poppins', sans-serif;
font-size: 2em;
font-weight: 700;
color: ${theme.colors.white[100]};
line-height: 1;

`