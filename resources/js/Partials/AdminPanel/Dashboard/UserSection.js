import React from "react";
import { Link } from "@inertiajs/inertia-react";
import EditLink from "@/Partials/AdminPanel/Dashboard/EditLink";

const UserSection = ({ auth }) => {
    const imageUrl = auth.user.image
        ? auth.user.image
        : "images/unknownUser.png";
    return (
        <div className="h-full flex flex-col">
            <h3 className="font-bold text-center">User Information</h3>
            <div className="grow">
                <div className="flex gap-4 mt-6">
                    <div>
                        <img
                            className="h-20 w-20 rounded-full"
                            src={`/${imageUrl}`}
                            alt="User Image"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <span>User Name: </span>
                            <span>{auth.user.name}</span>
                        </div>
                        <div>
                            <span>Email: </span>
                            <span>{auth.user.email}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <EditLink href={route("admin.user_profile.edit")} />
            </div>
        </div>
    );
};
export default UserSection;
