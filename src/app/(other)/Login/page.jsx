"use client";

import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
const LoginPage = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.currentTarget);
        const data = {};
        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    };
    return (
        //       


        //         <form className="space-y-4">
        //             <div>
        //                 <label className="text-sm font-medium text-gray-700">
        //                     Email
        //                 </label>
        //                 <input
        //                     type="email"
        //                     placeholder="Enter your email"
        //                     className=""
        //                 />
        //             </div>

        //             <div>
        //                 <label className="text-sm font-medium text-gray-700">
        //                     Password
        //                 </label>
        //                 <input
        //                     type="password"
        //                     placeholder="Enter your password"
        //                     className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        //                 />
        //             </div>

        //             <button
        //                 type="button"
        //                 className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        //             >
        //                 Login
        //             </button>
        //         </form>

        //     </div>
        // </div>

        <div className="min-h-screen flex items-center justify-center bg-[var(--main-color)] text-white px-4">
            <Form className="flex  flex-col gap-4 bg-white w-full max-w-md p-8 rounded-2xl shadow-lg" onSubmit={onSubmit}>
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mt-2 ">
                    Please login to your account
                </p>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" className="" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </div>

                <p className="text-center text-sm text-gray-500 ">
                    Don’t have an account?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        Sign up
                    </a>
                </p>
            </Form>
        </div>
    );
};

export default LoginPage;