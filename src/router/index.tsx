import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import { App } from "../App";
import {
    AdminSignup,
    AdminLogin,
    AdminResetPassword,
    AdminForgotPassword
} from "../pages";
export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/admin/sign-up" element={<AdminSignup />} />
            <Route path="/admin/sign-in" element={<AdminLogin />} />
            <Route
                path="/admin/forgot-password"
                element={<AdminForgotPassword />}
            />
            <Route
                path="/admin/reset-password"
                element={<AdminResetPassword />}
            />
            <Route path="/platform">
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<h1>Admin tasks</h1>} />
                <Route path="team-members" element={<h1>Members</h1>} />
            </Route>
        </>
    )
);
