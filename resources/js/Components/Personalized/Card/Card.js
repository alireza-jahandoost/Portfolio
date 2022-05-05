import React from "react";

const Card = ({ children, className }) => {
    return (
        <div
            className={`border-gray-400 border text-xl rounded p-2 text-gray-600 bg-gray-200 shadow ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
