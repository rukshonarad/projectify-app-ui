import React, { FC } from "react";
import "./Button.css";

type ButtonSize = "sm" | "md" | "lg";
type ButtonShape = "rounded" | "circle";
type ButtonColor = "primary" | "secondary" | "danger";
type ButtonVariant = "contained" | "outlined" | "text";

type ButtonProps = {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: ButtonColor;
    variant?: ButtonVariant;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
};

const sizeClassNames = {
    sm: "btn-small",
    md: "btn-medium",
    lg: "btn-large"
};

const shapeClassNames = {
    rounded: "btn-rounded",
    circle: "btn-circle"
};

const colorClassNames = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-danger"
};

const variantClassNames = {
    contained: "btn-contained",
    outlined: "btn-outlined",
    text: "btn-text"
};

const Button: FC<ButtonProps> = (props) => {
    const { size, shape, color, variant, disabled, className, children } =
        props;

    const sizeClassName = size !== undefined ? sizeClassNames[size] : "";

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const colorClassName = color !== undefined ? colorClassNames[color] : "";

    const variantClassName =
        variant !== undefined ? variantClassNames[variant] : "";

    const finalClassNames = `btn ${colorClassName} ${sizeClassName} ${shapeClassName} ${variantClassName} ${
        className || ""
    }`;

    return (
        <button
            className={finalClassNames}
            disabled={disabled}
            onClick={() => alert("Hello")}
        >
            {children}
        </button>
    );
};

export { Button };
