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
            <Route path="/admin/sign-in" element={<AdminLogin />} />
            <Route
                path="/admin/forgot-password"
                element={<AdminForgotPassword />}
            />
            <Route
                path="/admin/reset-password"
                element={<AdminResetPassword />}
            />

            <Route path="/platform" element={<AdminPlatform />}>
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<AdminTasks />} />
                <Route path="team-members" element={<TeamMembers />} />
            </Route>

            <Route
                path="team-members-platform"
                element={<TeamMemberPlatform />}
            >
                <Route path="projects" element={<TeamMemberProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route
                    path="team-members-tasks"
                    element={<TeamMemberTasks />}
                />
            </Route>
        </>
    )
);
