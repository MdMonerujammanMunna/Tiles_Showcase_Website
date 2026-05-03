"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBars = () => {
    const router = useRouter();
    const [DataSearch, setDataSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`?SearchBar=${DataSearch}`);
    };
    return (
        <div className='mt-4'>
            <form
                onSubmit={handleSearch}
                className="flex items-center bg-white px-4 py-2  rounded-xl shadow-md text-black"
            >
                <input
                    type="text"
                    placeholder="Type full Title..."
                    value={DataSearch}
                    onChange={(e) => setDataSearch(e.target.value)}
                    className="px-4 py-2 w-64 outline-none rounded-l-xl"
                />
                <Button
                    type="submit"
                    className=" bg-[var(--second-color)] text-white "
                >
                    Search
                </Button>
            </form>
        </div>

    );
};

export default SearchBars;