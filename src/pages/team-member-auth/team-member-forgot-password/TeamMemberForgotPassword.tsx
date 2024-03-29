import { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "../../../design-system";
import { PasswordWrapper } from "../../components";
import forgotPassword from "../../../assets/images/forgotPassword.svg";
import toast from "react-hot-toast";
import { teamMemberService } from "../../../api";
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
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const isFormSubmittable = email;

    const sendInstructions = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const response = await teamMemberService.forgotPassword(email);
            setEmail("");
            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };
    return (
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
                <Button
                    color="primary"
                    size="lg"
                    fullWidth={true}
                    shape="rounded"
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Get Instruction
                </Button>
            </Form>
        </PasswordWrapper>
    );
};

export { ForgotPassword as TeamMemberForgotPassword };
