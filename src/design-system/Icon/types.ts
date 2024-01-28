export type IconName =
    | "tasks"
    | "support"
    | "stories"
    | "settings"
    | "projects"
    | "members"
    | "log-out"
    | "chevron-right"
    | "flag"
    | "check"
    | "password-eye-off"
    | "password-eye";

export type IconProps = {
    iconName: IconName;
    className?: string;
    onClick?: () => void;
};
