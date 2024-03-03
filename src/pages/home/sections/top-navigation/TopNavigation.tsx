import styled from "styled-components";
import { NavigationLink } from "./NavigationLinks";
import { Button, Logo } from "../../../../design-system";

const links = [
    { text: "About", link: "https://google.com" },
    { text: "Testimonials", link: "https://facebook.com" },
    { text: "Contact", link: "" }
];

const HeaderBase = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 192rem;
    padding: 2rem 15.2rem;
`;

const NavigationLinks = styled.header`
    display: flex;
    gap: var(--space-40);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);
`;

const TopNavigation = () => {
    return (
        <HeaderBase>
            <Logo size="sm" layout="horizontal" />
            <NavigationLinks>
                {links.map((link, index) => (
                    <NavigationLink
                        key={index}
                        linkText={link.text}
                        linkTo={link.link}
                    />
                ))}
            </NavigationLinks>
            <Buttons>
                <Button
                    variant="outlined"
                    size="md"
                    shape="rounded"
                    color="primary"
                    onClick={() => {}}
                >
                    Sign Up
                </Button>
                <Button
                    size="md"
                    shape="rounded"
                    color="primary"
                    onClick={() => {}}
                >
                    Sign In
                </Button>
            </Buttons>
        </HeaderBase>
    );
};

export { TopNavigation };
