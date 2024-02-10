import { Link } from "react-router-dom";
import { Checkbox, Switch, LinearProgress } from "./design-system";
import { useState } from "react";
const App = () => {
    const [date, setDate] = useState<Date>();
    // const [value, setValue] = useState<OptionValue>("");
    const [value, setValue] = useState(false);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
                fontSize: "1.5rem"
            }}
        >
            <h1>Home Page</h1>

            <Link to="admin/sign-up">Admin Sign-Up</Link>
            <Link to="admin/login">Admin Login</Link>
            <Link to="admin/forgot-password">Admin Forgot Password</Link>
            <Link to="admin/reset-password">Admin Reset Password</Link>
            <Link to="admin/platform">Admin Platform</Link>
            <Link to="team-member/create-password">
                Team Member Create Password
            </Link>
            <Link to="team-member/sign-in">Team Member SignIn</Link>
            <Link to="team-member/forgot-password">
                Team Member Forgot Password
            </Link>
            <Link to="team-member/reset-password">
                Team Member Reset Password
            </Link>

            <Link to="team-member/platform">Team Member PLatform</Link>

            <div>
                <Checkbox
                    label="Hello world"
                    id="checkbox"
                    checked={value}
                    onChange={(value) => setValue(value)}
                    shape="rounded"
                />

                <Switch
                    checked={value}
                    onSwitch={(value) => setValue(value)}
                    shape="circle"
                />
                <LinearProgress
                    value={40}
                    color="red"
                    shape="rounded"
                    size="md"
                />
                <LinearProgress value={100} />
                <LinearProgress value={40} color="green" error shape="sharp" />
                <LinearProgress value={100} />
                <LinearProgress
                    value={70}
                    color="blue"
                    size="lg"
                    shape="rounded"
                />
                <LinearProgress value={100} />
                <LinearProgress
                    value={40}
                    color="red"
                    size="lg"
                    shape="rounded"
                />
                <LinearProgress value={100} />
            </div>
        </div>
    );
};

export { App };
