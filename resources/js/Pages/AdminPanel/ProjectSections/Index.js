import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import OutlinedGrayLink from "@/Components/Personalized/Link/OutlinedGrayLink";
import Card from "@/Components/Personalized/Card/Card";
import OutlinedYellowLink from "@/Components/Personalized/Link/OutlinedYellowLink";
import OutlinedRedButton from "@/Components/Personalized/Button/OutlinedRedButton";
import ProjectSectionCard from "@/Partials/AdminPanel/ProjectSection/ProjectSectionCard";

const IndexProjectSections = (props) => {
    const handleDelete = ({ projectSection }) => {
        if (projectSection.projects_count > 0) {
            alert(
                "You can not delete a project section that has projects inside it"
            );
            return;
        }
        if (
            confirm(`Are you sure, you want to delete ${projectSection.name}?`)
        ) {
            Inertia.delete(
                route("admin.project_sections.destroy", [projectSection.id])
            );
        }
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index Project Sections
                </h2>
            }
        >
            <Head title="Index Project Sections" />

            <div className="p-4">
                <OutlinedGrayLink href={route("admin.project_sections.create")}>
                    Create New Project Section
                </OutlinedGrayLink>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {props.projectSections.map((projectSection) => (
                        <ProjectSectionCard
                            key={projectSection.id}
                            projectSection={projectSection}
                            handleDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default IndexProjectSections;
