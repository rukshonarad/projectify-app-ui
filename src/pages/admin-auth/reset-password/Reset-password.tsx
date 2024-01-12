import { useState } from "react";
import { Input, Button, Toaster } from "../../../design-system";
import { PasswordWrapper } from "../../components";
import toast from "react-hot-toast";
import resetPassword from "../../../assets/images/resetPassword.svg";
import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const ResetPassword = () => {
    const [email, setEmail] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const sendInstructions = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <>
            <PasswordWrapper
                pageTitle="Reset Password"
                imagePath={resetPassword}
            >
                <Form onSubmit={sendInstructions}>
                    <Input
                        type="password"
                        placeholder="New Password"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                    />
                    <Button
                        color="primary"
                        size="lg"
                        fullWidth={true}
                        shape="rounded"
                    >
                        Get Instruction
                    </Button>
                </Form>
            </PasswordWrapper>
            <Toaster />
        </>
    );
};

export { ResetPassword as AdminResetPassword };
