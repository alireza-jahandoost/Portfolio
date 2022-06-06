import React from "react";
import ValidationError from "@/Components/Personalized/ValidationError/ValidationError";

const FloatingOutlinedInput = ({
    id,
    name,
    inputClassName = "",
    labelClassName = "",
    label,
    value,
    onChange,
    helper = "",
    helperClassName = "",
    error = "",
    focused = false,
    required = false,
}) => {
    return (
        <>
            <div className="relative">
                <input
                    type="text"
                    name={name}
                    id={id}
                    placeholder=" "
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                        error &&
                        "border-red-600 dark:border-red-600 focus:border-red-600 dark:focus:border-red-600"
                    } ${inputClassName}`}
                    value={value}
                    onChange={onChange}
                    autoFocus={focused}
                    required={required}
                />
                <label
                    htmlFor={id}
                    className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
                        error &&
                        "text-red-600 dark:text-red-600 peer-focus:text-red-600 dark:peer-focus:text-red-600"
                    } ${labelClassName}`}
                >
                    {label}
                </label>
            </div>
            {error ? <ValidationError>{error}</ValidationError> : ""}
            <p
                className={`mt-2 text-xs text-gray-500 dark:text-gray-400 ${helperClassName}`}
            >
                {helper}
            </p>
        </>
    );
};

export default FloatingOutlinedInput;
