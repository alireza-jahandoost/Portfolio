import React from "react";
import EditLink from "@/Partials/AdminPanel/Dashboard/EditLink";

const WorkExperiencesSection = ({ workExperiences }) => {
    return (
        <div className="h-full flex flex-col">
            <h3 className="font-bold text-center">Work Experiences</h3>
            <div className="grow mt-6">
                {workExperiences.length === 0 ? (
                    <div className="text-center">
                        <span>There is not any work experience yet</span>
                    </div>
                ) : (
                    workExperiences.map((workExperience) => (
                        <div className="mt-4" key={workExperience.id}>
                            <div>
                                <span>{workExperience.company_name}</span>
                            </div>
                            <div>
                                <span>{workExperience.role}</span>
                            </div>
                            <div className="text-sm">
                                <span>{workExperience.start}</span>
                                <span> -> </span>
                                <span>{workExperience.end ?? "Right Now"}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="flex justify-end">
                <EditLink href={route("admin.work_experiences.edit")} />
            </div>
        </div>
    );
};

export default WorkExperiencesSection;
