import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../../design-system";
import { AuthActionLink, AuthWrapper } from "../../components";
import toast from "react-hot-toast";
import team from "../../../assets/images/teamMemberLogin.jpeg";
import { useLocalStorage } from "../../../hooks";
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
const ActionLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
`;
const SignIn = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const navigate = useNavigate();

    const { setItem } = useLocalStorage();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const saveAuthToken = (token: string) => {
        setItem("authToken", token);
    };
    const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const { token } = await teamMember.signIn({
                email,
                password
            });

            saveAuthToken(token);

            navigate("/team-member/platform");
            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");
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
            <ActionLinks>
                <AuthActionLink
                    hintText="Don’t have an account?"
                    linkTo="../team-member/create-password"
                    linkText="Sign Up"
                />

                <AuthActionLink
                    hintText="Forgot password? "
                    linkTo="../team-member/forgot-password"
                    linkText="Get Help"
                />
            </ActionLinks>
        </AuthWrapper>
    );
};

export { SignIn as TeamMemberSignIn };
