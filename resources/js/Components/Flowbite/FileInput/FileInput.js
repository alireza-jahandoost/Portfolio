import React from "react";

const FileInput = ({ id, label, onChange, name, multiple = false }) => {
    return (
        <div className="flex justify-center items-center w-full">
            <label
                htmlFor={id}
                className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                        className="mb-3 w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {label}
                    </p>
                </div>
                <input
                    id={id}
                    onChange={onChange}
                    name={name}
                    type="file"
                    className="hidden"
                    multiple={multiple}
                />
            </label>
        </div>
    );
};

export default FileInput;
