import { FC, ReactNode } from "react";
import "./Password-wrapper.css";
import { Button, Typography } from "../../../design-system";

type PasswordWrapperProps = {
    pageTitle: string;
    imagePath: string;
    children: ReactNode;
    btnText: string;
};

const PasswordWrapper: FC<PasswordWrapperProps> = ({
    pageTitle,
    imagePath,
    children,
    btnText
}) => {
    return (
        <main className="password-wrapper">
            <div className="password-wrapper__content">
                <Typography variant="h6" weight="semibold" align="center">
                    {pageTitle}
                </Typography>
                <img src={imagePath} alt={pageTitle} />
                {children}
                <Button
                    shape="rounded"
                    color="primary"
                    size="lg"
                    className="password-wrapper__btn"
                >
                    {btnText}
                </Button>
            </div>
        </main>
    );
};

export { PasswordWrapper };
