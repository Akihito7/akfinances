import styled from "styled-components";
import { theme } from "../../theme";

type ButtonTypeProps = {
  selected: boolean;
  color : string;
};

export const Container = styled.div`

width: 100vw;
height: 100vh;
background-color: ${theme.colors.white[200]};
overflow-x: hidden;

.hidden {
    display: none;
}

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
export const Header = styled.div`

height: 35vh;
width: 100vw;
background-color: ${theme.colors.purple[100]};
padding: 4rem 8rem;

display: flex;
flex-direction: column;


overflow: visible;

@media screen and (max-width: 485px){
    padding: 4rem 0;
}   


`
export const ContainerHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 485px){
    width: 100vw;
    padding: 0 4rem;
}   

`
export const Image = styled.img`

width: 28px;
height: 28px;
`
export const Button = styled.button`
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
export const ExtendedArea = styled.div`
flex: 1; 
display: flex;
justify-content: center;
padding: .5rem 5rem;
margin-top: 7rem;

`
export const ContainerForm = styled.div`

width: 50rem;
background-color: ${theme.colors.white[100]};
border-radius: 10px;
padding: 6rem;

display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

@media screen and (min-width: 486px) and (max-width: 786px){
  padding: 6rem 4rem;
}
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
export const ButtonTypeTransaction = styled.div<ButtonTypeProps>`

width: 50%;
gap: 5px;
border-radius: 5px;
background-color: ${theme.colors.white[100]};
border : 2px solid ${({ selected, color}) => (
  selected ? theme.colors[color][100] : theme.colors.white[200]
)};

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

@media screen and (max-width: 485px){
  font-size: 1rem;
  padding: 0 2rem;
}
`
export const ButtonIcon = styled.img`
width: 3rem;
height: 3rem;
`
export const ContainerCategory = styled.div`

width: 100%;
height: auto;

display: flex;
flex-direction: column;

`
export const ButtonSelect = styled.button`

width: 100%;
height: 5rem;
border: none;
border-radius: 5px;
background-color: ${theme.colors.white[300]};
padding: 0 2rem;
font-family: 'Poppins', sans-serif;
font-size: 1.6rem;
color: ${theme.colors.grey[100]};

display: flex;
align-items: center;
justify-content: start;

&:hover{
    cursor: pointer;
}

@media screen and (min-width: 486px) and (max-width: 786px){
  width: 40rem;
  height: 4rem;
}


@media screen and (max-width: 485px){
  height: 4rem;
}

`
export const ContainerButtonsCategory = styled.div`

padding: 1rem 0 0;

`
export const ButtonOfCategory = styled.button`

width: 100%;
height: 4rem;
border-radius: 5px;
padding : 0 2rem;
background-color: ${theme.colors.white[300]};
border: none;

border-bottom: 1px solid ${theme.colors.purple[100]};

display: flex;
align-items: center;
gap: 1rem;

font-family: 'Poppins', sans-serif;
font-size: 1.6rem;
color: ${theme.colors.grey[100]};

transition: all 300ms;

&:hover{
  opacity: .7;
  cursor: pointer;
}


@media screen and (max-width: 485px){

}


`
export const IconCategory = styled.img`

width: 2.8rem;
height: 2.8rem;

`
export const ButtonSend = styled.button`

width: 100%;
height: 5rem;
background-color: ${theme.colors.orange[100]};
border-radius: 5px;
border: none;

display: flex;
align-items: center;
justify-content: center;

font-family: 'Poppins', sans-serif;
font-size: 1.6rem;
color: ${theme.colors.white[100]};

transition : all 300ms;

&:hover{
    transform: scale(1.1);
    cursor: pointer;
}

@media screen and (min-width: 486px) and (max-width: 786px){
  width: 40rem;
  height: 4rem;
}


@media screen and (max-width: 485px){
  height: 4rem;
}

`
