import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Button from "@/Components/Flowbite/Button/Button";
import FormInputs from "@/Partials/AdminPanel/Projects/FormInputs";
import ProjectImagesInputs from "@/Partials/AdminPanel/Projects/ProjectImagesInputs";
import { Inertia } from "@inertiajs/inertia";

const EditProject = (props) => {
    const { data, setData, errors, setError, reset } = useForm({
        title: props.project.title,
        description: props.project.description,
        link_to_github: props.project.link_to_github,
        link_to_production: props.project.link_to_production,
        project_section_id: props.project.project_section_id,
        images: props.project.images.map((image) => ({
            ...image,
            mask_id: image.id,
        })),
    });

    const handleChange = (event) => {
        const { key, value } = changeHandler(event);
        setData(key, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        Inertia.post(
            route("admin.projects.update", [props.project.id]),
            {
                _method: "PUT",
                title: data.title,
                description: data.description,
                link_to_github: data.link_to_github,
                link_to_production: data.link_to_production,
                project_section_id: data.project_section_id,
                new_images: data.images.filter(
                    (image) => image.file !== undefined
                ),
            },
            {
                onError(err) {
                    console.log(err);
                    setError(err);
                },
            }
        );
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit {props.project.title}
                </h2>
            }
        >
            <Head title={`Edit ${props.project.title}`} />

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
                    />
                    <Button
                        label="Edit Project"
                        type="submit"
                        className="my-4"
                    />
                </form>
            </div>
        </Authenticated>
    );
};

export default EditProject;
