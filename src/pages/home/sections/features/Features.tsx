import styled from "styled-components";
import { Button, Typography } from "../../../../design-system";
import { FeaturesCard } from "./featuresCard";
import { features } from "./featuresCard/features";

const SectionBase = styled.section`
    max-width: 192rem;
    padding: 2rem 15.2rem;
`;

const FeaturesTextWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
`;

const Description = styled(Typography)`
    color: var(--jaguar-500);
`;

const FeaturesCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-30);
    margin-bottom: var(--space-50);
`;

const ButtonWrapper = styled.div`
    margin: 0 auto;
    max-width: 27rem;
`;

const Features = () => {
    return (
        <SectionBase>
            <FeaturesTextWrapper>
                <Title variant="h5" weight="bold">
                    Get the best for your team
                </Title>
                <Description variant="paragraphSM" weight="medium">
                    Our solution provides simple yet effective project
                    management
                </Description>
            </FeaturesTextWrapper>
            <FeaturesCardsWrapper>
                {features.map((feature, index) => (
                    <FeaturesCard key={index} feature={feature} />
                ))}
            </FeaturesCardsWrapper>
            <ButtonWrapper>
                <Button
                    size="md"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={() => {}}
                >
                    Try a Demo
                </Button>
            </ButtonWrapper>
        </SectionBase>
    );
};

export { Features };
