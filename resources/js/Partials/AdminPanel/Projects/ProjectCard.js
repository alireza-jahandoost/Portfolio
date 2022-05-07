import React from "react";
import Card from "@/Components/Personalized/Card/Card";
import { Link } from "@inertiajs/inertia-react";

const ProjectCard = ({ project }) => {
    return (
        <Card withoutPadding={true}>
            <img
                className="rounded-t-lg"
                src={`/${project.images[0].image_url}`}
                alt={project.images[0].image_alt}
            />
            <div className="grid gap-2 p-2">
                <h4>title: {project.title}</h4>
                <div>
                    <span>project section: </span>
                    <Link
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
                <div className="flex gap-2">
                    {project.link_to_github && (
                        <Link href={project.link_to_github}>
                            <i className="fa-brands fa-github fa-xl" />
                        </Link>
                    )}
                    {project.link_to_production && (
                        <Link href={project.link_to_production}>
                            <i className="fa-solid fa-globe fa-xl" />
                        </Link>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
