import React from "react";

const FileInput = ({ id, label, onChange, name, error, multiple = false }) => {
    return (
        <div className="flex justify-center items-center w-full h-64">
            <label
                htmlFor={id}
                className={`flex flex-col justify-center items-center w-full h-full ${
                    error ? "bg-red-50" : "bg-gray-50"
                } rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ${
                    error ? "hover:bg-red-100" : "hover:bg-gray-100"
                }`}
            >
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                        className={`mb-3 w-10 h-10 ${
                            error ? "text-red-400" : "text-gray-400"
                        }`}
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
                    <p
                        className={`mb-2 text-sm ${
                            error ? "text-red-500" : "text-gray-500"
                        }`}
                    >
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                    </p>
                    <p
                        className={`text-xs ${
                            error ? "text-red-500" : "text-gray-500"
                        }`}
                    >
                        {label}
                    </p>
                    {error && (
                        <p className="text-xs text-red-500 mt-2">{error}</p>
                    )}
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
