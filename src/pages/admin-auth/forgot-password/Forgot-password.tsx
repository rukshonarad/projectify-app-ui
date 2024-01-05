import { useState } from "react";
import styled from "styled-components";
import { Input } from "../../../design-system";
import { PasswordWrapper } from "../../components";
import "./Forgot-password.css";
import forgotPassword from "../../../assets/images/forgotPassword.svg";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
`;
const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const sendInstructions = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };
    return (
        <PasswordWrapper
            pageTitle="Forgot Password?"
            imagePath={forgotPassword}
            btnText="Get Instructions"
        >
            <Form onSubmit={sendInstructions}>
                <Input
                    className="forgot-password__input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
            </Form>
        </PasswordWrapper>
    );
};

export { ForgotPassword };
