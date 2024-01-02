import { useState } from "react";
import { Input } from "../../../design-system";
import { PasswordWrapper } from "../../components";
import "./Update-password.css";
import updatePassword from "../../../assets/images/updatePassword.svg";
const UpdatePassword = () => {
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
            pageTitle="Update Password"
            imagePath={updatePassword}
            btnText="Reset My Password"
        >
            <form onSubmit={sendInstructions}>
                <Input
                    className="update-password__input"
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

export { UpdatePassword };
