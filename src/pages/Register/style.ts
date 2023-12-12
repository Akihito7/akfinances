import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`

width: 100vw;
height: 100vh;
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


overflow: visible;


`

export const ExtendedArea = styled.div`
flex: 1; 
display: flex;
justify-content: center;
padding: .5rem 5rem;
margin-top: 7rem;

`


export const ContainerForm = styled.div`

height: 85vh;
width: 50rem;
background-color: ${theme.colors.white[100]};
border-radius: 10px;
padding: 6rem;

display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`

export const Title = styled.h1`

font-family: 'Poppins', sans-serif;
font-size: 2.8rem;
color:${theme.colors.blue[100]};
margin-bottom: 3rem;


`

export const ContainerButtons = styled.div`

width: 100%;
height: 5rem;
gap: 20px;

display: flex;
`

export const ButtonTypeTransaction = styled.div`

width: 50%;
gap: 5px;
border-radius: 5px;
background-color: ${theme.colors.white[100]};
border: 2px solid ${theme.colors.white[300]};

font-family: 'Poppins', sans-serif;
font-size: 1.6rem;

display: flex;
align-items: center;
justify-content: center;

transition : all 300ms;

&:hover{
    transform: scale(1.1);
    cursor: pointer;
}
`

export const ButtonIcon = styled.img`

width: 3rem;
height: 3rem;

`
export const InputCategory = styled.div`


`
export const ButtonSend = styled.div`


`
