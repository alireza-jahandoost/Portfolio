import React from "react";

const ValidationError = ({ children }) => {
    return <p class="text-red-600 text-sm">{children}</p>;
};

export default ValidationError;
