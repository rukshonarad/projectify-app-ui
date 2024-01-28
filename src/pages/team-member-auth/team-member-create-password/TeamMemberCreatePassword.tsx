import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper, AuthActionLink } from "../../components";
import team from "../../../assets/images/team.png";
import styled from "styled-components";

import { ShowPassword } from "../../components/ShowPassword";

import { teamMember } from "../../../api/teamMember";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);

    .create-password__email,
    .create-password__submit-button {
        grid-column: 1 / 3;
    }
`;

const TeamMemberCreatePassword = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const inviteToken = searchParams.get("inviteToken");

    const isFormSubmittable = email && password && passwordConfirm;

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const createPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const response = await teamMember.createPassword(
                {
                    email,
                    password,
                    passwordConfirm
                },
                inviteToken as string
            );

            setIsFormSubmitting(false);

            setEmail("");
            setPassword("");
            setPasswordConfirm("");

            toast.success(response.message);

            setTimeout(() => {
                navigate("../team-member/sign-in");
            }, 3000);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);

                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper imageUrl={team} pageTitle="Create Password">
            <Form onSubmit={createPassword}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="create-password__email"
                    disabled={isFormSubmitting}
                />
                <ShowPassword
                    placeholder="Password"
                    password={password}
                    handleOnChangePassword={handleOnChangePassword}
                    isFormSubmitting={isFormSubmitting}
                />
                <ShowPassword
                    placeholder="Password Confirm"
                    password={passwordConfirm}
                    handleOnChangePassword={handleOnChangePasswordConfirm}
                    isFormSubmitting={isFormSubmitting}
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="create-password__submit-button"
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Create Password
                </Button>
            </Form>

            <AuthActionLink
                hintText="Already have a password?"
                linkTo="../team-member/login"
                linkText="Login"
            />
        </AuthWrapper>
    );
};

export { TeamMemberCreatePassword };
