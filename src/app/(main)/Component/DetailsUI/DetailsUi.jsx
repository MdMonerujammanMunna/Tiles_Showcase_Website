import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

export const metadata = {
    title: "Details",
    description: "Details",
};
const DetailsUI = ({ Singledata }) => {
    const { title, description, image, category, price, currency, dimensions, material, tags, inStock } = Singledata
    return (
        <>
            <div className="bg-[var(--main-color)] flex flex-col lg:flex-row items-center gap-20 justify-center px-10 py-20">
                <div className="">
                    <Image src={image} className='rounded-xl border-4 border-[var(--second-color)]' width={400} height={400} alt={title}></Image>
                </div>
                <div className=" text-white">
                    <div className="space-y-4">
                        <h1 className='text-5xl font-black'>{material}</h1>
                        <h1 className='text-3xl font-bold'>{title}</h1>
                        <p className='text-xl font-semibold'>{description}</p>
                    </div>

                    <div className="flex items-center gap-10 mt-4">
                        <div className="flex items-center gap-4 text-[18px] ">
                            <p className='font-bold'>Size :</p>
                            <span className='font-semibold'>{dimensions}</span>
                        </div>
                        ,
                        <div className="flex items-center gap-4 text-[18px] ">
                            <p className='font-bold'>Category :</p>
                            <span className='font-semibold'>{category}</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-black">
                        <div className=" flex items-center gap-2">
                            <span className='text-white font-bold text-[18px]'>Tags:- </span>
                            {tags.map((tag, index) => <h1 key={index}> <Button className="font-bold" variant="tertiary">{tag}</Button></h1>
                            )}
                        </div>
                    </div>
                    <div className="mt-10 flex items-center gap-10">
                        <div className=" font-bold">
                            <p className=''>Selling price :</p>
                            <p className='text-3xl'><span className='font-normal'>{currency} </span> {price}</p>
                        </div>
                        <div className="">
                            <Button className="w-50 bg-[var(--second-color)]">Buy Now</Button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DetailsUI;