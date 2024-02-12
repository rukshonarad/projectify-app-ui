import { IconName } from "../Icon";

export type BadgeColors =
    | "violet"
    | "orange"
    | "green"
    | "blue"
    | "red"
    | "purple"
    | "gray";

type BadgeShape = "rounded" | "circle";

type BadgeVariant = "contained" | "outlined";

interface BadgePropsBase {
    label: string;
    color: BadgeColors;
    shape?: BadgeShape;
    variant?: BadgeVariant;
    status?: boolean;
    className?: string;
    iconName?: IconName;
}

type ExclusiveBadgeProps =
    | { status?: BadgePropsBase["status"]; iconName?: never }
    | { iconName?: BadgePropsBase["iconName"]; status?: never };

export type BadgeProps = BadgePropsBase & ExclusiveBadgeProps;
