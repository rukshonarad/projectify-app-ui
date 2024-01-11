import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { Input, Toaster } from "../../../design-system";
import { PasswordWrapper, AuthActionLink } from "../../components";
import { admin } from "../../../api";
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

    const sendInstructions = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await admin.forgotPassword(email);
            setEmail("");
            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };
    return (
        <>
            <PasswordWrapper
                pageTitle="Forgot Password?"
                imagePath={forgotPassword}
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
            <Toaster />
        </>
    );
};

export { ForgotPassword as AdminForgotPassword };
