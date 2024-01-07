import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link to="admin/sign-up">Sign-Up</Link>
            <Link to="admin/sign-in">Sign-In</Link>
            <Link to="admin/forgot-password">Forgot Password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
        </>
    );
};

export { App };
