import React from 'react';
import Marquee from "react-fast-marquee";
const MarqueePage = () => {
    return (
        <div className='px-20 rounded-full mx-1 text-white py-2 font-bold bg-[var(--second-color)]'>
            <Marquee pauseOnHover="true">
                New Arrivals: Matte White Porcelain Tile | Weekly Feature: Modern
                Geometric Patterns | Join the Community...
            </Marquee>
        </div>
    );
};

export default MarqueePage;