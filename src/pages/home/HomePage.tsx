import React from "react";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import styled from "styled-components";
import { Features } from "./sections/features/Features";

const Base = styled.div`
    max-width: 144rem;
    margin: 0 auto;
`;

const HomePage = () => {
    return (
        <Base>
            <TopNavigation />
            <Features />
        </Base>
    );
};

export { HomePage };
