import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import Card from "@/Components/Personalized/Card/Card";
import UserSection from "@/Partials/AdminPanel/Dashboard/UserSection";
import LandingPageSection from "@/Partials/AdminPanel/Dashboard/LandingPageSection";
import WorkExperiencesSection from "@/Partials/AdminPanel/Dashboard/WorkExperiencesSection";
import workExperiencesSection from "@/Partials/AdminPanel/Dashboard/WorkExperiencesSection";
import CommunicationWaysSection from "@/Partials/AdminPanel/Dashboard/CommunicationWaysSection";
import HonorsSection from "@/Partials/AdminPanel/Dashboard/HonorsSection";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="grid bg-gray-100 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 p-1 grid-flow-row-dense">
                <Card className="md:col-span-2 md:-order-2">
                    <UserSection auth={props.auth} />
                </Card>
                <Card className="md:col-span-2">
                    <LandingPageSection landingPage={props.landingPage} />
                </Card>
                <Card>
                    <WorkExperiencesSection
                        workExperiences={props.workExperiences}
                    />
                </Card>
                <Card className="md:row-span-3 md:-order-1">
                    <CommunicationWaysSection
                        communicationWays={props.communicationWays}
                    />
                </Card>
                <Card>
                    <HonorsSection honors={props.honors} />
                </Card>
            </div>
        </Authenticated>
    );
}
