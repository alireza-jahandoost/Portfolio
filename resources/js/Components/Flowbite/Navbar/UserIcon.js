import React, { useState } from "react";
import { usePopper } from "react-popper";
import { Link } from "@inertiajs/inertia-react";

const UserIcon = ({ auth }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom-end",
        modifiers: [
            { name: "arrow", options: { element: arrowElement } },
            {
                name: "offset",
                options: {
                    offset: [0, 10],
                },
            },
        ],
    });

    return (
        <>
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } bg-transparent fixed top-0 left-0 w-full h-full`}
                onClick={() => setIsOpen(false)}
            />
            <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                onClick={() => setIsOpen((prevState) => !prevState)}
                ref={setReferenceElement}
            >
                <span className="sr-only">Open user menu</span>
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    {auth.user.image ? (
                        <img
                            className="w-full h-full"
                            src={`/${auth.user.image}`}
                            alt="current user image"
                        />
                    ) : (
                        <svg
                            className="absolute w-12 h-12 text-gray-400 -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </div>
            </button>
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } z-50 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
                style={styles.popper}
                ref={setPopperElement}
            >
                <div className="py-3 px-4">
                    <span className="block text-sm text-gray-900 dark:text-white">
                        {auth.user.name}
                    </span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                        {auth.user.email}
                    </span>
                </div>
                <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                        <Link
                            href={route("admin.dashboard")}
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route("admin.settings")}
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link
                            as="button"
                            method="POST"
                            href={route("logout")}
                            className="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            Sign out
                        </Link>
                    </li>
                </ul>
                <div ref={setArrowElement} style={styles.arrow} />
            </div>
        </>
    );
};

export default UserIcon;
