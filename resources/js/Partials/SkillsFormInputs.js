import FloatingOutlinedInput from "@/Components/Flowbite/Input/FloatingOutlinedInput";
import Toggle from "@/Components/Flowbite/Toggle/Toggle";

const SkillsFormInputs = ({ data, handleChange, errors }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <FloatingOutlinedInput
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    id="name"
                    label="Skill Name"
                    error={errors.name}
                />
            </div>
            <div>
                <FloatingOutlinedInput
                    name="icon_class"
                    value={data.icon_class}
                    onChange={handleChange}
                    id="icon_class"
                    label="Skill's icon class"
                    error={errors.icon_class}
                    helper={
                        <>
                            You can find you icon from{" "}
                            <a
                                href="https://fontawesome.com/search?s=solid%2Cbrands"
                                target="_blank"
                                className="text-blue-600 italic text-sm"
                            >
                                this
                            </a>{" "}
                            link
                        </>
                    }
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

export default SkillsFormInputs;
