import React from "react";
import Navbar from "@/Components/Flowbite/Navbar/Navbar";

export default function Authenticated({ auth, header, children }) {
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
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar links={adminLinks} />

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
