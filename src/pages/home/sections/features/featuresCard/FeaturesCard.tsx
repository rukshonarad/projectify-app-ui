import styled, { css } from "styled-components";
import { features } from "./features";
import { Typography } from "../../../../../design-system";

import frameIcon from "../../../../../assets/illustrations/frame-icon.svg";
import teamIcon from "../../../../../assets/illustrations/team-icon.svg";
import personIcon from "../../../../../assets/illustrations/person-icon.svg";
import timeIcon from "../../../../../assets/illustrations/time-icon.svg";
import documentIcon from "../../../../../assets/illustrations/document-icon.svg";
import clockIcon from "../../../../../assets/illustrations/clock-icon.svg";

type Feature = {
    icon: string;
    title: string;
    description: string;
};

type FeaturesCardProps = {
    feature: Feature;
};

export const FeaturesCardBase = styled.div<{ icon: string }>`
    padding: var(--space-8);
    border-radius: var(--border-radius-24);
    box-shadow: var(--shadow-xs);
    max-width: 37rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: opacity 0.5s;
    background-color: ${({ icon }) => {
        switch (icon) {
            case frameIcon:
                return "var(--green-25)";
            case teamIcon:
                return "var(--sunglow-25)";
            case personIcon:
                return "var(--primary-25)";
            case timeIcon:
                return "var(--red-orange-25)";
            case documentIcon:
                return "var(--dodger-blue-25)";
            case clockIcon:
                return "var(--purple-25)";
        }
    }};

    & > img {
        width: 10.8rem;
        height: 10.8rem;
        margin-top: var(--space-32);
        margin-bottom: var(--space-40);
    }
`;

const FeatureTextWrapper = styled.div`
    max-width: 35rem;
    padding: var(--space-24);
    border-radius: var(--border-radius-24);
    background-color: var(--white);
`;

const FeatureTitle = styled(Typography)`
    margin-bottom: var(--space-4);
`;

const FeatureDescription = styled(Typography)`
    color: var(--jaguar-500);
`;

const FeaturesCard = ({ feature }: FeaturesCardProps) => {
    return (
        <FeaturesCardBase icon={feature.icon}>
            <img src={feature.icon} alt="Feature Icon" />
            <FeatureTextWrapper>
                <FeatureTitle variant="paragraphLG" weight="semibold">
                    {feature.title}
                </FeatureTitle>
                <FeatureDescription variant="subtitleLG" weight="medium">
                    {feature.description}
                </FeatureDescription>
            </FeatureTextWrapper>
        </FeaturesCardBase>
    );
};

export { FeaturesCard };
