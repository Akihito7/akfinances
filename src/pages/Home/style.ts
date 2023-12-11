import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`

height: 100vh;
width: 100vw;
background-color: ${theme.colors.white[200]};

`
export const Header = styled.div`

height: 35vh;
width: 100vw;
background-color: ${theme.colors.purple[100]};
padding: 40px 80px;

display: flex;
flex-direction: column;
gap: 50px;

overflow: visible;

`

export const ExtendedArea = styled.div`
flex: 1; 
display: flex;
justify-content: center;
padding: .5rem 5rem;

`;

export const ContainerHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const ContainerImage = styled.div`

width: 150px;
display: flex;
gap: 20px;

`

export const ContainerTextImage = styled.div`

display: flex;
flex-direction: column;
justify-content: flex-end;

`
export const Image = styled.img`

width: 70px;
height: 77px;
object-fit: cover;
border-radius: 10px;
`

export const ContainerCards = styled.div`

height: 15vh;
width: 100vw;
background-color: ${theme.colors.orange[100]};

`

export const ButtonLogout = styled.button`
background: none;
border: none;
display: flex;


:hover{
    opacity: .5;
    cursor: pointer;
}
`

export const ImageLogout = styled.img`

width: 28px;
height: 28px;
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
export const GenericText = styled.text`

`
