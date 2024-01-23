import { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { SideBar, SideBarLinks, Toaster } from "../../design-system";
import { AppContent, AppLayout, SideBarUser } from "../components";

import toast from "react-hot-toast";
import { Actions, InitUserAction } from "../../store/actions";
import { useLocalStorage, useStore } from "../../hooks";

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
    const {
        state: { user },
        dispatch
    } = useStore();
    const navigate = useNavigate();
    const { removeItem } = useLocalStorage();

    const logOut = () => {
        removeItem("authToken");
        removeItem("userRole");
        dispatch({ type: Actions.RESET_STATE });
        navigate("/admin/login");
    };

    return (
        <>
            <AppLayout>
                <SideBar>
                    <SideBarUser
                        details={{
                            firstName: user?.firstName || "",
                            lastName: user?.lastName || "",
                            imageUrl: "",
                            email: user?.email || ""
                        }}
                    />
                    <SideBarLinks links={links} logOut={logOut} />
                </SideBar>
                <AppContent>
                    <Outlet />
                </AppContent>
            </AppLayout>
            <Toaster />
        </>
    );
};

export { Platform as AdminPlatform };
