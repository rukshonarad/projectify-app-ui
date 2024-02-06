import React from "react";
import { Label } from "../Label";
import { CheckboxProps, CheckboxShape } from "./types";

import "./Checkbox.css";
import { trimWhiteSpaces } from "../utils";
import { Icon, IconName } from "../Icon";

const shapeClassNames = {
    rounded: "checkbox__custom--rounded",
    circle: "checkbox__custom--circle"
};

const iconNames: {
    [Key in CheckboxShape]: { indeterminate: IconName; checked: IconName };
} = {
    rounded: {
        indeterminate: "minus",
        checked: "check"
    },
    circle: {
        indeterminate: "minus",
        checked: "check"
    }
};

const getFinalIconName = (
    shape: CheckboxShape | undefined,
    indeterminate: boolean | undefined
): IconName => {
    if (shape) {
        if (indeterminate) {
            return iconNames[shape].indeterminate;
        } else {
            return iconNames[shape].checked;
        }
    }

    return indeterminate ? "minus-sharp" : "check-sharp";
};

const Checkbox: React.FC<CheckboxProps> = ({
    id,
    checked,
    label,
    onChange,
    className,
    shape,
    indeterminate,
    disabled,
    position
}) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);
        onChange(e.target.checked);
    };
    const checkboxWrapperClassName = trimWhiteSpaces(
        `checkbox ${className || ""}`
    );

    const shapeClassName = shape ? shapeClassNames[shape] : "";
    const checkedClassName = checked ? "checkbox__custom--checked" : "";
    const disabledClassName = disabled ? "checkbox__custom--disabled" : "";
    const customCheckboxClassName = trimWhiteSpaces(
        `checkbox__custom ${checkedClassName} ${shapeClassName} ${disabledClassName}`
    );

    const labelClassName = `checkbox__label ${
        position ? "checkbox__label--end" : ""
    }`;

    const iconName = getFinalIconName(shape, indeterminate);

    return (
        <div className={checkboxWrapperClassName}>
            <Label htmlFor={id} className={labelClassName} disabled={disabled}>
                <div className={customCheckboxClassName}>
                    <input
                        type="checkbox"
                        id={id}
                        checked={checked}
                        onChange={handleOnChange}
                        className="checkbox__hidden-input"
                        disabled={disabled}
                    />
                    <div className="checkbox__background"></div>
                    {checked && (
                        <Icon iconName={iconName} className="checkbox__icon" />
                    )}
                </div>
                {label && <span>{label}</span>}
            </Label>
        </div>
    );
};

export { Checkbox };
