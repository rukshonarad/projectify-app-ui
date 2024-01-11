import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";

import flatIronBuilding from "../../../assets/images/team.png";

import styled from "styled-components";
import { admin } from "../../../api";

const SignInForm = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);
    .signIn__email {
        grid-column: 1 / 3;
    }

    .signIn__password {
        grid-column: 1 / 3;
    }

    .signIn__submit-button {
        grid-column: 1 / 3;
    }
`;

const SignIn = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            await admin.signIn({
                email,
                password
            });
            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");
        } catch (error) {
            setIsFormSubmitting(false);
            setIsError(true);
        }
    };

    return (
        <AuthWrapper imageUrl={flatIronBuilding} pageTitle="SignIn">
            <SignInForm className="signIn" onSubmit={signIn}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="signIn__email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    className="signIn__password"
                />

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="signIn__submit-button"
                >
                    SignIn
                </Button>
            </SignInForm>
        </AuthWrapper>
    );
};

export { SignIn as AdminSignIn };
