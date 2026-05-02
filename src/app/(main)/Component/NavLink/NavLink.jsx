"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathName = usePathname()

    const Selected = href === pathName
    return (
        <Link href={href} className={`${Selected ? "text-[var(--second-color)] font-bold border-b-2 border-white" : ""}`}> {children}</Link>
    );
};

export default NavLink;