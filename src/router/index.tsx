import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import { App } from "../App";
import {
    AdminSignIn,
    AdminSignup,
    AdminForgotPassword,
    AdminResetPassword,
    AdminPlatform,
    AdminProjects,
    AdminTasks,
    TeamMemberCreatePassword,
    TeamMemberSignIn,
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
            <Route path="/admin/signIn" element={<AdminSignIn />} />
            <Route
                path="/admin/forgot-password"
                element={<AdminForgotPassword />}
            />
            <Route
                path="/admin/reset-password"
                element={<AdminResetPassword />}
            />

            <Route path="/admin/platform" element={<AdminPlatform />}>
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<AdminTasks />} />
                <Route path="team-members" element={<TeamMembers />} />
            </Route>

            <Route
                path="/team-member/create-password"
                element={<TeamMemberCreatePassword />}
            />
            <Route path="/team-member/sign-in" element={<TeamMemberSignIn />} />
            <Route
                path="/team-member/forgot-password"
                element={<TeamMemberForgotPassword />}
            />
            <Route
                path="/team-member/reset-password"
                element={<TeamMemberResetPassword />}
            />
            <Route path="team-member/platform" element={<TeamMemberPlatform />}>
                <Route path="projects" element={<TeamMemberProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<TeamMemberTasks />} />
            </Route>
        </>
    )
);
