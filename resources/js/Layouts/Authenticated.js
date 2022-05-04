import React from "react";
import Navbar from "@/Components/Flowbite/Navbar/Navbar";

export default function Authenticated({ auth, header, children }) {
    const adminLinks = [
        {
            name: "Dashboard",
            href: route("admin.dashboard"),
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

            <main>{children}</main>
        </div>
    );
}
