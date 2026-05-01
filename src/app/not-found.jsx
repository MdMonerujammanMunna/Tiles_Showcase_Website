import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-[var(--main-color)] text-center  text-white px-4">
            <h1 className="text-8xl font-bold text-[var(--second-color)]">4<span className='text-white'>0</span>4</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                Page Not Found
            </h2>
            <p className="text-white mt-2 max-w-md">
                Oops! The page you are looking for doesnt exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-6 px-6 py-2 bg-[var(--second-color)] text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;