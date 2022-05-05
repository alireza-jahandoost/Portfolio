import React from "react";
import EditLink from "@/Partials/AdminPanel/Dashboard/EditLink";

const LandingPageSection = ({ landingPage }) => {
    return (
        <div className="h-full flex flex-col">
            <h3 className="font-bold text-center">Landing Page Information</h3>
            <div className="grow mt-6">
                <div>
                    <span>Title: </span>
                    <span>{landingPage.title}</span>
                </div>
                <div>
                    <span>Description: </span>
                    <span>{landingPage.description}</span>
                </div>
            </div>
            <div className="flex justify-end">
                <EditLink href={route("admin.landing_page.edit")} />
            </div>
        </div>
    );
};
export default LandingPageSection;
