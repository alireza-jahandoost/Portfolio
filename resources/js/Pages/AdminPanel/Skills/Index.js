import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const IndexSkills = (props) => {
    const handleDelete = ({ skill }) => {
        if (confirm(`Are you sure, you want to delete ${skill.name}?`)) {
            Inertia.delete(route("admin.skills.destroy", [skill.id]));
        }
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index Skills
                </h2>
            }
        >
            <Head title="Index Skills" />

            <div className="p-4">
                <Link
                    href={route("admin.skills.create")}
                    className="my-4 inline-block p-2 border rounded border-gray-600 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                >
                    Create New Skill
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {props.skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="border-gray-400 border text-xl rounded p-2 text-gray-600 bg-gray-200 shadow flex flex-row-reverse"
                        >
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
                                                href={route(
                                                    "admin.skills.edit",
                                                    [skill.id]
                                                )}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Edit
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() =>
                                                    handleDelete({ skill })
                                                }
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
                                    <div>
                                        {skill.is_fluent
                                            ? "Fluent"
                                            : "Familiar"}
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <i
                                        className={`${skill.icon_class} fa-2xl`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default IndexSkills;
