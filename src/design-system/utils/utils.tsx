export const trimWhiteSpaces = (str: string) => {
    return str
        .split(" ")
        .filter((item) => item !== "")
        .join(" ");
};

export const getNameInitials = (name: string): string => {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
    return initials;
};
