import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Flowbite/Button/Button";
import changeHandler from "@/Utilities/changeHandler";
import TextInput from "@/Components/Flowbite/Input/TextInput";
import Textarea from "@/Components/Flowbite/Textarea/Textarea";

const EditHonors = (props) => {
    const { put, data, setData, errors } = useForm({
        honors: props.honors,
    });

    const addHonor = () => {
        const id = (() => {
            while (true) {
                const id = Math.floor(Math.random() * 1000000);
                if (data.honors.findIndex((h) => h.id === id) === -1) {
                    return id;
                }
            }
        })();
        setData("honors", [
            ...data.honors,
            { id, date: "", title: "", description: "" },
        ]);
    };
    const changeHonor = (h) => {
        setData(
            "honors",
            data.honors.map((honor) => (honor.id === h.id ? h : honor))
        );
    };

    const handleChange = (event, h) => {
        const { key, value } = changeHandler(event);
        changeHonor({ ...h, [key]: value });
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure, you want to delete this honor?")) {
            setData(
                "honors",
                data.honors.filter((h) => h.id !== id)
            );
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        put(route("admin.honors.update"));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Honors
                </h2>
            }
        >
            <Head title={`Edit Honors`} />

            <div className="p-4">
                <Button
                    onClick={addHonor}
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
                        {data.honors.map((honor, idx) => {
                            const errorPrefix = `honors.${idx}`;
                            return (
                                <div key={honor.id} className="grid gap-2">
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            className="mt-8 text-gray-600 hover:text-gray-700 active:text-gray-800"
                                            onClick={() =>
                                                handleDelete(honor.id)
                                            }
                                        >
                                            <i className="fa-solid fa-trash fa-xl" />
                                        </button>
                                        <div className="grow grid grid-cols-2 gap-2">
                                            <div>
                                                <TextInput
                                                    type="date"
                                                    name="date"
                                                    value={honor.date}
                                                    onChange={(event) =>
                                                        handleChange(
                                                            event,
                                                            honor
                                                        )
                                                    }
                                                    id={`honor-${honor.id}-date`}
                                                    required={true}
                                                    label="Honor Date"
                                                    placeholder="Date of Honor"
                                                    error={
                                                        errors[
                                                            `${errorPrefix}.date`
                                                        ]
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <TextInput
                                                    type="text"
                                                    name="title"
                                                    value={honor.title}
                                                    onChange={(event) =>
                                                        handleChange(
                                                            event,
                                                            honor
                                                        )
                                                    }
                                                    id={`honor-${honor.id}-title`}
                                                    required={true}
                                                    label="Honor Title"
                                                    placeholder="Title of Honor"
                                                    error={
                                                        errors[
                                                            `${errorPrefix}.title`
                                                        ]
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Textarea
                                            label="Honor Description"
                                            value={honor.description}
                                            onChange={(event) =>
                                                handleChange(event, honor)
                                            }
                                            id={`honor-${honor.id}-description`}
                                            name="description"
                                            rowsNumber={2}
                                            error={
                                                errors[
                                                    `${errorPrefix}.description`
                                                ]
                                            }
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <Button
                        label="Update Honors"
                        type="submit"
                        className="my-4"
                    />
                </form>
            </div>
        </Authenticated>
    );
};

export default EditHonors;
