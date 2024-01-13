import React from "react";
import { Typography } from "../Typography";
import { Icon } from "../Icon";
import { Link, NavLink, useNavigate } from "react-router-dom";
type SideBarLink = {
    linkText: string;
    linkTo: string;
    iconName: string;
};

type SideBarLinksGroup = {
    title: string;
    links: SideBarLink[];
};

type SideBarLinksProps = { links: SideBarLinksGroup[]; loggedOutLink: string };

const SideBarLinks: React.FC<SideBarLinksProps> = ({
    links,
    loggedOutLink
}) => {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("authToken");
        navigate(loggedOutLink);
    };
    return (
        <>
            {links.map((group, idx) => {
                return (
                    <div className="side-bar__link-group" key={idx}>
                        <Typography
                            variant="subtitleMD"
                            weight="semibold"
                            className="side-bar__link-group-title"
                        >
                            {group.title.toUpperCase()}
                        </Typography>
                        <ul className="side-bar__links">
                            {group.links.map((link, idx) => {
                                return (
                                    <li
                                        className="side-bar__link-item"
                                        key={idx}
                                    >
                                        <NavLink
                                            to={link.linkTo}
                                            className="side-bar__link"
                                        >
                                            <Icon
                                                iconName={link.iconName}
                                                className="side-bar__link-icon"
                                            />
                                            {link.linkText}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
            <div className="side-bar__log-out">
                <Icon iconName="log-out" className="log-out-icon" />
                <Link
                    to="/admin/sign-up"
                    className="side-bar__log-out-link"
                    onClick={logOut}
                >
                    Log Out
                </Link>
            </div>
        </>
    );
};

export { SideBarLinks };
