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
                className={`block mb-2 text-sm font-medium ${
                    error
                        ? "text-red-600 dark:text-red-500"
                        : "text-gray-900 dark:text-gray-300"
                } ${labelClassName}`}
            >
                {label}
            </label>
            <select
                value={value}
                onChange={onChange}
                name={name}
                id={id}
                className={`${
                    error
                        ? `bg-red-50 border-red-300 text-red-600 focus:ring-red-500 focus:border-red-500 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-red-100 dark:focus:ring-red-500 dark:focus:border-red-500`
                        : `bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                } border text-sm rounded-lg block w-full p-2.5 ${selectClassName}`}
            >
                {children}
            </select>
            {error ? <ValidationError>{error}</ValidationError> : ""}
        </>
    );
};

export default Select;
