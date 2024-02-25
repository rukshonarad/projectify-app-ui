import React from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { InputSize } from "../Input";
import { trimWhiteSpaces } from "../utils";
import getDate from "date-fns/getDate";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import { Icon } from "../Icon";

const inputSizeClassNames = {
    sm: "input-small",
    md: "input-medium",
    lg: "input-large"
};

const shapeClassNames = {
    input: {
        rounded: "input-rounded",
        circle: "input-circle"
    },

    datePicker: {
        rounded: "v1-date-picker--rounded",
        circle: "v1-date-picker--circle"
    }
};

interface DataPickerProps {
    selected: ReactDatePickerProps["selected"];
    onSelect?: (value: Date) => void;
    onChange: (value: Date) => void;
    placeholder: string;
    disabled?: boolean;
    inputSize?: InputSize;
    shape?: "rounded" | "circle";
}

const DatePickerV1: React.FC<DataPickerProps> = ({
    selected,
    onSelect,
    onChange,
    placeholder,
    disabled,
    inputSize,
    shape
}) => {
    const handleOnChange = (date: Date) => {
        onChange(date);
    };
    const handleOnSelect = (date: Date) => {
        onSelect && onSelect(date);
    };

    const customizeDay = (_: Date) => {
        return "v1-date-picker__day-wrapper";
    };

    const renderDayContents = (_: number, date: Date) => {
        return <div className="v1-date-picker__day">{getDate(date)}</div>;
    };

    const inputSizeClassName = inputSize ? inputSizeClassNames[inputSize] : "";
    const inputShapeClassName = shape ? shapeClassNames.input[shape] : "";
    const calendarShapeClassName = shape
        ? shapeClassNames.datePicker[shape]
        : "";

    const finalInputClassNames = trimWhiteSpaces(
        `v1-date-picker__input input ${inputSizeClassName} ${inputShapeClassName}`
    );

    const finalCalendarClassNames = trimWhiteSpaces(
        `v1-date-picker ${calendarShapeClassName} ${
            inputSize && inputSize === "lg" ? "v1-date-picker--lg" : ""
        }`
    );
    return (
        <ReactDatePicker
            selected={selected}
            onSelect={handleOnSelect}
            onChange={handleOnChange}
            className={finalInputClassNames}
            placeholderText={placeholder}
            disabled={disabled}
            dayClassName={customizeDay}
            renderDayContents={renderDayContents}
            calendarClassName={finalCalendarClassNames}
            showIcon
            icon={
                <Icon
                    iconName="calendar"
                    className="v1-date-picker__calendar-icon"
                />
            }
            toggleCalendarOnIconClick
        />
    );
};

export { DatePickerV1 };
