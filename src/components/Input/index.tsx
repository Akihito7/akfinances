import { Container } from "./style";

type PropsInput = {
    placeholder: string;
};

export function Input({ placeholder }: PropsInput) {
    return (
        <Container
            placeholder={placeholder}
        />
    )
}