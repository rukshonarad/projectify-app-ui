import { FC, ReactNode } from "react";
import "./PasswordWrapper.css";
import { Typography, Toaster } from "../../../design-system";
import toast from "react-hot-toast";

type PasswordWrapperProps = {
    pageTitle: string;
    imagePath?: string;
    children: ReactNode;
};

const PasswordWrapper: FC<PasswordWrapperProps> = ({
    pageTitle,
    imagePath,
    children
}) => {
    return (
        <>
            <main className="password-wrapper">
                <div className="password-wrapper__content">
                    <Typography variant="h6" weight="semibold" align="center">
                        {pageTitle}
                    </Typography>
                    <img src={imagePath} alt={pageTitle} />
                    {children}
                </div>
            </main>
            <Toaster />
        </>
    );
};

export { PasswordWrapper };
