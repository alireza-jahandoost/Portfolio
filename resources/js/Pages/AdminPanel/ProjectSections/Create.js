import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Button from "@/Components/Flowbite/Button/Button";
import FloatingOutlinedInput from "@/Components/Flowbite/Input/FloatingOutlinedInput";

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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <FloatingOutlinedInput
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                id="name"
                                label="Project Section Name"
                                error={errors.name}
                            />
                        </div>
                    </div>
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
