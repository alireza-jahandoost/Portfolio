import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Button from "@/Components/Flowbite/Button/Button";
import FormInputs from "@/Partials/AdminPanel/Skills/FormInputs";

const CreateSkill = (props) => {
    const { post, data, setData, errors, reset } = useForm({
        name: "",
        is_fluent: false,
        icon_class: "",
    });

    const handleChange = (event) => {
        const { key, value } = changeHandler(event);
        setData(key, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        post(route("admin.skills.store"), {
            onSuccess() {
                reset();
            },
            preserveState: false,
        });
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create new skill
                </h2>
            }
        >
            <Head title="Create new skill" />

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <FormInputs
                        data={data}
                        handleChange={handleChange}
                        errors={errors}
                    />
                    <Button
                        label="Create Skill"
                        type="submit"
                        className="my-4"
                    />
                </form>
            </div>
        </Authenticated>
    );
};

export default CreateSkill;
