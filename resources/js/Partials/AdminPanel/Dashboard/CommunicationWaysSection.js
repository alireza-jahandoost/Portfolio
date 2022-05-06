import React from "react";
import EditLink from "@/Partials/AdminPanel/Dashboard/EditLink";

const CommunicationWaysSection = ({ communicationWays }) => {
    return (
        <div className="h-full flex flex-col">
            <h3 className="font-bold text-center">Communication Ways</h3>
            <div className="grow mt-6">
                {communicationWays.length === 0 ? (
                    <div className="text-center">
                        There is not any communication way yet
                    </div>
                ) : (
                    communicationWays.map((communicationWay) => (
                        <div
                            key={communicationWay.id}
                            className="grid grid-cols-2 md:grid-cols-none mt-2"
                        >
                            <div className="flex gap-1">
                                <div className="flex flex-col justify-center">
                                    <i
                                        className={`${communicationWay.icon_class}`}
                                    />
                                </div>
                                <div>{communicationWay.name}:</div>
                            </div>
                            <div>{communicationWay.value}</div>
                        </div>
                    ))
                )}
            </div>
            <div className="flex justify-end">
                <EditLink href={route("admin.communication_ways.edit")} />
            </div>
        </div>
    );
};

export default CommunicationWaysSection;
