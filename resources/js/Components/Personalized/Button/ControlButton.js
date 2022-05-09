import React from "react";

const ControlButton = ({ title, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="text-gray-600 hover:text-gray-700 active:text-gray-800"
            title={title}
        >
            {children}
        </button>
    );
};

export default ControlButton;
