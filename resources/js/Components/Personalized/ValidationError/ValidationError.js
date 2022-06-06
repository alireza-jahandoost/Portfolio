import React from "react";

const ValidationError = ({ children }) => {
    return <p className="text-red-600 text-xs italic">{children}</p>;
};

export default ValidationError;
