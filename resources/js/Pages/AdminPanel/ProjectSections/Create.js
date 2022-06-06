import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Button from "@/Components/Flowbite/Button/Button";
import FloatingOutlinedInput from "@/Components/Flowbite/Input/FloatingOutlinedInput";
import FormInputs from "@/Partials/AdminPanel/ProjectSection/FormInputs";

const CreateProjectSection = (props) => {
    const { post, data, setData, errors, reset } = useForm({
        name: "",
    });

    const handleChange = (event) => {
        const { key, value } = changeHandler(event);
        setData(key, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        post(route("admin.project_sections.store"), {
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
                    Create new project section
                </h2>
            }
        >
            <Head title="Create new project section" />

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <FormInputs
                        handleChange={handleChange}
                        data={data}
                        errors={errors}
                    />
                    <Button
                        label="Create Project Section"
                        type="submit"
                        className="my-4"
                    />
                </form>
            </div>
        </Authenticated>
    );
};

export default CreateProjectSection;
