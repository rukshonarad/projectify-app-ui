import { useState } from "react";
import { Input } from "../../../design-system";
import { PasswordWrapper } from "../../components";
import resetPassword from "../../../assets/images/resetPassword.svg";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import styled from "styled-components";
import { teamMember } from "../../../api";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const [searchParams] = useSearchParams();
    const passwordResetToken = searchParams.get("passwordResetToken");
    const navigate = useNavigate();

    const sendInstructions = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await teamMember.resetPassword(
                newPassword,
                newPasswordConfirm,
                passwordResetToken as string
            );

            setNewPassword("");
            setNewPasswordConfirm("");

            toast.success(response.message);
            setTimeout(() => {
                navigate("/team-member/signIn");
            });
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <PasswordWrapper pageTitle="Reset Password" imagePath={resetPassword}>
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
