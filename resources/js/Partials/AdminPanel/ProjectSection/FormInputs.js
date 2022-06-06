import React from "react";
import FloatingOutlinedInput from "@/Components/Flowbite/Input/FloatingOutlinedInput";

const FormInputs = ({ data, handleChange, errors }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <FloatingOutlinedInput
                    required={true}
                    focused={true}
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    id="name"
                    label="Project Section Name"
                    error={errors.name}
                />
            </div>
        </div>
    );
};

export default FormInputs;
