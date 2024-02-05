import React from "react";
import { Link } from "react-router-dom";
import {
    Badge,
    Icon,
    DatePickerV1,
    Select,
    OptionValue
} from "./design-system";
import { useStore } from "./hooks";
import { StatusBadge } from "./design-system/StatusBadge";
import { useState } from "react";
const App = () => {
    const [date, setDate] = useState<Date>();
    const [value, setValue] = useState<OptionValue>("");
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
            <div>
                <Select
                    options={[
                        { label: "Option1", value: "option1" },
                        { label: "Option2", value: "option2" },
                        { label: "Option3", value: "option3" },
                        { label: "Option4", value: "option4" },
                        { label: "Option5", value: "option5" },
                        { label: "Option6", value: "option6" }
                    ]}
                    headerPlaceholder="Select Option"
                    onSelect={(option) => setValue(option.value)}
                    size="md"
                    shape="circle"
                    value={value}
                />
            </div>
        </div>
    );
};

export { App };
