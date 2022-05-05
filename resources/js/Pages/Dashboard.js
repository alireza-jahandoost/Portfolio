import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Card from "@/Components/Personalized/Card/Card";

export default function Dashboard(props) {
    const imageUrl = props.auth.user.image
        ? props.auth.user.image
        : "/images/unknownUser.png";
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

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 p-1 grid-flow-row-dense">
                <Card className="md:col-span-2 md:-order-2">
                    <h3 className="font-bold text-center">User Information</h3>
                    <div className="flex gap-4 mt-6">
                        <div>
                            <img
                                className="h-20 w-20"
                                src={imageUrl}
                                alt="User Image"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div>
                                <span>User Name: </span>
                                <span>{props.auth.user.name}</span>
                            </div>
                            <div>
                                <span>Email: </span>
                                <span>{props.auth.user.email}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>About me: </span>
                        <span>{props.auth.user.about_me}</span>
                    </div>
                </Card>
                <Card className="md:col-span-2">
                    <h3 className="font-bold text-center">
                        Landing Page Information
                    </h3>
                    <div className="mt-6">
                        <div>
                            <span>Title: </span>
                            <span>{props.landingPage.title}</span>
                        </div>
                        <div>
                            <span>Description: </span>
                            <span>{props.landingPage.description}</span>
                        </div>
                    </div>
                </Card>
                <Card>
                    <h3 className="font-bold text-center">Work Experiences</h3>
                    <div className="mt-6">
                        {props.workExperiences.length === 0 ? (
                            <div className="text-center">
                                <span>
                                    There is not any work experience yet
                                </span>
                            </div>
                        ) : (
                            props.workExperiences.map((workExperience) => (
                                <div className="mt-4" key={workExperience.id}>
                                    <div>
                                        <span>
                                            {workExperience.company_name}
                                        </span>
                                    </div>
                                    <div>
                                        <span>{workExperience.role}</span>
                                    </div>
                                    <div className="text-sm">
                                        <span>{workExperience.start}</span>
                                        <span> -> </span>
                                        <span>
                                            {workExperience.end ?? "Right Now"}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </Card>
                <Card className="md:row-span-3 md:-order-1">
                    <h3 className="font-bold text-center">
                        Communication Ways
                    </h3>
                    <div className="mt-6">
                        {props.communicationWays.length === 0 ? (
                            <div className="text-center">
                                There is not any communication way yet
                            </div>
                        ) : (
                            props.communicationWays.map((communicationWay) => (
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
                                        <div>{communicationWay.name}: </div>
                                    </div>
                                    <div>{communicationWay.value}</div>
                                </div>
                            ))
                        )}
                    </div>
                </Card>
                <Card>
                    <h3 className="font-bold text-center">Honors</h3>
                    <div className="mt-6">
                        {props.honors.length === 0 ? (
                            <div className="text-center">
                                There is not any honor yet
                            </div>
                        ) : (
                            props.honors.map((honor) => (
                                <div
                                    key={honor.id}
                                    className="mt-2 grid grid-cols-2"
                                >
                                    <div>{honor.title}</div>
                                    <div>{honor.date}</div>
                                    <div className="col-span-2 text-lg">
                                        {honor.description}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </Card>
            </div>
        </Authenticated>
    );
}
