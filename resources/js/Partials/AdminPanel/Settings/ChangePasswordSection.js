import React from "react";
import FloatingOutlinedInput from "@/Components/Flowbite/Input/FloatingOutlinedInput";
import changeHandler from "@/Utilities/changeHandler";
import { useForm } from "@inertiajs/inertia-react";
import Button from "@/Components/Flowbite/Button/Button";

const ChangePasswordSection = () => {
    const { data, setData, post, errors, reset } = useForm({
        password: "",
        new_password: "",
        new_password_confirmation: "",
    });

    const handleChange = (event) => {
        const { key, value } = changeHandler(event);
        setData(key, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        post(route("admin.change_password.store"));
    };

    return (
        <div className="grid">
            <div>
                <form onSubmit={handleSubmit}>
                    <FloatingOutlinedInput
                        id="password"
                        onChange={handleChange}
                        value={data.password}
                        label="Current Password"
                        error={errors.password}
                        name="password"
                    />
                    <FloatingOutlinedInput
                        id="new_password"
                        onChange={handleChange}
                        value={data.new_password}
                        label="New Password"
                        error={errors.new_password}
                        name="new_password"
                    />
                    <FloatingOutlinedInput
                        id="new_password_confirmation"
                        onChange={handleChange}
                        value={data.new_password_confirmation}
                        label="Confirm New Password"
                        error={errors.new_password_confirmation}
                        name="new_password_confirmation"
                    />
                    <Button label="Change Password" />
                </form>
            </div>
        </div>
    );
};

export default ChangePasswordSection;
