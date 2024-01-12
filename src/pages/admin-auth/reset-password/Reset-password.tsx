import { useState } from "react";
import { Input, Button } from "../../../design-system";
import { AuthActionLink, PasswordWrapper } from "../../components";
import toast from "react-hot-toast";
import { useSearchParams, useNavigate } from "react-router-dom";
import { admin } from "../../../api";
import resetPasswordImg from "../../../assets/images/resetPassword.svg";
import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");
    const [searchParams] = useSearchParams();
    const passwordResetToken = searchParams.get("passwordResetToken");
    const navigate = useNavigate();
    const handleOnChangeNewPassword = (value: string) => {
        setNewPassword(value);
    };

    const handleOnChangeNewPasswordConfirm = (value: string) => {
        setNewPasswordConfirm(value);
    };

    const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await admin.resetPassword(
                newPassword,
                newPasswordConfirm,
                passwordResetToken as string
            );

            setNewPassword("");
            setNewPasswordConfirm("");

            toast.success(response.message);
            setTimeout(() => {
                navigate("/admin/signIn");
            });
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <>
            <PasswordWrapper
                pageTitle="Reset Password"
                imagePath={resetPasswordImg}
            >
                <Form onSubmit={resetPassword}>
                    <Input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={handleOnChangeNewPassword}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={newPasswordConfirm}
                        onChange={handleOnChangeNewPasswordConfirm}
                        shape="rounded"
                        size="lg"
                    />
                    <Button
                        color="primary"
                        size="lg"
                        shape="rounded"
                        fullWidth={true}
                    >
                        Reset My Password
                    </Button>
                </Form>
                <AuthActionLink
                    linkText="Forget Password"
                    hintText="Get Instructions"
                    linkTo="../admin/forgot-password"
                />
            </PasswordWrapper>
        </>
    );
};
export { ResetPassword as AdminResetPassword };
