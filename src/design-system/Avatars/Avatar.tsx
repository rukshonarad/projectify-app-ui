import React, { FC } from "react";
import { trimWhiteSpaces, getNameInitials } from "../utils";
import "./Avatar.css";

type AvatarSize = "sm" | "md" | "lg";
type AvatarShape = "rounded" | "circle";
type AvatarType = "initial" | "photo";

type AvatarProps = {
    size?: AvatarSize;
    shape?: AvatarShape;
    type?: AvatarType;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    imageUrl?: string;
};

const sizeClassNames = {
    sm: "avatar-small",
    md: "avatar-medium",
    lg: "avatar-large"
};

const shapeClassNames = {
    rounded: "avatar-rounded",
    circle: "avatar-circle"
};

const Avatar: FC<AvatarProps> = (props) => {
    const {
        size,
        shape,
        type,
        disabled,
        className,
        children,
        onClick,
        imageUrl
    } = props;

    const sizeClassName = size ? sizeClassNames[size] : "";
    const shapeClassName = shape ? shapeClassNames[shape] : "";
    let typeElement: React.ReactNode = children;

    if (type === "initial") {
        const initials = getNameInitials(children as string);
        typeElement = <span>{initials}</span>;
    } else if (type === "photo") {
        typeElement = <img src={imageUrl} alt="Avatar" />;
    }

    const finalClassNames = `avatar ${sizeClassName} ${shapeClassName} ${
        className || ""
    }`;

    return (
        <button
            className={trimWhiteSpaces(finalClassNames)}
            disabled={disabled}
            onClick={onClick}
        >
            {typeElement}
        </button>
    );
};

export { Avatar };
