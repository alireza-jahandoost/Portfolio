import React, { useState } from "react";
import Button from "@/Components/Flowbite/Button/Button";
import OutlinedRedButton from "@/Components/Personalized/Button/OutlinedRedButton";
import { useForm } from "@inertiajs/inertia-react";

const SkillsChanger = ({ skills, project, hideModal }) => {
    const [currentSkills, setCurrentSkills] = useState(
        skills.map((skill) => ({
            ...skill,
            selected:
                project.skills.findIndex((sk) => sk.id === skill.id) !== -1,
        }))
    );

    const handleSave = () => {};

    const handleCancel = () => {
        hideModal();
        setCurrentSkills(
            skills.map((skill) => ({
                ...skill,
                selected:
                    project.skills.findIndex((sk) => sk.id === skill.id) !== -1,
            }))
        );
    };

    const handleSkillClick = ({ skill }) => {
        if (skill.selected) {
            setCurrentSkills((prevState) =>
                prevState.map((sk) =>
                    sk.id === skill.id ? { ...sk, selected: false } : sk
                )
            );
        } else {
            setCurrentSkills((prevState) =>
                prevState.map((sk) =>
                    sk.id === skill.id ? { ...sk, selected: true } : sk
                )
            );
        }
    };
    console.log(currentSkills);
    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black opacity-30 z-40`}
            />
            <div
                className={`fixed top-0 bottom-0 left-0 right-0 w-11/12 h-96 m-auto z-40`}
            >
                <div className="p-4 flex flex-col h-full text-center bg-gray-200 rounded-xl z-50 overflow-y-auto">
                    <div className="grow">
                        <div className="flex flex-wrap">
                            {currentSkills.map((skill) => {
                                return (
                                    <button
                                        type="button"
                                        className={`bg-white py-2 px-4 m-2 rounded-full ${
                                            skill.selected &&
                                            " bg-green-600 text-white"
                                        }`}
                                        key={skill.id}
                                        onClick={() =>
                                            handleSkillClick({ skill })
                                        }
                                    >
                                        {skill.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <Button
                            label="Save"
                            type="button"
                            onClick={handleSave}
                        />
                        <OutlinedRedButton
                            className="bg-white"
                            type="button"
                            onClick={handleCancel}
                        >
                            Cancel
                        </OutlinedRedButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsChanger;
