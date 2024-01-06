import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`

width: 100vw;
height: 100vh;

display: flex;

`
export const ContainerLogo = styled.div`
width: 65vw;
background-color: ${theme.colors.purple[100]};

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Logo = styled.img`
width: 5rem;
height: 5rem;
`
export const TextLogo = styled.h1`

font-family: 'Poppins', sans-serif;
font-weight: 300;
color: ${theme.colors.white[100]};
font-size: 2.2rem;
margin-bottom: 2rem;
`
export const PhraseLogo = styled.p`
width: 29rem;
font-family: 'Poppins', sans-serif;
color: ${theme.colors.white[100]};
font-size: 2.4rem;
`
export const Image = styled.img`
width: 40rem;

`
export const ContainerLogin = styled.div`

width: 35vw;
height: 100vh;

padding: 10rem 5rem ;

display: flex;
flex-direction: column;
align-items: center;

`
export const Header = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const TextLogin = styled.div`

font-family: 'Poppins', sans-serif;
font-weight: bold;
color: ${theme.colors.blue[100]};
font-size: 2.4rem;
margin-bottom: 2.9rem;

`
export const PhraseLogin = styled.div`
font-family: 'Poppins', sans-serif;
font-weight: bold;
color: ${theme.colors.blue[100]};
font-size: 1.6rem;  

text-align: center;
margin-bottom: 3.5rem;
`

export const ContainerInputs = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

`

export const ButtonLogin = styled.div`

display: flex;
align-items: center;
justify-content: center;

width: 100%;
height: 5rem;
background-color: ${theme.colors.orange[100]};
border-radius: 5px;

color: ${theme.colors.white[100]};
font-family: 'Poppins', sans-serif;
font-size: 1.8rem;

transition : all 300ms;

&:hover{
    transform: scale(1.1);
    cursor: pointer;
}
`

export const ForgetPassword = styled.div`

color: ${theme.colors.blue[100]};
font-family: 'Poppins', sans-serif;
font-size: 1.4rem; 
text-align: center;

margin-top: 2.8rem;
margin-bottom: 10rem;

transition : all 300ms;

&:hover{
    transform: scale(1.1);
    cursor: pointer;
}
`
export const DontHaveAccount = styled.div`
color: ${theme.colors.blue[100]};
font-family: 'Poppins', sans-serif;
font-size: 1.4rem;

transition : all 300ms;

&:hover{
    transform: scale(1.1);
    cursor: pointer;
}


`
