import React, { useEffect } from "react";
import changeHandler from "@/Utilities/changeHandler";
import TextInput from "@/Components/Flowbite/Input/TextInput";
import Button from "@/Components/Flowbite/Button/Button";
import FileInput from "@/Components/Flowbite/FileInput/FileInput";

const ProjectImagesInputs = ({ images, changeImages }) => {
    useEffect(() => {
        images.forEach((image) => {
            if (image.file && !image.image_url) {
                changeImages(
                    images.map((img) =>
                        img.mask_id === image.mask_id
                            ? {
                                  ...img,
                                  image_url: URL.createObjectURL(img.file),
                              }
                            : img
                    )
                );
            }
        });
    }, [images]);

    const addImage = () => {
        const mask_id = (() => {
            while (true) {
                const id = Math.floor(Math.random() * 1000000);
                if (!images.find((img) => img.mask_id === id)) {
                    return id;
                }
            }
        })();

        changeImages([
            ...images,
            {
                mask_id,
                image_title: "",
                image_alt: "",
                file: null,
                image_url: "",
            },
        ]);
    };

    const changeImage = (event, image) => {
        const { key, value } = changeHandler(event);
        changeImages(
            images.map((img) =>
                img.mask_id === image.mask_id ? { ...image, [key]: value } : img
            )
        );
    };

    const deleteImage = (image) => {
        changeImages(images.filter((img) => img.mask_id !== image.mask_id));
    };

    return (
        <div className="my-8 grid gap-4">
            <h4>Project Images</h4>
            <div>
                <Button type="button" onClick={addImage} label="Add Image" />
            </div>
            {images.map((image) => {
                return (
                    <div
                        className="grid md:grid-cols-2 gap-2"
                        key={image.mask_id}
                    >
                        <div className="flex justify-center">
                            {image.image_url !== "" ? (
                                <img
                                    className="h-64 w-auto rounded"
                                    src={
                                        image.image_url.startsWith("blob")
                                            ? image.image_url
                                            : `/${image.image_url}`
                                    }
                                    alt="project image"
                                />
                            ) : (
                                <FileInput
                                    id={`image-${image.mask_id}-file`}
                                    label="Project Image"
                                    onChange={(event) =>
                                        changeImage(event, image)
                                    }
                                    name="file"
                                />
                            )}
                        </div>
                        <div>
                            <div>
                                <TextInput
                                    onChange={(event) =>
                                        changeImage(event, image)
                                    }
                                    id={`image-${image.mask_id}-alt`}
                                    value={image.image_alt}
                                    label="Image Alt"
                                    name="image_alt"
                                    placeholder="Image Alt"
                                    required={true}
                                    type="text"
                                />
                            </div>
                            <div>
                                <TextInput
                                    onChange={(event) =>
                                        changeImage(event, image)
                                    }
                                    id={`image-${image.mask_id}-title`}
                                    value={image.image_title}
                                    label="Image Title"
                                    name="image_title"
                                    placeholder="Image Title"
                                    required={true}
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectImagesInputs;
