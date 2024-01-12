import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`

width: 100vw;
height: 100vh;

display: flex;
overflow: hidden;

@media screen and (min-width: 486px) and (max-width: 786px){
    flex-direction: column;
}

@media screen and (max-width: 485px){
    flex-direction: column;
}

`
export const ContainerLogo = styled.div`
width: 65vw;
background-color: ${theme.colors.purple[100]};

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (min-width: 486px) and (max-width: 786px) {
    display: none;
}

@media screen and (max-width: 485px){
    display: none;
    

}
`

export const ContainerLogoMobile = styled.div`

display: none;

@media screen and (min-width: 486px) and (max-width: 786px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: ${theme.colors.white[100]};
    margin-top: 7rem;
}

@media screen and (max-width: 485px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: ${theme.colors.white[100]};
    margin-top: 7rem;
    width: 100vw;
    background-color: ${theme.colors.white[100]};
    margin-top: 7rem;
    

}
`
export const Logo = styled.img`
width: 5rem;
height: 5rem;

@media screen and (min-width: 486px) and (max-width: 786px) {
    height: 4rem;
    width: 4rem;
}

@media screen and (max-width: 485px){
    width: 3rem;
    height: 3rem;  
}

`
export const TextLogo = styled.h1`

font-family: 'Poppins', sans-serif;
font-weight: 300;
color: ${theme.colors.white[100]};
font-size: 2.2rem;
margin-bottom: 2rem;

@media screen and (min-width: 486px) and (max-width: 786px) {
    color: ${theme.colors.blue[100]};
    font-weight: bold;
    margin-bottom: 0;
}


@media screen and (max-width: 485px){
    color: ${theme.colors.blue[100]};
    font-weight: bold;
    margin-bottom: 0;
}
`
export const PhraseLogo = styled.p`
width: 29rem;
font-family: 'Poppins', sans-serif;
color: ${theme.colors.white[100]};
font-size: 2.4rem;
`
export const Image = styled.img`
width: 40rem;

@media screen and (min-width: 486px) and (max-width: 786px) {
    display: none;
}

@media screen and (max-width: 485px){
    display: none;
}

`
export const ContainerLogin = styled.div`

width: 35vw;
height: 100vh;

padding: 8rem 5rem ;

display: flex;
flex-direction: column;
align-items: center;



@media screen and (min-width: 486px) and (max-width: 786px) {
    width: 100vw;
    padding: 1rem 2rem 0 ;
    justify-content: center;
    overflow-y: auto;
}

@media screen and (max-width: 485px){
    width: 100vw;
    padding: 1rem 2rem 0 ;
    justify-content: center;
    overflow-y: auto;
}

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

@media screen and (min-width: 486px) and (max-width: 786px) {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
}


@media screen and (max-width: 485px){
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
}

`
export const PhraseRegister = styled.div`
font-family: 'Poppins', sans-serif;
font-weight: bold;
color: ${theme.colors.blue[100]};
font-size: 1.6rem;  

text-align: center;
margin-bottom: 3.5rem;

@media screen and (min-width: 486px) and (max-width: 786px) {
    font-size: 1.4rem;  
    margin-bottom: 1.5rem;
    width: 40rem;
}

@media screen and (max-width: 485px){
    font-size: 1.4rem;  
    margin-bottom: 1.5rem;
}
`

export const ContainerInputs = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

@media screen and (min-width: 486px) and (max-width: 786px) {
  align-items: center;
}
`

export const ButtonRegister = styled.div`

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

@media screen and (min-width: 486px) and (max-width: 786px) {
  height: 4rem;
  width: 40rem;
}

@media screen and (max-width: 485px){
   height: 4rem;

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
export const AlreadyHaveAccount = styled.div`
color: ${theme.colors.blue[100]};
font-family: 'Poppins', sans-serif;
font-size: 1.4rem;
margin-top: 10rem;

transition : all 300ms;

&:hover{
    transform: scale(1.1);
    cursor: pointer;
}


`

