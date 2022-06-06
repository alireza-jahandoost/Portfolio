import React from "react";
import Card from "@/Components/Personalized/Card/Card";
import { Link } from "@inertiajs/inertia-react";
import ControlButton from "@/Components/Personalized/Button/ControlButton";

const SkillCard = ({ skill, handleDelete }) => {
    return (
        <Card>
            <div className="flex flex-col">
                <div className="flex">
                    <div className="flex justify-between flex-grow m-1">
                        <div>
                            <div>{skill.name}</div>
                            <div>{skill.is_fluent ? "Fluent" : "Familiar"}</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 justify-end">
                    <Link href={route("admin.skills.edit", [skill.id])}>
                        <ControlButton type="button">
                            <i className="fa-solid fa-edit fa-lg" />
                        </ControlButton>
                    </Link>
                    <ControlButton type="button" onClick={handleDelete}>
                        <i className="fa-solid fa-trash fa-lg" />
                    </ControlButton>
                </div>
            </div>
        </Card>
    );
};

export default SkillCard;
