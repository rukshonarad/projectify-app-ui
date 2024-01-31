import React from "react";
import { Link } from "react-router-dom";
import { Badge, Icon } from "./design-system";
import { useStore } from "./hooks";
import { StatusBadge } from "./design-system/StatusBadge";

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
            <Link to="admin/platform">Admin Platform</Link>
            <Link to="team-member/create-password">
                Team Member Create Password
            </Link>
            <Link to="team-member/sign-in">Team Member SignIn</Link>
            <Link to="team-member/forgot-password">
                Team Member Forgot Password
            </Link>
            <Link to="team-member/reset-password">
                Team Member Reset Password
            </Link>

            <Link to="team-member/platform">Team Member PLatform</Link>

            <StatusBadge status="ACTIVE" />
            <StatusBadge status="INACTIVE" />
            <StatusBadge status="COMPLETED" />
            <StatusBadge status="ARCHIVED" />
            <div>
                <Badge label="Badge" color="gray" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="gray"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="gray"
                    icon={<Icon iconName="flag" />}
                />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="contained"
                    color="gray"
                    status
                />
            </div>
            <div>
                <Badge label="Badge" color="violet" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="violet"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="violet"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="orange" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="orange"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="orange"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="blue" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="blue"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="blue"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="red" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="red"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="red"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="purple" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="purple"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="purple"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="green" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="green"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="green"
                    icon={<Icon iconName="flag" />}
                />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="contained"
                    color="green"
                />
            </div>
        </div>
    );
};

export { App };
