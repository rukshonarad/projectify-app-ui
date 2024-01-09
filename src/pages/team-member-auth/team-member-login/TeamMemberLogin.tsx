import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";

import team from "../../../assets/images/teamMemberLogin.jpeg";

import styled from "styled-components";

const LoginForm = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);
    .login__email {
        grid-column: 1 / 3;
    }

    .login__password {
        grid-column: 1 / 3;
    }

    .login__submit-button {
        grid-column: 1 / 3;
    }
`;

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(password, email);
    };

    return (
        <AuthWrapper imageUrl={team} pageTitle="Login">
            <LoginForm className="login" onSubmit={login}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="login__email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    className="login__password"
                />

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="login__submit-button"
                >
                    Login
                </Button>
            </LoginForm>
        </AuthWrapper>
    );
};

export { Login as TeamMemberLogin };
