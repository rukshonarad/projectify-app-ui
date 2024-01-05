import { useState } from "react";
import { Toggle } from "./design-system";
import { TeamMemberCreatePassword, TeamMemberLogin } from "./pages";
import { TeamMemberResetPassword } from "./pages/team-members-auth/team-memeber-reset-password/Team-member-reset-password";

const App = () => {
    const [value, setValue] = useState<boolean>(false);

    const handleOnToggle = (value: boolean) => {
        setValue(value);
    };

    return (
        <div style={{ padding: "300px" }}>
            <Toggle value={value} onToggle={handleOnToggle} />
        </div>
    );
};

export { App };
