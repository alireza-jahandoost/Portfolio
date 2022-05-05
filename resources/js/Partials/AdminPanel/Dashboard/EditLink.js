import React from "react";
import { Link } from "@inertiajs/inertia-react";

const EditLink = ({ href, className }) => {
    return (
        <Link
            href={href}
            className={`hover:text-gray-700 active:text-gray-800 ${className}`}
        >
            <i className="fa-solid fa-pen-to-square" />
        </Link>
    );
};

export default EditLink;
