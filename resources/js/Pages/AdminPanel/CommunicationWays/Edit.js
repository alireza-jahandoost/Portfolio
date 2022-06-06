import React from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Flowbite/Button/Button";
import changeHandler from "@/Utilities/changeHandler";
import FloatingOutlinedInput from "@/Components/Flowbite/Input/FloatingOutlinedInput";

const EditCommunicationWays = (props) => {
    const { put, data, setData, errors } = useForm({
        communication_ways: props.communicationWays,
    });

    const addCommunicationWay = () => {
        const id = (() => {
            while (true) {
                const id = Math.floor(Math.random() * 1000000);
                if (
                    data.communication_ways.findIndex((cw) => cw.id === id) ===
                    -1
                ) {
                    return id;
                }
            }
        })();
        setData("communication_ways", [
            ...data.communication_ways,
            { id, name: "", value: "", icon_class: "" },
        ]);
    };

    const changeCommunicationWay = (cw) => {
        setData(
            "communication_ways",
            data.communication_ways.map((communicationWay) =>
                communicationWay.id === cw.id ? cw : communicationWay
            )
        );
    };

    const handleChange = (event, cw) => {
        const { key, value } = changeHandler(event);
        changeCommunicationWay({ ...cw, [key]: value });
    };

    const handleDelete = (id) => {
        if (
            confirm("Are you sure, you want to delete this communication way?")
        ) {
            setData(
                "communication_ways",
                data.communication_ways.filter((cw) => cw.id !== id)
            );
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        put(route("admin.communication_ways.update"));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Communication Ways
                </h2>
            }
        >
            <Head title={`Edit Communication Ways`} />

            <div className="p-4">
                <Button
                    onClick={addCommunicationWay}
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
                        {data.communication_ways.map(
                            (communicationWay, idx) => {
                                const errorPrefix = `communication_ways.${idx}`;
                                return (
                                    <div
                                        key={communicationWay.id}
                                        className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
                                    >
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                className="text-gray-600 hover:text-gray-700 active:text-gray-800"
                                                onClick={() =>
                                                    handleDelete(
                                                        communicationWay.id
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-trash fa-xl" />
                                            </button>
                                            <div className="grow">
                                                <FloatingOutlinedInput
                                                    name="name"
                                                    value={
                                                        communicationWay.name
                                                    }
                                                    onChange={(event) =>
                                                        handleChange(
                                                            event,
                                                            communicationWay
                                                        )
                                                    }
                                                    id={`cw-${communicationWay.id}-name`}
                                                    required={true}
                                                    label="Name"
                                                    placeholder="Name of communication way"
                                                    error={
                                                        errors[
                                                            `${errorPrefix}.name`
                                                        ]
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <FloatingOutlinedInput
                                                name="value"
                                                value={communicationWay.value}
                                                onChange={(event) =>
                                                    handleChange(
                                                        event,
                                                        communicationWay
                                                    )
                                                }
                                                id={`cw-${communicationWay.id}-value`}
                                                required={true}
                                                label="Value"
                                                placeholder="Value of communication way"
                                                error={
                                                    errors[
                                                        `${errorPrefix}.value`
                                                    ]
                                                }
                                            />
                                        </div>
                                        <div>
                                            <FloatingOutlinedInput
                                                name="icon_class"
                                                value={
                                                    communicationWay.icon_class
                                                }
                                                onChange={(event) =>
                                                    handleChange(
                                                        event,
                                                        communicationWay
                                                    )
                                                }
                                                id={`cw-${communicationWay.id}-icon_class`}
                                                required={true}
                                                label="Icon classes"
                                                placeholder="Icon classes of communication way"
                                                error={
                                                    errors[
                                                        `${errorPrefix}.icon_class`
                                                    ]
                                                }
                                            />
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                    <Button
                        label="Update Communication Ways"
                        type="submit"
                        className="my-4"
                    />
                </form>
            </div>
        </Authenticated>
    );
};

export default EditCommunicationWays;
