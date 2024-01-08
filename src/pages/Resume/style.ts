import styled from "styled-components";
import { theme } from "../../theme";

type PropsCategory = {
    "category": string;
}

export const Container = styled.div`

width: 100vw;
height: 100vh;

display: flex;
flex-direction: column;
background-color: ${theme.colors.white[200]};

`

export const Header = styled.div`

height: 35vh;
width: 100vw;
background-color: ${theme.colors.purple[100]};
padding: 4rem 8rem;

display: flex;
flex-direction: column;
align-items: center ;
gap: 5rem;

`

export const ContainerHeader = styled.div`
width: 100vw;
padding: 0 8rem;
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

export const ResumeByCategory = styled.h1`

font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 2.8rem;
color : ${theme.colors.white[100]}

`
export const Main = styled.div`
display: flex;
height: 50vh;
padding: 0 12rem;

`

export const PizzaGraphic = styled.div`

width: 50vw;
padding: 1rem;
display: flex;
flex-direction: column;
`

export const ContainerButtonsMonth = styled.div`

display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
`

export const MonthText = styled.div`

font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 1.8rem;
color: ${theme.colors.blue[100]};
width: 20rem;
text-align: center;

`
export const MonthButton = styled.img`

width: 3rem;
height: 3rem;

transition: all 300ms;

&:hover{
    transform : scale(1.1);
    cursor: pointer;
}
`

export const ContainerCategories = styled.div`

width: 50%;
gap: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
padding: 1rem;


`

export const CardCategory = styled.div<PropsCategory>`

width: 34rem;
height: 5rem;
background-color: ${theme.colors.white[100]};
border-radius: 5px;
border-left: 6px solid ${({ category }) => (theme.colors.categories[category as keyof typeof theme.colors.categories])};



padding: 1rem 2.7rem;
display: flex;
align-items: center;
justify-content: space-between;

`

export const TitleCategory = styled.h1`

font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 1.6rem;
color: ${theme.colors.blue[100]};

`

export const AmountCategory = styled.p`

font-family: 'Poppins', sans-serif;
font-weight: bold;
font-size: 1.6rem;
color: ${theme.colors.blue[100]};

`

export const SpanCategory = styled.span`

font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 1.6rem;
color: ${theme.colors.blue[100]};

`