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
    AdminPersonalTasks,
    AdminTeamMembers,
    TeamMemberSignIn,
    TeamMemberForgotPassword,
    TeamMemberResetPassword,
    TeamMemberCreatePassword,
    TeamMemberPlatform,
    TeamMemberTasks,
    TeamMemberProjects
} from "../pages";
import { UserRole } from "../types";
import { ProtectedRoute } from "./ProtectedRoute";
import { Auth } from "./Auth";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route
                path="admin/sign-up"
                element={
                    <Auth
                        component={<AdminSignup />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/login"
                element={
                    <Auth
                        component={<AdminSignIn />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/forgot-password"
                element={
                    <Auth
                        component={<AdminForgotPassword />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/reset-password"
                element={
                    <Auth
                        component={<AdminResetPassword />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/platform"
                element={
                    <ProtectedRoute
                        component={<AdminPlatform />}
                        userType={UserRole.admin}
                    />
                }
            >
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<AdminPersonalTasks />} />
                <Route path="team-members" element={<AdminTeamMembers />} />
            </Route>

            <Route path="team-member/sign-in" element={<TeamMemberSignIn />} />
            <Route
                path="team-member/forgot-password"
                element={<TeamMemberForgotPassword />}
            />
            <Route
                path="team-member/reset-password"
                element={<TeamMemberResetPassword />}
            />
            <Route
                path="team-member/create-password"
                element={<TeamMemberCreatePassword />}
            />
            <Route
                path="team-member/platform"
                element={
                    <ProtectedRoute
                        component={<TeamMemberPlatform />}
                        userType={UserRole.teamMember}
                    />
                }
            >
                <Route path="stories" element={<h1>Stories</h1>} />

                <Route path="personal-tasks" element={<TeamMemberTasks />} />
                <Route path="projects" element={<TeamMemberProjects />} />
            </Route>
        </>
    )
);
