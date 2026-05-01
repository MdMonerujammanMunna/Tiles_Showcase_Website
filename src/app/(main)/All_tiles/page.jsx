import React from 'react';
import CardUI from '../Component/Card/Card';
import { Description, Label, SearchField } from '@heroui/react';

const All_Tiles = async () => {
    const data = await fetch("https://tiles-showcase-website-server.onrender.com/MainData")
    const res = await data.json()
    return (
        <>
            <div className="bg-[var(--main-color)] px-10 py-10 border-b-4 text-white">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className='text-4xl font-bold mb-5'>All Tiles</h1>
                    <p className='text-xl font-semibold max-w-220'>Discover our handpicked featured items, carefully selected to bring you the best quality and value. Explore trending choices that stand out from the rest.</p>
                </div>
                <div className=" flex items-center justify-center">
                    <SearchField name="search" className="max-w-100">
                        <Label>Search products</Label>
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input placeholder="Search products..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField></div>
                <div className='mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {res.map(HeroData => <CardUI key={HeroData.id} HeroData={HeroData} ></CardUI>)}
                </div>
            </div>
        </>
    );
};

export default All_Tiles;