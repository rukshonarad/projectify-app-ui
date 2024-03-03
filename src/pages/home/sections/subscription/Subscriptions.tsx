import styled from "styled-components";
import { Button, Typography } from "../../../../design-system";
import { SubscriptionsCard } from "./subscriptionCard";
import { subscriptions } from "./subscriptionCard/subscription";

const SectionBase = styled.section`
    max-width: 192rem;
    padding: 2rem 15.2rem;
`;

const SubscriptionTextWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    margin-bottom: var(--space-10);
`;

const Description = styled(Typography)`
    color: var(--jaguar-500);
`;

const SubscriptionCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-30);
    margin-bottom: var(--space-50);
`;
const SubscriptionDescriptionList = styled.ul`
    list-style-type: disc; /* Change this to match your preferred list style */
    padding-left: 20px; /* Adjust as needed */
`;

const SubscriptionDescriptionItem = styled.li`
    /* Your styles for each list item */
`;

const Subscription = () => {
    return (
        <SectionBase>
            <SubscriptionTextWrapper>
                <Title variant="paragraphMD" weight="semibold">
                    Join The Projectify
                </Title>
                <Title variant="h5" weight="bold">
                    Find The Right Plan
                </Title>
                <Description variant="paragraphSM" weight="medium">
                    Flexible pricing options for startups and big teams
                </Description>
            </SubscriptionTextWrapper>
            <SubscriptionCardsWrapper>
                {subscriptions.map((subscription, index) => (
                    <SubscriptionsCard
                        key={index}
                        subscription={subscription}
                    />
                ))}
            </SubscriptionCardsWrapper>
        </SectionBase>
    );
};

export { Subscription };
