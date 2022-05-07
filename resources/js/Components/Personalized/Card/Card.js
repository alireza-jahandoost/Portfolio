import React from "react";

const Card = ({ children, className, withoutPadding = false }) => {
    return (
        <div
            className={`border-gray-400 border text-xl rounded-lg ${
                !withoutPadding && "p-2"
            } text-gray-600 bg-gray-200 shadow ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
