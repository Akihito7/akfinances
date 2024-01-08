import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`

height: 100vh;
width: 100vw;
background-color: ${theme.colors.white[200]};
overflow: hidden;

`
export const Header = styled.div`

height: 35vh;
width: 100vw;
background-color: ${theme.colors.purple[100]};
padding: 4rem 8rem;

display: flex;
flex-direction: column;
gap: 3rem;

overflow: visible;

`

export const ExtendedArea = styled.div`
flex: 1; 
display: flex;
justify-content: center;
padding: .5rem 5rem;

`;

export const TransactionList = styled.p`
margin-top: 10rem;
margin-bottom: .5rem;
padding: 0 8rem;

font-family: 'Poppins', sans-serif;
font-size: 2em;
font-weight: 400;
color: ${theme.colors.blue[100]};
`

export const ContainerTransactions = styled.div`
display: flex;
align-items: center;
padding: 1rem 2rem 0;
gap: 1.7rem;
margin: 0 6rem;
overflow: auto;
padding-bottom: 3rem;

  &::-webkit-scrollbar {
    height: 1.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.white[200]}; 
    margin-left: 2rem;
    margin-right: 2rem;

  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.purple[100]}; 
    border-radius: 99px;
  

  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.purple[100]}; 
  
  }


`

export const ContainerHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const ContainerImage = styled.div`

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

export const ContainerCards = styled.div`

height: 15vh;
width: 100vw;
background-color: ${theme.colors.orange[100]};

`

export const ImageLogout = styled.img`

width: 28px;
height: 28px;
`


export const ButtonLogout = styled.button`
background: none;
border: none;
display: flex;
transition: all 300ms;


&:hover{
    opacity: .5;
    cursor: pointer;
    transform: scale(1.1);
}
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
