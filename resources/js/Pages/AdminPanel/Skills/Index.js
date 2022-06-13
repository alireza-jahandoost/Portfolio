import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import SkillCard from "@/Partials/AdminPanel/Skills/SkillCard";
import OutlinedGrayLink from "@/Components/Personalized/Link/OutlinedGrayLink";

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
                <OutlinedGrayLink href={route("admin.skills.create")}>
                    Create New Skill
                </OutlinedGrayLink>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {props.skills.map((skill) => (
                        <SkillCard
                            skill={skill}
                            handleDelete={() => handleDelete({ skill })}
                            key={skill.id}
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default IndexSkills;
