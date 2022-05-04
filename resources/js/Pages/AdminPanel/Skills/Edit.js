import React from "react";
import FloatingOutlinedInput from "@/Components/Flowbite/Input/FloatingOutlinedInput";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Toggle from "@/Components/Flowbite/Toggle/Toggle";
import Button from "@/Components/Flowbite/Button/Button";

const EditSkill = (props) => {
    const { put, data, setData, errors, reset } = useForm({
        name: props.skill.name,
        is_fluent: props.skill.is_fluent,
        icon_class: props.skill.icon_class,
    });

    const handleChange = (event) => {
        const { key, value } = changeHandler(event);
        setData(key, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        put(route("admin.skills.update", [props.skill.id]));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Update Skill: {props.skill.name}
                </h2>
            }
        >
            <Head title={`Update Skill: ${props.skill.name}`} />

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <FloatingOutlinedInput
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                id="name"
                                label="Skill Name"
                                error={errors.name}
                            />
                        </div>
                        <div>
                            <FloatingOutlinedInput
                                name="icon_class"
                                value={data.icon_class}
                                onChange={handleChange}
                                id="icon_class"
                                label="Skill's icon class"
                                error={errors.icon_class}
                                helper={
                                    <>
                                        You can find you icon from{" "}
                                        <a
                                            href="https://fontawesome.com/search?s=solid%2Cbrands"
                                            target="_blank"
                                            className="text-blue-600 italic text-sm"
                                        >
                                            this
                                        </a>{" "}
                                        link
                                    </>
                                }
                            />
                        </div>
                        <div>
                            <Toggle
                                onChange={handleChange}
                                id="is_fluent"
                                name="is_fluent"
                                label="Fluent at"
                                checked={data.is_fluent}
                            />
                        </div>
                    </div>
                    <Button
                        label="Update Skill"
                        type="submit"
                        className="my-4"
                    />
                </form>
            </div>
        </Authenticated>
    );
};

export default EditSkill;
