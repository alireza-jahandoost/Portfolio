import React from "react";
import TextInput from "@/Components/Flowbite/Input/TextInput";
import Textarea from "@/Components/Flowbite/Textarea/Textarea";
import Select from "@/Components/Flowbite/Select/Select";

const FormInputs = ({ data, projectSections, handleChange, errors }) => {
    return (
        <div className="grid gap-2">
            <div className="grid sm:grid-cols-2 gap-2">
                <div>
                    <TextInput
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        id="title"
                        label="Project Title"
                        placeholder="Title of the project"
                        error={errors.title}
                    />
                </div>
                <div>
                    <Select
                        value={data.project_section_id}
                        id="project_section"
                        onChange={handleChange}
                        label="Project Section"
                        name="project_section_id"
                        error={errors.project_section_id}
                    >
                        <option value="0">choose a project section</option>
                        {projectSections.map((projectSection) => (
                            <option
                                value={projectSection.id}
                                key={projectSection.id}
                            >
                                {projectSection.name}
                            </option>
                        ))}
                    </Select>
                </div>
            </div>
            <div>
                <Textarea
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    id="description"
                    label="Project Description"
                    error={errors.description}
                />
            </div>
            <div className="grid md:grid-cols-2 gap-2">
                <div>
                    <TextInput
                        name="link_to_github"
                        value={data.link_to_github}
                        onChange={handleChange}
                        id="link_to_github"
                        label="Project Link to Github"
                        placeholder="Link of the project in github"
                        error={errors.link_to_github}
                    />
                </div>
                <div>
                    <TextInput
                        name="link_to_production"
                        value={data.link_to_production}
                        onChange={handleChange}
                        id="link_to_production"
                        label="Project Link to Production"
                        placeholder="Link of the project in production"
                        error={errors.link_to_production}
                    />
                </div>
            </div>
        </div>
    );
};

export default FormInputs;
