import React, { useState } from "react";
import ControlButton from "@/Components/Personalized/Button/ControlButton";
import SkillsChanger from "@/Partials/AdminPanel/Projects/SkillsChanger";

const SkillsSection = ({ skills, project, ...props }) => {
    const [isModelShown, setIsModelShown] = useState(false);

    return (
        <div {...props}>
            <div className="w-full border rounded-lg p-2">
                <h3 className="font-bold text-xl text-gray-800">Skills</h3>
                <div>
                    {project.skills.length === 0 ? (
                        <div className="text-gray-700">
                            There is not any skill for this project yet
                        </div>
                    ) : (
                        <div className="flex flex-wrap">
                            {project.skills.map((skill) => (
                                <div
                                    key={skill.id}
                                    className={`bg-white py-2 px-4 m-2 rounded-full bg-green-600 text-white`}
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex justify-end">
                    <ControlButton
                        type="button"
                        onClick={() => setIsModelShown(true)}
                        title="Edit skills of project"
                    >
                        <i className="fa-solid fa-edit fa-xl" />
                    </ControlButton>
                </div>
            </div>
            {isModelShown && (
                <SkillsChanger
                    project={project}
                    skills={skills}
                    hideModal={() => setIsModelShown(false)}
                />
            )}
        </div>
    );
};

export default SkillsSection;
