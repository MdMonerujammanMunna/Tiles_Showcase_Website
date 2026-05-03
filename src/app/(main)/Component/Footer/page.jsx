import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
const Footersection = () => {
    const Navigation =
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/All_tiles">All Tiles</Link></li>
            <li><Link href="/Profile">My Profile</Link></li>
        </>
    const Info =
        <>
            <p>01751626072</p>
            <p>mdmonerujammanmunna@gmail.com</p>
            <p>Rangpur,Bangladesh</p>
        </>
    return (
        <>
            <div className="px-10 bg-[var(--main-color)] text-white pt-20 ">
                <div className="grid text-center lg:text-left gap-10 lg:grid-cols-3">
                    <div className="space-y-4 flex flex-col justify-center items-center lg:items-start">
                        <h1 className='text-4xl font-black'>Tails <span className='text-[var(--second-color)]'>Gallary</span></h1>
                        <p className='max-w-90 text-xl font-medium'>A creative space for Tails fans. Explore unique art, moments, and designs inspired by the world of Tails.</p>
                    </div>
                    <div className="">
                        <p className='font-bold text-2xl mb-4'>Navigation</p>
                        <ul className='space-y-2 font-semibold'>
                            {Navigation}
                        </ul>
                    </div>
                    <div className="">
                        <p className='font-bold text-2xl mb-4'>Contact Us</p>
                        <ul className=' font-semibold'>
                            {Info}
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-15">
                    <p>© {new Date().getFullYear()} Tails Gallary. All rights reserved <span className='font-bold text-[var(--second-color)] text-2xl'>|</span> Mead with by ❤️<span className='font-bold text-[var(--second-color)] animate__animated animate__fadeBounce'>  Md.Munna</span></p>
                </div>
                <div className="text-2xl mt-4 font-bold flex justify-center items-center gap-10 pb-10 text-[var(--second-color)]">
                    <Link href="https://www.facebook.com/Md.MonerujammanMunna0" target='#' className='hover:text-white'><FaFacebook /></Link>
                    <Link href="https://www.instagram.com/md.monerujamman_munna/" target='#' className='hover:text-white'><RiInstagramFill /></Link>
                    <Link href="https://github.com/MdMonerujammanMunna" target='#' className='hover:text-white'><FaGithub /></Link>
                    <Link href="https://www.linkedin.com/in/mdmonerujammanmunna/" target='#' className='hover:text-white'><IoLogoLinkedin /></Link>
                </div>
            </div>
        </>
    );
};

export default Footersection;