import React from "react";

const Textarea = ({
    label,
    id,
    name,
    value,
    onChange,
    labelClassName,
    textareaClassName,
    rowsNumber = 4,
}) => {
    return (
        <>
            <label
                htmlFor={id}
                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 ${labelClassName}`}
            >
                {label}
            </label>
            <textarea
                id={id}
                rows={rowsNumber}
                name={name}
                onChange={onChange}
                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${textareaClassName}`}
                placeholder="Your message..."
                value={value}
            ></textarea>
        </>
    );
};

export default Textarea;
