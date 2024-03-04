import styled, { css } from "styled-components";
import { subscriptions } from "./subscription";
import { Button, Typography } from "../../../../../design-system";

type Subscription = {
    paragraph: string;
    icon: string;
    title: string;
    price: string;
    description: string[];
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
    transition: opacity 0.5s;
    background-color: white;
    transition: background-color 0.3s ease;
    color: var(--jaguar-500);
    &:hover {
        background-color: var(--primary-700);
        p {
            color: white;
        }
        button {
            background-color: white;
            color: var(--primary-500);
        }
        h5 {
            color: white;
        }
    }
    & > img {
        width: 10.8rem;
        height: 10.8rem;
        margin-top: var(--space-32);
    }
`;

const SubscriptionTextWrapper = styled.div`
    max-width: 35rem;
    padding: var(--space-24);
    border-radius: var(--border-radius-24);
`;

const SubscriptionTitle = styled(Typography)`
    margin-bottom: var(--space-4);
`;
const SubscriptionParagraph = styled(Typography)`
    align-items: center;
    margin-bottom: 1.2rem;
`;
const SubscriptionDescriptionList = styled.ul`
    list-style-type: none;
`;

const SubscriptionDescriptionItem = styled.li`
    margin-bottom: 1.2rem;
`;
const SubscriptionPrice = styled(Typography)`
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
`;
const SubscriptionButton = styled(Button)`
    margin-top: auto;
`;
const SubscriptionsCard = ({ subscription }: SubscriptionCardProps) => {
    return (
        <SubscriptionCardBase icon={subscription.icon}>
            <SubscriptionParagraph variant="paragraphMD" weight="semibold">
                {subscription.paragraph}
            </SubscriptionParagraph>
            <img src={subscription.icon} alt="Subscription Icon" />
            <SubscriptionTextWrapper>
                <SubscriptionTitle variant="h5" weight="semibold">
                    {subscription.title}
                </SubscriptionTitle>
                <SubscriptionPrice variant="paragraphSM" weight="semibold">
                    {subscription.price}
                </SubscriptionPrice>
                <SubscriptionDescriptionList>
                    {subscription.description.map((item, index) => (
                        <SubscriptionDescriptionItem key={index}>
                            <Typography variant="subtitleLG" weight="medium">
                                {item}
                            </Typography>
                        </SubscriptionDescriptionItem>
                    ))}
                </SubscriptionDescriptionList>
            </SubscriptionTextWrapper>
            <SubscriptionButton
                shape="rounded"
                size="lg"
                color="primary"
                fullWidth
            >
                {subscription.button}
            </SubscriptionButton>
        </SubscriptionCardBase>
    );
};

export { SubscriptionsCard };
