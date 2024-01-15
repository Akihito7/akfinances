import styled from "styled-components";
import { theme } from "../../theme";
import Avatar from 'react-avatar';



export const Container = styled.div`

height: 100vh;
width: 100vw;
background-color: ${theme.colors.white[200]};
overflow: hidden;

@media screen and (min-width: 486px) and (max-width: 786px) {
 display: flex;
 flex-direction: column;
 align-items: center;
}

@media screen and (max-width: 485px){
 display: flex;
 flex-direction: column;
 align-items: center;

}
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

@media screen and (max-width: 485px){
 
 padding: 4rem 0;
 height: 30vh;

}
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

@media screen and (min-width: 486px) and (max-width: 786px) {
  align-self : flex-start;
  padding: 0 8rem;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

@media screen and (max-width: 485px){
  align-self : flex-start;
  padding: 0 2rem;
  font-size: 1.6rem;
  font-weight: bold;
}
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

  @media screen and (max-width: 485px){
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
   
    margin: 0 auto;
}
`
export const ContainerSliderTransactions = styled.div`
display: none;

@media screen and (min-width: 486px) and (max-width: 786px) {

  display: flex;
 flex-direction: column;

  align-items: center;
  width: 40rem;

}

@media screen and (max-width: 485px){
 
  display: flex;
 flex-direction: column;

  align-items: center;
  width: 30rem;
 
}


`
export const ContainerHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;


@media screen and (max-width: 485px){
 
  width: 100vw;
  padding: 0 2rem;

}
`
export const ContainerSlider = styled.div`

width: 41rem;

@media screen and (min-width: 486px) and (max-width: 786px) {
    width: 40rem;
    height: 10rem;

}

@media screen and (max-width: 485px){
    width: 31rem;
}

`
export const ContainerImage = styled.div`
display: flex;
gap: 20px;
`

export const ContentImage = styled.div`
position: relative;

`


export const ContainerTextImage = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
`
export const Image = styled(Avatar)`
size: 2rem;
object-fit: cover;
border-radius: 10px;
position: relative;
`

export const InputImage = styled.input`

width: 2rem;
height: 2rem;
background-color: red;
position: absolute;

right: 0;
bottom: 0;
border: none;

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

@media screen and (max-width: 485px){
    font-size: 1.2rem;
    line-height: 1.2;
}

`
export const NameText = styled.p`

font-family: 'Poppins', sans-serif;
font-size: 2em;
font-weight: 700;
color: ${theme.colors.white[100]};
line-height: 1;

@media screen and (max-width: 485px){
    font-size: 1.4rem;
}

`
