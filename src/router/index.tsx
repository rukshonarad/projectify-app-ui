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
    TeamMemberSignIn,
    TeamMemberForgotPassword,
    TeamMemberResetPassword,
    TeamMemberCreatePassword,
    TeamMemberPlatform,
    TeamMemberTasks
} from "../pages";
import { UserRole } from "../types";
import { Private } from "./Private";
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
                path="admin/sign-in"
                element={
                    <Auth
                        component={<AdminSignIn />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/forget-password"
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
                    <Private
                        component={<AdminPlatform />}
                        userType={UserRole.admin}
                    />
                }
            >
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<AdminTasks />} />
                <Route path="team-members" element={<h1>Members</h1>} />
            </Route>

            <Route path="team-member/sign-in" element={<TeamMemberSignIn />} />
            <Route
                path="team-member/forget-password"
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
                    <Private
                        component={<TeamMemberPlatform />}
                        userType={UserRole.teamMember}
                    />
                }
            >
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<TeamMemberTasks />} />
                <Route path="team-members" element={<h1>Members</h1>} />
            </Route>
        </>
    )
);
