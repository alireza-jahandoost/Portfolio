import React from "react";
import EditLink from "@/Partials/AdminPanel/Dashboard/EditLink";

const HonorsSection = ({ honors }) => {
    return (
        <div className="h-full flex flex-col">
            <h3 className="font-bold text-center">Honors</h3>
            <div className="grow mt-6">
                {honors.length === 0 ? (
                    <div className="text-center">
                        There is not any honor yet
                    </div>
                ) : (
                    honors.map((honor) => (
                        <div key={honor.id} className="mt-2 grid grid-cols-2">
                            <div>{honor.title}</div>
                            <div>{honor.date}</div>
                            <div className="col-span-2 text-lg">
                                {honor.description}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="flex justify-end">
                <EditLink href={route("admin.honors.edit")} />
            </div>
        </div>
    );
};

export default HonorsSection;
