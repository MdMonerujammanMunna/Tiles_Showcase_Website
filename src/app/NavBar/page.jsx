"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useState } from 'react';

const NavBarPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const button = <>

        <li><Link href="/">Home</Link></li>
        <li><Link href="/All_tiles">All Tiles</Link></li>
        <li><Link href="/Profile">My Profile</Link></li>
    </>
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur-lg">
                <header className="mx-auto flex h-16 items-center justify-between px-6">
                    {/* Menu bar icon start */}
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        {/* Navbar Logo start */}
                        <Link href="/" className="flex items-center gap-3">
                            <p className="font-bold">Tails Gallary</p>
                        </Link>
                        {/* Navbar Logo end */}

                    </div>
                    {/* Menu bar icon end */}

                    {/* Main link section start */}
                    <ul className="hidden items-center gap-4 md:flex">
                        {button}
                    </ul>
                    {/* Main link section end */}

                    {/* Log-in button start */}
                    <Button className=" items-center gap-4 flex">
                        <Link href="/Login">Login</Link>
                    </Button>
                    {/* Log-in button end */}
                </header>

                {/* Manu bar Link section start  */}
                {isMenuOpen && (
                    <div className=" md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            {button}
                        </ul>
                    </div>
                )}
                {/* Manu bar Link section end */}
            </nav>
        </div>
    );
};

export default NavBarPage;