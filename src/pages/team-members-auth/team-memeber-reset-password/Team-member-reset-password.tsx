import { useState } from "react";
import { Input } from "../../../design-system";
import { PasswordWrapper } from "../../components";
import "./Team-member-reset-password.css";
import resetPassword from "../../../assets/images/resetPassword.svg";
const TeamMemberResetPassword = () => {
    const [email, setEmail] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const sendInstructions = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <PasswordWrapper
            pageTitle="Reset Password"
            imagePath={resetPassword}
            btnText="Reset My Password"
        >
            <form onSubmit={sendInstructions}>
                <Input
                    className="team-member-reset-password__input"
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
            </form>
        </PasswordWrapper>
    );
};

export { TeamMemberResetPassword };
