import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Button from "@/Components/Flowbite/Button/Button";
import TextInput from "@/Components/Flowbite/Input/TextInput";
import Textarea from "@/Components/Flowbite/Textarea/Textarea";
import FileInput from "@/Components/Flowbite/FileInput/FileInput";
import { Inertia } from "@inertiajs/inertia";

const EditUserInformation = (props) => {
    const { data, setData, errors, setError } = useForm({
        name: props.auth.user.name,
        email: props.auth.user.email,
        image: null,
        about_me: props.auth.user.about_me,
        contact_me: props.auth.user.contact_me,
        about_me_title: props.auth.user.about_me_title,
    });

    const handleChange = (event) => {
        const { key, value } = changeHandler(event);
        setData(key, value);
    };

    const handleImageDelete = () => {
        if (confirm("Are you sure, you want to delete this image? ")) {
            Inertia.delete(route("admin.user_profile.delete_image"), {
                preserveScroll: true,
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        Inertia.post(
            route("admin.user_profile.update"),
            {
                _method: "PUT",
                ...data,
            },
            {
                onError(err) {
                    setError(err);
                },
                onSuccess() {
                    setData("image", null);
                },
                preserveScroll: true,
            }
        );
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit User Profile
                </h2>
            }
        >
            <Head title={`Edit User Profile`} />

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="lg:col-span-2">
                            <div>
                                <TextInput
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    id="name"
                                    required={true}
                                    label="Name"
                                    placeholder="User's Full Name"
                                    error={errors.name}
                                />
                            </div>
                            <div>
                                <TextInput
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    id="email"
                                    required={true}
                                    label="Email"
                                    placeholder="User's Email"
                                    error={errors.email}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            {props.auth.user.image ? (
                                <div className="w-52 h-52 lg:w-72 lg:h-72 relative">
                                    <img
                                        className="peer rounded-full h-full w-full"
                                        src={`/${props.auth.user.image}`}
                                        alt="User Image"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleImageDelete}
                                        className="invisible peer-hover:visible hover:visible p-2 cursor-pointer text-white absolute left-0 right-0 ml-auto mr-auto w-20 top-0 bottom-0 mt-auto mb-auto h-20"
                                    >
                                        <i className="fa-solid fa-trash fa-2x" />
                                    </button>
                                </div>
                            ) : (
                                <FileInput
                                    onChange={handleChange}
                                    label="User Image"
                                    name="image"
                                    id="user_image"
                                    error={errors.user_image}
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        <Textarea
                            id="about_me"
                            value={data.about_me ?? ""}
                            label="About Me"
                            name="about_me"
                            onChange={handleChange}
                            error={errors.about_me}
                        />
                    </div>
                    <div>
                        <Textarea
                            id="about_me_title"
                            value={data.about_me_title ?? ""}
                            label="Title of About Me"
                            name="about_me_title"
                            onChange={handleChange}
                            error={errors.about_me_title}
                        />
                    </div>
                    <div>
                        <Textarea
                            id="contact_me"
                            value={data.contact_me ?? ""}
                            label="Contact Me"
                            name="contact_me"
                            onChange={handleChange}
                            error={errors.contact_me}
                        />
                    </div>
                    <Button
                        label="Update Landing Page Information"
                        type="submit"
                        className="my-4"
                    />
                </form>
            </div>
        </Authenticated>
    );
};

export default EditUserInformation;
