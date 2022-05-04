import React from "react";
import Card from "@/Components/Personalized/Card/Card";
import { Link } from "@inertiajs/inertia-react";

const SkillCard = ({ skill, handleDelete }) => {
    return (
        <Card>
            <div className="">
                <button
                    className="px-2"
                    data-dropdown-toggle={`skill-${skill.name}`}
                >
                    <i className="fa-solid fa-ellipsis-vertical" />
                </button>
                <div
                    id={`skill-${skill.name}`}
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                >
                    <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefault"
                    >
                        <li>
                            <Link
                                href={route("admin.skills.edit", [skill.id])}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </Link>
                        </li>
                        <li>
                            <button
                                className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => handleDelete({ skill })}
                            >
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between flex-grow m-1">
                <div>
                    <div>{skill.name}</div>
                    <div>{skill.is_fluent ? "Fluent" : "Familiar"}</div>
                </div>
                <div className="mt-auto">
                    <i className={`${skill.icon_class} fa-2xl`} />
                </div>
            </div>
        </Card>
    );
};

export default SkillCard;
