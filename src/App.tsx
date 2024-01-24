import React from "react";
import { Link } from "react-router-dom";
import { KanbanBadge } from "./design-system/KanbanBadge";
import { useStore } from "./hooks";
import { StatusBadge } from "./design-system/StatusBadge";

const App = () => {
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
            <Link to="team-member/login">Team Member SignIn</Link>
            <Link to="team-member/forgot-password">
                Team Member Forgot Password
            </Link>
            <Link to="team-member/reset-password">
                Team Member Reset Password
            </Link>

            <Link to="team-member/platform">Team Member PLatform</Link>
            <KanbanBadge status="DONE" dueDate="Jan 30" />
            <KanbanBadge status="TODO" dueDate="Jan 30" />
            <KanbanBadge status="INPROGRESS" dueDate="Jan 30" />
            <StatusBadge status="ACTIVE" />
            <StatusBadge status="INACTIVE" />
            <StatusBadge status="COMPLETED" />
            <StatusBadge status="ARCHIVED" />
        </div>
    );
};

export { App };
