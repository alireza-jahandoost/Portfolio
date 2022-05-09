import React from "react";

const ControlButton = ({ title, onClick, children, ...props }) => {
    return (
        <button
            onClick={onClick}
            className="text-gray-600 hover:text-gray-700 active:text-gray-800 disabled:text-gray-400"
            title={title}
            {...props}
        >
            {children}
        </button>
    );
};

export default ControlButton;
