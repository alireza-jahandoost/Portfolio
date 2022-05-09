import React from "react";
import Card from "@/Components/Personalized/Card/Card";
import { Link } from "@inertiajs/inertia-react";

const ProjectSectionCard = ({ projectSection, handleDelete }) => {
    return (
        <Card>
            <div className="flex flex-row-reverse">
                <div className="flex-grow m-1">
                    <div>{projectSection.name}</div>
                    <Link
                        className="text-blue-600"
                        href={route("admin.project_sections.index_projects", [
                            projectSection.id,
                        ])}
                    >
                        <div>{projectSection.projects_count} Projects</div>
                    </Link>
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <Link
                    href={route("admin.project_sections.edit", [
                        projectSection.id,
                    ])}
                    className="text-gray-600 hover:text-gray-700 active:text-gray-800"
                    title="Edit this project section"
                >
                    <i className="fa-solid fa-edit fa-xl" />
                </Link>
                <button
                    onClick={() => handleDelete({ projectSection })}
                    className="text-gray-600 hover:text-gray-700 active:text-gray-800"
                    title="Delete this project section"
                >
                    <i className="fa-solid fa-trash fa-xl" />
                </button>
            </div>
        </Card>
    );
};

export default ProjectSectionCard;
