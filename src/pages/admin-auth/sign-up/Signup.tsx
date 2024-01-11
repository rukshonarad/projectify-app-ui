import { useState } from "react";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";

import flatIronBuilding from "../../../assets/images/team.png";
import { admin } from "../../../api";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);

    .sign-up__preferred-name {
        grid-column: 1 / 3;
    }

    .sign-up__email {
        grid-column: 1 / 3;
    }

    .sign-up__company-name {
        grid-column: 1 / 2;
    }
    .sign-up__position {
        grid-column: 2 / 3;
    }
    .sign-up__submit-button {
        grid-column: 1 / 3;
    }
`;

const Signup = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [position, setPosition] = useState<string>("");
    const [preferredFirstName, setPreferredFirstName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
    };

    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
    };
    const handleOnchangeCompanyName = (value: string) => {
        setCompanyName(value);
    };
    const handleOnChangePosition = (value: string) => {
        setPosition(value);
    };
    const handleOnChangeName = (value: string) => {
        setPreferredFirstName(value);
    };

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };
    const isFormSubmittable =
        firstName && lastName && password && email && passwordConfirm;
    const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);

            const response = await admin.signUp({
                firstName,
                lastName,
                email,
                password,
                preferredFirstName
            });

            setIsFormSubmitting(false);
            setFirstName("");
            setLastName("");
            setPreferredFirstName("");
            setEmail("");
            setPassword("");
            setPasswordConfirm("");
            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                setIsError(true);
                toast.error(error.message);
            }
        }
    };

    return (
        <>
            <AuthWrapper imageUrl={flatIronBuilding} pageTitle="Sign Up">
                <Form onSubmit={createAccount}>
                    <Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleOnChangeFirstName}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleOnChangeLastName}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="text"
                        placeholder="Preferred First Name"
                        value={preferredFirstName}
                        onChange={handleOnChangeName}
                        shape="rounded"
                        size="lg"
                        className="sign-up__preferred-name"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="text"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={handleOnchangeCompanyName}
                        shape="rounded"
                        size="lg"
                        className="sign-up__company-name"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="text"
                        placeholder="Position"
                        value={position}
                        onChange={handleOnChangePosition}
                        shape="rounded"
                        size="lg"
                        className="sign-up__position"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                        className="sign-up__email"
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
                    <Input
                        type="password"
                        placeholder="Password Confirmation"
                        value={passwordConfirm}
                        onChange={handleOnChangePasswordConfirm}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Button
                        color="primary"
                        size="lg"
                        shape="rounded"
                        className="sign-up__submit-button"
                        disabled={isFormSubmitting}
                    >
                        Sign Up
                    </Button>
                </Form>
            </AuthWrapper>
            <Toaster />
        </>
    );
};

export { Signup as AdminSignup };
