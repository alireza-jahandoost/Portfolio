import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Flowbite/Button/Button";
import changeHandler from "@/Utilities/changeHandler";
import TextInput from "@/Components/Flowbite/Input/TextInput";
import Toggle from "@/Components/Flowbite/Toggle/Toggle";

const EditWorkExperiences = (props) => {
    const { put, data, setData, errors } = useForm({
        work_experiences: props.workExperiences.map((we) =>
            we.end ? we : { ...we, end: "" }
        ),
    });

    console.log(errors);

    const addWorkExperience = () => {
        const id = (() => {
            while (true) {
                const id = Math.floor(Math.random() * 1000000);
                if (
                    data.work_experiences.findIndex((we) => we.id === id) === -1
                ) {
                    return id;
                }
            }
        })();
        setData("work_experiences", [
            ...data.work_experiences,
            {
                id,
                start: "",
                end: "",
                company_name: "",
                role: "",
                is_working: false,
            },
        ]);
    };
    const changeWorkExperience = (we) => {
        setData(
            "work_experiences",
            data.work_experiences.map((workExperience) =>
                workExperience.id === we.id ? we : workExperience
            )
        );
    };

    const handleChange = (event, we) => {
        const { key, value } = changeHandler(event);
        changeWorkExperience({ ...we, [key]: value });
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure, you want to delete this work experience?")) {
            setData(
                "work_experiences",
                data.work_experiences.filter((we) => we.id !== id)
            );
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        put(route("admin.work_experiences.update"));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Work Experiences
                </h2>
            }
        >
            <Head title={`Edit Work Experiences`} />

            <div className="p-4">
                <Button
                    onClick={addWorkExperience}
                    type="button"
                    label={
                        <div className="text-gray-700 text-center">
                            <i className="fa-solid fa-plus" />
                            <span> Add item</span>
                        </div>
                    }
                />
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-8">
                        {data.work_experiences.map((workExperience, idx) => {
                            const errorPrefix = `work_experiences.${idx}`;
                            return (
                                <div
                                    key={workExperience.id}
                                    className="grid gap-2"
                                >
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            className="mt-8 text-gray-600 hover:text-gray-700 active:text-gray-800"
                                            onClick={() =>
                                                handleDelete(workExperience.id)
                                            }
                                        >
                                            <i className="fa-solid fa-trash fa-xl" />
                                        </button>
                                        <div className="grow grid grid-cols-2 gap-2">
                                            <div>
                                                <TextInput
                                                    type="date"
                                                    name="start"
                                                    value={workExperience.start}
                                                    onChange={(event) =>
                                                        handleChange(
                                                            event,
                                                            workExperience
                                                        )
                                                    }
                                                    id={`workExperience-${workExperience.id}-start`}
                                                    required={true}
                                                    label="WorkExperience Start Date"
                                                    error={
                                                        errors[
                                                            `${errorPrefix}.start`
                                                        ]
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <TextInput
                                                    type="date"
                                                    name="end"
                                                    value={workExperience.end}
                                                    onChange={(event) =>
                                                        handleChange(
                                                            event,
                                                            workExperience
                                                        )
                                                    }
                                                    id={`workExperience-${workExperience.id}-end`}
                                                    required={
                                                        !workExperience.is_working
                                                    }
                                                    label="WorkExperience End Date"
                                                    placeholder="End Date of WorkExperience"
                                                    error={
                                                        errors[
                                                            `${errorPrefix}.end`
                                                        ]
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Toggle
                                            id={`workExperience-${workExperience.id}-is_working`}
                                            onChange={(event) =>
                                                handleChange(
                                                    event,
                                                    workExperience
                                                )
                                            }
                                            label="Currently working here"
                                            checked={workExperience.is_working}
                                            name="is_working"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-2">
                                        <div>
                                            <TextInput
                                                type="text"
                                                id={`workExperience-${workExperience.id}-company_name`}
                                                onChange={(event) =>
                                                    handleChange(
                                                        event,
                                                        workExperience
                                                    )
                                                }
                                                label="Company Name"
                                                value={
                                                    workExperience.company_name
                                                }
                                                required={true}
                                                name="company_name"
                                                placeholder="Name of the company"
                                                error={
                                                    errors[
                                                        `${errorPrefix}.company_name`
                                                    ]
                                                }
                                            />
                                        </div>
                                        <div>
                                            <TextInput
                                                type="text"
                                                id={`workExperience-${workExperience.id}-role`}
                                                onChange={(event) =>
                                                    handleChange(
                                                        event,
                                                        workExperience
                                                    )
                                                }
                                                label="Role"
                                                value={workExperience.role}
                                                required={true}
                                                name="role"
                                                placeholder="Role in the company"
                                                error={
                                                    errors[
                                                        `${errorPrefix}.role`
                                                    ]
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <Button
                        label="Update Work Experiences"
                        type="submit"
                        className="my-4"
                    />
                </form>
            </div>
        </Authenticated>
    );
};

export default EditWorkExperiences;
