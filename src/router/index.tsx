import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import { App } from "../App";
import {
    AdminLogin,
    AdminSignup,
    AdminForgotPassword,
    AdminResetPassword,
    AdminPlatform,
    AdminProjects,
    AdminTasks,
    TeamMemberLogin,
    TeamMemberForgotPassword,
    TeamMemberResetPassword,
    TeamMembers,
    TeamMemberPlatform,
    TeamMemberProjects,
    TeamMemberTasks
} from "../pages";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/admin/sign-up" element={<AdminSignup />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
                path="/admin/forgot-password"
                element={<AdminForgotPassword />}
            />
            <Route
                path="/admin/reset-password"
                element={<AdminResetPassword />}
            />

            <Route path="/admin-platform" element={<AdminPlatform />}>
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<AdminTasks />} />
                <Route path="team-members" element={<TeamMembers />} />
            </Route>

            <Route
                path="/team-member/team-member-login"
                element={<TeamMemberLogin />}
            />
            <Route
                path="/team-member/team-member-forgot-password"
                element={<TeamMemberForgotPassword />}
            />
            <Route
                path="/team-member/team-member-reset-password"
                element={<TeamMemberResetPassword />}
            />
            <Route
                path="team-members-platform"
                element={<TeamMemberPlatform />}
            >
                <Route path="projects" element={<TeamMemberProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<TeamMemberTasks />} />
            </Route>
        </>
    )
);
