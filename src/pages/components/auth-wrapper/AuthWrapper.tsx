import { FC, ReactNode } from "react";
import { Logo } from "../../../design-system/Logo";
import styled from "styled-components";

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;
`;
const AuthForm = styled.section`
    grid-column: 1 / 2;
    padding: var(--space-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AuthContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-50);
    flex-basis: 57rem;
`;
const AuthImg = styled.section`
    grid-column: 2 / 3;
    padding: var(--space-50);
    img {
        height: 100%;
        width: 100%;
        border-radius: var(--space-50);
        object-fit: cover;
    }
`;
type AuthWrapperProps = {
    imageUrl: string;
    children: ReactNode;
    pageTitle: string;
};

const AuthWrapper: FC<AuthWrapperProps> = ({
    imageUrl,
    pageTitle,
    children
}) => {
    return (
        <Wrapper className="auth-wrapper">
            <AuthForm>
                <AuthContent>
                    <Logo layout="vertical" size="lg" customText={pageTitle} />
                    {children}
                </AuthContent>
            </AuthForm>
            <AuthImg>
                <img src={imageUrl} alt="Projectify App | Hands making star" />
            </AuthImg>
        </Wrapper>
    );
};

export { AuthWrapper };
