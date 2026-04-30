
import img3 from '../../../public/assets/ajdkf.png'
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from 'next/link';
import { FaSquareArrowUpRight } from "react-icons/fa6";

// import Image from 'next/image';
const HomePage = () => {
    return (
        <>
            <div className="flex items-center flex-col-reverse lg:flex-row justify-between gap-10 px-10 py-20 bg-[var(--main-color)]">
                <div className='text-white text-center lg:text-left space-y-4 flex-1'>
                    <h1 className='font-bold text-5xl'><span className='text-[var(--second-color)] font-black'>Discover</span> Your <br /><span>Perfect Aesthetic !</span></h1>
                    <p className='text-xl font-semibold '>“Transform your space with premium quality tiles designed for style, durability, and elegance. Explore our wide range of modern and classic designs to find the perfect match for your home or business.”</p>
                    <Link href="/All_tiles">
                        <Button className="bg-[var(--second-color)]  font-bold">
                            <FaSquareArrowUpRight />
                            Browse Now
                        </Button>
                    </Link>
                </div>


                <div className="flex-1">
                    <Image src={img3} alt='Not ROund'></Image>
                </div>
            </div>
        </>
    );
};

export default HomePage;