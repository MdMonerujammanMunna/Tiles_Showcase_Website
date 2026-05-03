"use client"

import { useSession } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import ModalPage from '../Component/Modal/page';

export const metadata = {
    title: "Profile ",
    description: "Profile",
};
const Profile = () => {
    const { data, isPending } = useSession()
    const user = data?.user;
    return (
        <>
            <div className="bg-[var(--main-color)] py-20">
                <Card className='mx-auto max-w-96 flex items-center justify-center'>
                    <Avatar className='w-30 h-30 border-4 border-[var(--second-color)]'>
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                    <div className="mt-4 flex flex-col items-center justify-center">
                        <h1 className='font-bold text-xl'>{user?.name}</h1>
                        <p className='mt-2 font-semibold text-muted'>{user?.email}</p>
                    </div>
                    <ModalPage></ModalPage>
                </Card>
            </div>
        </>
    );
};

export default Profile;