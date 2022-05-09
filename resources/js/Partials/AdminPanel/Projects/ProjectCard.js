import React from "react";
import Card from "@/Components/Personalized/Card/Card";
import { Link } from "@inertiajs/inertia-react";

const ProjectCard = ({ project, handleDelete }) => {
    return (
        <Card withoutPadding={true}>
            {project.images.length > 0 ? (
                <img
                    className="rounded-t-lg w-full h-96 md:h-64"
                    src={`/${project.images[0].image_url}`}
                    alt={project.images[0].image_alt}
                />
            ) : (
                <div className="h-96 md:h-64 rounded-t-lg">
                    <div className="flex justify-center items-center h-full bg-gray-300 rounded-t-lg">
                        <div className="text-2xl">No Image Available</div>
                    </div>
                </div>
            )}
            <div className="grid gap-2 p-2">
                <h4>title: {project.title}</h4>
                <div>
                    <span>project section: </span>
                    <Link
                        className="text-blue-600 font-bold"
                        href={route("admin.project_sections.edit", [
                            project.project_section_id,
                        ])}
                    >
                        {project.project_section.name}
                    </Link>
                </div>
                <div>
                    <span>number of images: </span>
                    <span>{project.images.length}</span>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        {project.link_to_github && (
                            <Link
                                className="text-gray-600 hover:text-gray-700 active:text-gray-800"
                                href={project.link_to_github}
                                title="See project github page"
                            >
                                <i className="fa-brands fa-github fa-xl" />
                            </Link>
                        )}
                        {project.link_to_production && (
                            <Link
                                className="text-gray-600 hover:text-gray-700 active:text-gray-800"
                                href={project.link_to_production}
                                title="See project in production"
                            >
                                <i className="fa-solid fa-globe fa-xl" />
                            </Link>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <Link
                            className="text-gray-600 hover:text-gray-700 active:text-gray-800"
                            href={route("admin.projects.edit", [project.id])}
                            title="Edit project"
                        >
                            <i className="fa-solid fa-edit fa-xl" />
                        </Link>
                        <button
                            onClick={() => handleDelete({ project })}
                            className="text-gray-600 hover:text-gray-700 active:text-gray-800"
                            title="Delete project"
                        >
                            <i className="fa-solid fa-trash fa-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
