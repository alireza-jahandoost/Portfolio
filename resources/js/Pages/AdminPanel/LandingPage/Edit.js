import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import changeHandler from "@/Utilities/changeHandler";
import Button from "@/Components/Flowbite/Button/Button";
import FormInputs from "@/Partials/AdminPanel/ProjectSection/FormInputs";
import TextInput from "@/Components/Flowbite/Input/TextInput";
import Textarea from "@/Components/Flowbite/Textarea/Textarea";

const EditLandingPage = (props) => {
    const { put, data, setData, errors } = useForm({
        title: props.landingPage.title,
        description: props.landingPage.description,
    });

    const handleChange = (event) => {
        const { key, value } = changeHandler(event);
        setData(key, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        put(route("admin.landing_page.update", [props.landingPage.id]));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Landing Page Information
                </h2>
            }
        >
            <Head title={`Edit Landing Page Information`} />

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <div>
                        <Textarea
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                            id="title"
                            required={true}
                            label="Title"
                            placeholder="Title of landing page"
                            error={errors.title}
                        />
                    </div>
                    <div className="mt-5">
                        <Textarea
                            id="description"
                            value={data.description}
                            label="Description"
                            name="description"
                            onChange={handleChange}
                            error={errors.description}
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

export default EditLandingPage;
