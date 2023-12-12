import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.input`


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

`