import React from "react";
import { Link } from "react-router-dom";
import { Badge, Icon, DatePickerV1 } from "./design-system";
import { useStore } from "./hooks";
import { StatusBadge } from "./design-system/StatusBadge";
import { useState } from "react";
const App = () => {
    const [date, setDate] = useState<Date>();
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
                <DatePickerV1
                    selected={date}
                    onChange={(date) => setDate(date)}
                    placeholder="Select Deadline"
                />
            </div>
        </div>
    );
};

export { App };
