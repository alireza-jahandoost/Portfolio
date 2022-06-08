import React, { useEffect, useState } from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Button from "@/Components/Flowbite/Button/Button";
import FormInputs from "@/Partials/AdminPanel/Projects/FormInputs";
import ProjectImagesInputs from "@/Partials/AdminPanel/Projects/ProjectImagesInputs";
import { Inertia } from "@inertiajs/inertia";
import SkillsSection from "@/Partials/AdminPanel/Projects/SkillsSection";

const EditProject = (props) => {
    const [images, setImages] = useState(
        props.project.images.map((image) => ({ ...image, mask_id: image.id }))
    );

    useEffect(() => {
        setImages(
            props.project.images.map((image) => ({
                ...image,
                mask_id: image.id,
            }))
        );
    }, [props.project.images]);

    const { data, setData, errors, setError, reset, clearErrors } = useForm({
        title: props.project.title,
        description: props.project.description,
        link_to_github: props.project.link_to_github,
        link_to_production: props.project.link_to_production,
        project_section_id: props.project.project_section_id,
        deleted_images: [],
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
                new_images: images.filter((image) => image.file !== undefined),
                deleted_images: data.deleted_images,
                changed_images: images.filter((image) => image.id),
            },
            {
                onError(err) {
                    setError(err);
                },
                onSuccess() {
                    clearErrors();
                },
            }
        );
    };

    const deleteImage = async ({ image }) => {
        if (image.id) {
            setData("deleted_images", [...data.deleted_images, image.id]);
        }
        setImages(images.filter((img) => img.mask_id !== image.mask_id));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Project: "{props.project.title}"
                </h2>
            }
        >
            <Head title={`Edit Project: "${props.project.title}"`} />

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <FormInputs
                        handleChange={handleChange}
                        projectSections={props.projectSections}
                        data={data}
                        errors={errors}
                    />
                    <SkillsSection
                        skills={props.skills}
                        project={props.project}
                        className="my-8"
                    />
                    <ProjectImagesInputs
                        images={images}
                        changeImages={(newImages) => setImages(newImages)}
                        deleteImage={deleteImage}
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
