import { useState } from "react";
import { Button, Input } from "../../../design-system";
import toast from "react-hot-toast";
import { AuthActionLink, AuthWrapper } from "../../components";
import styled from "styled-components";
import { useLocalStorage } from "../../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { admin } from "../../../api";
import teamAdmin from "../../../assets/images/team.png";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
`;

const ActionLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
`;

const Signin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const navigate = useNavigate();

    const { setItem } = useLocalStorage();

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const saveAuthToken = (token: string) => {
        setItem("authToken", token);
    };

    const authorizeLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const { token } = await admin.signIn({
                email,
                password
            });

            saveAuthToken(token);

            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");

            navigate("../admin/platform");
        } catch (error) {
            setIsFormSubmitting(false);
            setIsError(true);
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper imageUrl={teamAdmin} pageTitle="Sign In">
            <Form onSubmit={authorizeLogin}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    disabled={isFormSubmitting}
                >
                    Sign In
                </Button>
            </Form>
            <ActionLinks>
                <AuthActionLink
                    hintText="Don’t have an account?"
                    linkTo="/admin/sign-up"
                    linkText="Sign Up"
                />
                <AuthActionLink
                    hintText="Forgot password? "
                    linkTo="/admin/forget-password"
                    linkText="Get Help"
                />
            </ActionLinks>
        </AuthWrapper>
    );
};

export { Signin as AdminSignIn };
