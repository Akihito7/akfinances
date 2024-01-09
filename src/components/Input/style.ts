import styled from "styled-components";
import { theme } from "../../theme";


export const InputController = styled.div`

width: 100%;
background-color: "transparent"

`
export const InputCustom = styled.input`


width: 100%;
height: 5rem;
display: flex;
align-items: center; 
padding: 2rem;
border: none;
border-radius:5px;
background-color: ${theme.colors.white[300]};


font-family: 'Poppins', sans-serif;
font-size: 1.6rem;

&:focus{
    outline: none;
}

&::placeholder{
    color: ${theme.colors.grey[100]};
}

`

export const ErrorMessage = styled.p`

margin: 5px 0 0;
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 1.4rem;
color: ${theme.colors.red[100]};

`