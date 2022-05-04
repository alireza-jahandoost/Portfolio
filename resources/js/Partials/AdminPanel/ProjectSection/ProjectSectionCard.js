import React from "react";
import Card from "@/Components/Personalized/Card/Card";
import { Link } from "@inertiajs/inertia-react";

const ProjectSectionCard = ({ projectSection, handleDelete }) => {
    return (
        <Card>
            <div className="flex flex-row-reverse">
                <div className="">
                    <button
                        className="px-2"
                        data-dropdown-toggle={`project-section-${projectSection.name}`}
                    >
                        <i className="fa-solid fa-ellipsis-vertical" />
                    </button>
                    <div
                        id={`project-section-${projectSection.name}`}
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                    >
                        <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDefault"
                        >
                            <li>
                                <Link
                                    href={route("admin.project_sections.edit", [
                                        projectSection.id,
                                    ])}
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </Link>
                            </li>
                            <li>
                                <button
                                    className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() =>
                                        handleDelete({ projectSection })
                                    }
                                >
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-grow m-1">
                    <div>{projectSection.name}</div>
                    <div>{projectSection.projects_count} Projects</div>
                </div>
            </div>
        </Card>
    );
};

export default ProjectSectionCard;
