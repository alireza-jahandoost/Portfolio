import React from "react";
import FloatingOutlinedInput from "@/Components/Flowbite/Input/FloatingOutlinedInput";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Toggle from "@/Components/Flowbite/Toggle/Toggle";
import Button from "@/Components/Flowbite/Button/Button";
import FormInputs from "@/Partials/AdminPanel/Skills/FormInputs";

const EditSkill = (props) => {
    const { put, data, setData, errors, reset } = useForm({
        name: props.skill.name,
        is_fluent: props.skill.is_fluent,
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
                    Update Skill: "{props.skill.name}"
                </h2>
            }
        >
            <Head title={`Update Skill: "${props.skill.name}"`} />

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <FormInputs
                        data={data}
                        handleChange={handleChange}
                        errors={errors}
                    />
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
