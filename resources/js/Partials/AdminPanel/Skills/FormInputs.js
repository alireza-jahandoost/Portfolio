import FloatingOutlinedInput from "@/Components/Flowbite/Input/FloatingOutlinedInput";
import Toggle from "@/Components/Flowbite/Toggle/Toggle";

const FormInputs = ({ data, handleChange, errors }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <FloatingOutlinedInput
                    focused={true}
                    required={true}
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    id="name"
                    label="Skill Name"
                    error={errors.name}
                />
            </div>
            <div>
                <Toggle
                    onChange={handleChange}
                    id="is_fluent"
                    name="is_fluent"
                    label="Fluent at"
                    checked={data.is_fluent}
                />
            </div>
        </div>
    );
};

export default FormInputs;
