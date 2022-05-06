import React from "react";

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
}) => {
    return (
        <>
            <label
                htmlFor={id}
                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${labelClassName}`}
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClassName}`}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </>
    );
};
export default TextInput;
