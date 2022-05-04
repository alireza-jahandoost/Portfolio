import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import SkillCard from "@/Partials/AdminPanel/Skills/SkillCard";

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
                        <SkillCard
                            skill={skill}
                            handleDelete={handleDelete}
                            key={skill.id}
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default IndexSkills;
