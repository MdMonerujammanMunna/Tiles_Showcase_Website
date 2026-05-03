"use client";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";


export const metadata = {
    title: "Log In",
    description: "Log In",
};
const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const fromdata = new FormData(e.currentTarget)
        const UserData = Object.fromEntries(fromdata.entries())
        const { data, error } = await authClient.signIn.email({
            email: UserData.email,
            password: UserData.password,
            rememberMe: true,
            callbackURL: "/",
        });
        if (data) {
            toast.success('Thank you for Log in', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        if (error) {
            toast.error(`${error.message}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const GoogleSubmit = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
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
                        Log in
                    </Button>
                </div>

                <p className="text-center text-sm text-gray-500 ">
                    Don’t have an account?{" "}
                    <Link href="/SignUP" className="text-blue-500 font-bold hover:underline">
                        Sign up
                    </Link>
                </p>
                <div className="flex items-center justify-center">
                    <p className="text-black font-bold text-center">OR</p>
                </div>
                <div className="text-black">
                    <Button onClick={GoogleSubmit} className="w-full" variant="outline">   <FcGoogle /> Sign in with Google</Button>
                </div>
            </Form>
        </div>
    );
};

export default LoginPage;