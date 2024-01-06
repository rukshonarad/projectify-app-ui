import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";

import teamWork from "../../../assets/images/teamMemberLogin.jpeg";
import styled from "styled-components";

const Form = styled.form`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);
    .create-password__preferred-name {
        grid-column: 1 / 3;
    }

    .create-password__email {
        grid-column: 1 / 3;
    }

    .create-password__submit-button {
        grid-column: 1 / 3;
    }
`;

const CreatePassword = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const createPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password, passwordConfirm);
    };

    return (
        <AuthWrapper imageUrl={teamWork} pageTitle="Create Password">
            <Form
                className="create-password"
                onSubmit={createPassword}
                noValidate
            >
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="create-password__email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="create-password__submit-button"
                >
                    Create Password
                </Button>
            </Form>
        </AuthWrapper>
    );
};

export { CreatePassword as TeamMemberCreatePassword };
