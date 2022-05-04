import React from "react";

const Card = ({ children }) => {
    return (
        <div className="border-gray-400 border text-xl rounded p-2 text-gray-600 bg-gray-200 shadow flex flex-row-reverse">
            {children}
        </div>
    );
};

export default Card;
