import styled, { css } from "styled-components";
import { subscriptions } from "./subscription";
import { Button, Typography } from "../../../../../design-system";

type Subscription = {
    paragraph: string;
    icon: string;
    title: string;
    price: string;
    description: string;
    button: string;
};

type SubscriptionCardProps = {
    subscription: Subscription;
};

export const SubscriptionCardBase = styled.div<{ icon: string }>`
    padding: var(--space-30);
    border-radius: var(--border-radius-40);
    box-shadow: var(--shadow-xs);
    max-width: 37rem;
    height: 67.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e6b1e9;
    transition: opacity 0.5s;

    & > img {
        width: 10.8rem;
        height: 10.8rem;
        margin-top: var(--space-32);
        margin-bottom: var(--space-40);
    }
`;

const SubscriptionTextWrapper = styled.div`
    max-width: 35rem;
    padding: var(--space-24);
    border-radius: var(--border-radius-24);
    background-color: var(--blue);
`;

const SubscriptionTitle = styled(Typography)`
    margin-bottom: var(--space-4);
`;
const SubscriptionParagraph = styled(Typography)`
    align-items: center;
`;
const SubscriptionDescription = styled(Typography)`
    color: var(--jaguar-500);
`;

const SubscriptionsCard = ({ subscription }: SubscriptionCardProps) => {
    return (
        <SubscriptionCardBase icon={subscription.icon}>
            <SubscriptionParagraph variant="paragraphMD" weight="semibold">
                {subscription.paragraph}
            </SubscriptionParagraph>
            <img src={subscription.icon} alt="Subscription Icon" />
            <SubscriptionTextWrapper>
                <SubscriptionTitle variant="h6" weight="semibold">
                    {subscription.title}
                </SubscriptionTitle>
                <Typography variant="paragraphMD" weight="semibold">
                    {subscription.price}
                </Typography>
                <SubscriptionDescription variant="subtitleLG" weight="medium">
                    {subscription.description}
                </SubscriptionDescription>
            </SubscriptionTextWrapper>
            <Button shape="rounded" size="lg" color="primary" fullWidth>
                {subscription.button}
            </Button>
        </SubscriptionCardBase>
    );
};

export { SubscriptionsCard };
