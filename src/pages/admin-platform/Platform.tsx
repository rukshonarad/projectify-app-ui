import { Outlet, Navigate } from "react-router-dom";
import { SideBar, SideBarLinks } from "../../design-system";
import { AppContent, AppLayout, SideBarUser } from "../components";
import user from "../../assets/images/user.png";

const links = [
    {
        title: "Menu",
        links: [
            {
                linkText: "Project",
                linkTo: "projects",
                iconName: "projects"
            },
            {
                linkText: "Stories",
                linkTo: "stories",
                iconName: "stories"
            },
            {
                linkText: "Personal Tasks",
                linkTo: "personal-tasks",
                iconName: "tasks"
            },
            {
                linkText: "Team Members",
                linkTo: "team-members",
                iconName: "members"
            }
        ]
    },
    {
        title: "Settings",
        links: [
            {
                linkText: "Settings",
                linkTo: "settings",
                iconName: "settings"
            },
            {
                linkText: "Support",
                linkTo: "support",
                iconName: "support"
            }
        ]
    }
];

const Platform = () => {
    const isAuthenticated = false;
    if (isAuthenticated) {
        return (
            <AppLayout>
                <SideBar>
                    <SideBarUser
                        details={{
                            firstName: "Rukhshona",
                            lastName: "Radjabova",
                            imageUrl: user,
                            email: "info@email.com"
                        }}
                    />
                    <SideBarLinks
                        links={links}
                        loggedOutLink="/admin/sign-in"
                    />
                </SideBar>
                <AppContent>
                    <Outlet />
                </AppContent>
            </AppLayout>
        );
    } else {
        return <Navigate to="../admin/sign-in" />;
    }
};

export { Platform as AdminPlatform };
