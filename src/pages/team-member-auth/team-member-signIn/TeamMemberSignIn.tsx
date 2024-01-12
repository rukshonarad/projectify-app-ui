import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";
import toast from "react-hot-toast";
import team from "../../../assets/images/teamMemberLogin.jpeg";

import styled from "styled-components";
import { teamMember } from "../../../api";

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
    const navigate = useNavigate();
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const response = await teamMember.signIn({
                email,
                password
            });
            localStorage.setItem("authToken", response.token);

            navigate("/team-member/platform");
            setEmail("");
            setPassword("");
            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);

                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper imageUrl={team} pageTitle="SignIn">
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

export { SignIn as TeamMemberSignIn };
