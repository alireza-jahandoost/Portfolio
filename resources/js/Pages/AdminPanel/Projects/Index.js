import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import OutlinedGrayLink from "@/Components/Personalized/Link/OutlinedGrayLink";
import Card from "@/Components/Personalized/Card/Card";
import OutlinedYellowLink from "@/Components/Personalized/Link/OutlinedYellowLink";
import OutlinedRedButton from "@/Components/Personalized/Button/OutlinedRedButton";
import ProjectSectionCard from "@/Partials/AdminPanel/ProjectSection/ProjectSectionCard";
import ProjectCard from "@/Partials/AdminPanel/Projects/ProjectCard";

const IndexProjects = (props) => {
    const handleDelete = ({ project }) => {
        if (confirm(`Are you sure, you want to delete ${project.title}?`)) {
            Inertia.delete(route("admin.projects.destroy", [project.id]));
        }
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index Projects
                </h2>
            }
        >
            <Head title="Index Projects" />

            <div className="p-4">
                <OutlinedGrayLink href={route("admin.projects.create")}>
                    Create New Project
                </OutlinedGrayLink>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {props.projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            handleDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default IndexProjects;
