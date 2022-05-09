import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import ControlButton from "@/Components/Personalized/Button/ControlButton";
import { Inertia } from "@inertiajs/inertia";

const IndexProjectSections = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const moveUp = ({ projectId }) => {
        setIsLoading(true);
        Inertia.put(
            route("admin.project_sections.move_project_up", [
                props.projectSection.id,
                projectId,
            ]),
            {},
            {
                onFinish() {
                    setIsLoading(false);
                },
                preserveScroll: true,
            }
        );
    };
    const moveDown = ({ projectId }) => {
        setIsLoading(true);
        Inertia.put(
            route("admin.project_sections.move_project_down", [
                props.projectSection.id,
                projectId,
            ]),
            {},
            {
                onFinish() {
                    setIsLoading(false);
                },
                preserveScroll: true,
            }
        );
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index Projects of "{props.projectSection.name}"
                </h2>
            }
        >
            <Head title={`Index Projects of "${props.projectSection.name}"`} />

            <div className="p-4">
                <div className="grid text-center border rounded divide-y">
                    <div className="grid grid-cols-2 font-bold bg-gray-100 p-4">
                        <div>Project Title</div>
                        <div>Change Order</div>
                    </div>
                    {props.projectSection.projects.map((project, idx) => (
                        <div
                            className={`grid grid-cols-2 p-4 ${
                                idx % 2 && "bg-gray-50"
                            }`}
                            key={project.id}
                        >
                            <Link
                                href={route("admin.projects.edit", [
                                    project.id,
                                ])}
                                className="text-blue-600"
                            >
                                <div>{project.title}</div>
                            </Link>
                            <div className="flex gap-2 justify-center">
                                <ControlButton
                                    title="Move down"
                                    onClick={() =>
                                        moveDown({ projectId: project.id })
                                    }
                                    disabled={
                                        props.projectSection.projects.length ===
                                            idx + 1 || isLoading
                                    }
                                >
                                    <i className="fa-solid fa-arrow-down fa-xl" />
                                </ControlButton>
                                <ControlButton
                                    title="Move up"
                                    onClick={() =>
                                        moveUp({ projectId: project.id })
                                    }
                                    disabled={idx === 0 || isLoading}
                                >
                                    <i className="fa-solid fa-arrow-up fa-xl" />
                                </ControlButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default IndexProjectSections;
