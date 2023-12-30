import { FC, ReactNode } from "react";
import { Logo } from "../../../design-system/Logo";
import "./styles.css";

type AuthWrapperProps = {
    imageUrl: string;
    children: ReactNode;
};

const AuthWrapper: FC<AuthWrapperProps> = ({ imageUrl, children }) => {
    return (
        <main className="auth-wrapper">
            <section className="auth-wrapper__form">
                <Logo layout="vertical" size="lg" />
                {children}
            </section>
            <section className="auth-wrapper__image">
                <img src={imageUrl} alt="Projectify App | Hands making star" />
            </section>
        </main>
    );
};

export { AuthWrapper };
