import { InputCustom, InputController, ErrorMessage } from "./style";
import { InputHTMLAttributes } from 'react';

type PropsInput = InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string;
    errorMessage: string | null;
};

export function Input({ errorMessage = null, placeholder, ...rest }: PropsInput) {

    const isInvalid = !!errorMessage || false;
    return (
        <InputController>
            <InputCustom
                placeholder={placeholder}
                {...rest}
            />

            {
                isInvalid ? <ErrorMessage>{errorMessage}</ErrorMessage> : null
                
            }
        </InputController>
    )
}