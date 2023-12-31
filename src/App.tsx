import { Link } from "react-router-dom";

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

            <Link to="team-member/team-member-login">Team Member Login</Link>
            <Link to="team-member/team-member-forgot-password">
                Team Member Forgot Password
            </Link>
            <Link to="team-member/team-member-reset-password">
                Team Member Reset Password
            </Link>
            <Link to="admin-platform">Admin Platform</Link>
            <Link to="team-members-platform">Team Member PLatform</Link>
        </div>
    );
};

export { App };
