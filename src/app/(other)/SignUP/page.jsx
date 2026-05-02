"use client";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
const SignUP = () => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const fromdata = new FormData(e.currentTarget)
        const UserData = Object.fromEntries(fromdata.entries())
        const { data, error } = await authClient.signUp.email({
            name: UserData.name,
            email: UserData.email,
            password: UserData.password,
            image: UserData.image,
            dontLogin: true
        });
        if (data) {
            toast.success('Thank you for signing up', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            router.push('/Login');
        }
        if (error) {
            toast.error(`${error.message}`, {
                position: "top-center",
                autoClose: 5000,
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
        if (data) {
            toast.success('Thank you for signing up', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <>
            <div className="bg-[var(--main-color)]   py-20">
                <Card className="border mx-auto max-w-md py-10">
                    <h1 className="text-3xl font-bold text-center text-gray-800">Sign Up</h1>

                    <Form className="flex max-w-md mx-auto flex-col gap-4" onSubmit={onSubmit}>
                        <TextField isRequired name="name" type="text">
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="image" type="text">
                            <Label>Image URL</Label>
                            <Input placeholder="Image URL" />
                            <FieldError />
                        </TextField>

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
                            <Input placeholder="john@example.com" />
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
                            <Description>
                                Must be at least 8 characters with 1 uppercase and 1 number
                            </Description>
                            <FieldError />
                        </TextField>

                        <div className="flex gap-2">
                            <Button type="submit">
                                Submit
                            </Button>
                            <Button type="reset" variant="secondary">
                                Reset
                            </Button>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="text-black font-bold text-center">OR</p>
                        </div>
                        <div className="text-black">
                            <Button onClick={GoogleSubmit} className="w-full" variant="outline">   <FcGoogle /> Sign in with Google</Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </>
    );
};

export default SignUP;