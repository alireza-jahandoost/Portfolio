import React from "react";
import ValidationError from "@/Components/Personalized/ValidationError/ValidationError";

const TextInput = ({
    id,
    label,
    name,
    value,
    labelClassName,
    inputClassName,
    onChange,
    placeholder,
    required = false,
    type = "text",
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
            <input
                type={type}
                id={id}
                className={`${
                    error
                        ? `placeholder-red-400 bg-red-50 border-red-300 text-red-600 focus:ring-red-500 focus:border-red-500 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:border-red-500 dark:focus:ring-red-500`
                        : `bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 dark:focus:ring-red-500`
                } border text-sm rounded-lg block w-full p-2.5 ${inputClassName}`}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
            {error ? <ValidationError>{error}</ValidationError> : ""}
        </>
    );
};
export default TextInput;
