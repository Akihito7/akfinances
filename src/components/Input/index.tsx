import { Container } from "./style";
import { InputHTMLAttributes } from 'react';

type PropsInput = InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string;
};

export function Input({ placeholder, ...rest }: PropsInput) {
    return (
        <Container
            placeholder={placeholder}
            {...rest}
        />
    )
}