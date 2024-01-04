import { FC, ReactNode } from "react";
import "./Main-layout.css";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <main className="main-wrapper">
            <section className="sidebar"></section>
            <section className="main-content">{children}</section>
        </main>
    );
};

export { MainLayout };
