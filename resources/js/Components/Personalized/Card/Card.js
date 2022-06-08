import React from "react";

const Card = ({ children, className, withoutPadding = false }) => {
    return (
        <div
            className={`border-gray-100 border text-xl rounded-lg border shadow ${
                !withoutPadding && "p-2"
            } text-gray-600 bg-white ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
