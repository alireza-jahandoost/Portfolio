import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Card from "@/Components/Personalized/Card/Card";
import ChangePasswordSection from "@/Partials/AdminPanel/Settings/ChangePasswordSection";

export default function Settings(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Settings
                </h2>
            }
        >
            <Head title="Settings" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 p-1 grid-flow-row-dense">
                <div className="md:col-span-2 md:-order-2 p-4">
                    <h3 className="text-gray-700 mb-4">Change Password</h3>
                    <ChangePasswordSection />
                </div>
            </div>
        </Authenticated>
    );
}
