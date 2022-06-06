import React, { useEffect } from "react";
import Navbar from "@/Components/Flowbite/Navbar/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Authenticated({ auth, header, children }) {
    useEffect(() => {
        if (auth.message.value) {
            toast(auth.message.value);
        }
    }, [auth.message]);

    const adminLinks = [
        {
            name: "Dashboard",
            href: route("admin.dashboard"),
            routeName: "admin.dashboard",
        },
        {
            name: "Skills",
            href: route("admin.skills.index"),
            routeName: "admin.skills.index",
        },
        {
            name: "Project Sections",
            href: route("admin.project_sections.index"),
            routeName: "admin.project_sections.index",
        },
        {
            name: "Projects",
            href: route("admin.projects.index"),
            routeName: "admin.projects.index",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <ToastContainer />
            <Navbar links={adminLinks} auth={auth} />

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
