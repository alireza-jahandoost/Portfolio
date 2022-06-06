import React from "react";
import ValidationError from "@/Components/Personalized/ValidationError/ValidationError";

const Select = ({
    id,
    name,
    label,
    value,
    onChange,
    labelClassName,
    selectClassName,
    children,
    error = null,
}) => {
    return (
        <>
            <label
                htmlFor={id}
                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 ${labelClassName}`}
            >
                {label}
            </label>
            <select
                value={value}
                onChange={onChange}
                name={name}
                id={id}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${selectClassName}`}
            >
                {children}
            </select>
            {error ? <ValidationError>{error}</ValidationError> : ""}
        </>
    );
};

export default Select;
