import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Button from "@/Components/Flowbite/Button/Button";
import FormInputs from "@/Partials/AdminPanel/ProjectSection/FormInputs";

const EditProjectSection = (props) => {
    const { put, data, setData, errors, reset } = useForm({
        name: props.projectSection.name,
    });

    const handleChange = (event) => {
        const { key, value } = changeHandler(event);
        setData(key, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        put(route("admin.project_sections.update", [props.projectSection.id]));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Project Section: "{props.projectSection.name}"
                </h2>
            }
        >
            <Head
                title={`Edit Project Section: "${props.projectSection.name}"`}
            />

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <FormInputs
                        handleChange={handleChange}
                        data={data}
                        errors={errors}
                    />
                    <Button
                        label="Update Project Section"
                        type="submit"
                        className="my-4"
                    />
                </form>
            </div>
        </Authenticated>
    );
};

export default EditProjectSection;
