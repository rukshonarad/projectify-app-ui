import { useState } from "react";
import { Input } from "../../../design-system";
import { PasswordWrapper } from "../../components";
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

    const sendInstructions = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <PasswordWrapper
            pageTitle="Reset Password"
            imagePath={resetPassword}
            btnText="Reset My Password"
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
            </Form>
        </PasswordWrapper>
    );
};

export { ResetPassword as TeamMemberResetPassword };
