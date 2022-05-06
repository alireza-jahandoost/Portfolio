import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Button from "@/Components/Flowbite/Button/Button";
import FormInputs from "@/Partials/AdminPanel/ProjectSection/FormInputs";
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
    });

    const handleChange = (event) => {
        const { key, value } = changeHandler(event);
        setData(key, value);
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
                    console.log(err);
                },
                onSuccess() {
                    setData("image", null);
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
                    Edit User Profile
                </h2>
            }
        >
            <Head title={`Edit User Profile`} />

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <div className="grid">
                        <div>
                            <div className="my-4">
                                <TextInput
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    id="name"
                                    required={true}
                                    label="Name"
                                    placeholder="User's Full Name"
                                />
                            </div>
                            <div className="my-4">
                                <TextInput
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    id="email"
                                    required={true}
                                    label="Email"
                                    placeholder="User's Email"
                                />
                            </div>
                        </div>
                        <div className="my-4">
                            {props.auth.user.image ? (
                                <div>
                                    <img
                                        src={`/${props.auth.user.image}`}
                                        alt="User Image"
                                    />
                                </div>
                            ) : (
                                <FileInput
                                    onChange={handleChange}
                                    label="User Image"
                                    name="image"
                                    id="user_image"
                                />
                            )}
                        </div>
                    </div>
                    <div className="my-4">
                        <Textarea
                            id="about_me"
                            value={data.about_me}
                            label="About Me"
                            name="about_me"
                            onChange={handleChange}
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
