import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";

import flatIronBuilding from "../../../assets/images/team.png";
import styled from "styled-components";

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
    const [preferredName, setPreferredName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

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
        setPreferredName(value);
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

    const createAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            companyName,
            position,
            preferredName,
            password,
            passwordConfirm,
            email
        );
    };

    return (
        <AuthWrapper imageUrl={flatIronBuilding} pageTitle="Sign Up">
            <Form onSubmit={createAccount}>
                <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleOnChangeFirstName}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleOnChangeLastName}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="text"
                    placeholder="Preferred First Name"
                    value={preferredName}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                    className="sign-up__preferred-name"
                />
                <Input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={handleOnchangeCompanyName}
                    shape="rounded"
                    size="lg"
                    className="sign-up__company-name"
                />
                <Input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={handleOnChangePosition}
                    shape="rounded"
                    size="lg"
                    className="sign-up__position"
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="sign-up__email"
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
                    placeholder="Password Confirmation"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="sign-up__submit-button"
                >
                    Sign Up
                </Button>
            </Form>
        </AuthWrapper>
    );
};

export { Signup as AdminSignup };
