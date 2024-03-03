import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type PropsType = {
    linkText: string;
    linkTo: string;
};

const StyledLink = styled(Link)`
    color: var(--jaguar-900);
    font-weight: var(--font-weight-500);
`;

const NavigationLink: React.FC<PropsType> = ({ linkText, linkTo }) => {
    return (
        <StyledLink to={linkTo} className="paragraph-sm">
            {linkText}
        </StyledLink>
    );
};

export { NavigationLink };
