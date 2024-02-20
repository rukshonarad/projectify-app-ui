import styled from "styled-components";

const AppLayout = styled.main`
    display: grid;
    grid-template-columns: 30.4rem 1fr;
`;

const AppContent = styled.section`
    background-color: var(--jaguar-12);
    height: 100vh;
    padding: var(--space-30);
`;
export const Scrollable = styled.div`
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.4rem;
        border-radius: var(--border-radius-8);
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: var(--border-radius-8);
    }

    &::-webkit-scrollbar-thumb {
        background: var(--jaguar-100);
        border-radius: var(--border-radius-8);
    }
`;

export { AppLayout, AppContent };
