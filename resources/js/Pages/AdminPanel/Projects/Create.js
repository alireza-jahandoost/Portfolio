import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Button from "@/Components/Flowbite/Button/Button";
import FormInputs from "@/Partials/AdminPanel/Projects/FormInputs";
import ProjectImagesInputs from "@/Partials/AdminPanel/Projects/ProjectImagesInputs";

const CreateProject = (props) => {
    const { post, data, setData, errors, reset } = useForm({
        title: "",
        description: "",
        link_to_github: "",
        link_to_production: "",
        project_section_id: 0,
        images: [],
    });

    const handleChange = (event) => {
        const { key, value } = changeHandler(event);
        setData(key, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        post(route("admin.projects.store"), {
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
                    Create new project
                </h2>
            }
        >
            <Head title="Create new project" />

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <FormInputs
                        handleChange={handleChange}
                        projectSections={props.projectSections}
                        data={data}
                        errors={errors}
                    />
                    <ProjectImagesInputs
                        images={data.images}
                        changeImages={(newImages) =>
                            setData("images", newImages)
                        }
                        deleteImage={({ image }) =>
                            setData(
                                "images",
                                data.images.filter(
                                    (img) => img.mask_id !== image.mask_id
                                )
                            )
                        }
                    />
                    <Button
                        label="Create Project"
                        type="submit"
                        className="my-4"
                    />
                </form>
            </div>
        </Authenticated>
    );
};

export default CreateProject;
