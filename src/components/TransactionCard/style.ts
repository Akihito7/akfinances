import styled from "styled-components"
import { theme } from "../../theme"

type AmountProps = {
    type: "outcome" | "income";
}
export const Container = styled.div`
min-width: 24rem;
height: 12rem;
background-color: ${theme.colors.white[100]};
border-radius: 5px;
padding: 17px 20px;

display: flex;
flex-direction: column;
transition: all 300ms;

&:hover{
    transform: scale(1.1);
    cursor: pointer;
}

@media screen and (min-width: 486px) and (max-width: 786px) {
  width: auto;
  height: 11rem;
  margin-bottom: 5px;

  &:hover{
    transform: scale(1);
}
}

@media screen and (max-width: 485px){
  width: 100%;
  height: 10rem;
  margin-bottom: 5px;

  &:hover{
    transform: scale(1);
}
}
`
export const Title = styled.h1`

font-size: 1.6rem;
font-family: 'Poppins', sans-serif;
font-weight: 500;
color: ${theme.colors.blue[100]};
text-transform: capitalize;

@media screen and (max-width: 485px){
  font-size: 1.4rem;
}

`
export const Amount = styled.h1<AmountProps>`
flex: 1;
font-size: 2rem;
font-family: 'Poppins', sans-serif;
font-weight: 400;
color : ${({ type }) => (
        type === "income" ? theme.colors.green[100] : theme.colors.red[100]
    )};

@media screen and (max-width: 485px){
  font-size: 1.8rem;
}
`
export const Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap : 1rem;
`
export const ContainerIcon = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 2px;

`
export const Icon = styled.img`
width: 20px;
height: 20px;
`
export const IconText = styled.p`
font-size: 1.4rem;
font-family: 'Poppins', sans-serif;
font-weight: 400;
color: ${theme.colors.grey[100]};

@media screen and (max-width: 485px){
  font-size: 1.2rem;
}

@media screen and (max-width: 485px){
  font-size: 1.2rem;
}
`
export const Date = styled.div`
font-size: 1.4rem;
font-family: 'Poppins', sans-serif;
font-weight: 400;
color: ${theme.colors.grey[100]};

@media screen and (max-width: 485px){
  font-size: 1.2rem;
}
`
