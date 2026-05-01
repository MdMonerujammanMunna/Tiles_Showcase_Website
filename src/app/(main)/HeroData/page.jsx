import { Button } from '@heroui/react';
import CardUI from '../Component/Card/Card';
import Link from 'next/link';

const HeroBanner = async () => {
    const data = await fetch("https://tiles-showcase-website-server.onrender.com/MainData")
    const res = await data.json()
    const HeroDatas = res.slice(0, 4)
    return (
        <>
            <div className="text-white border-b-4 rounded-t-2xl px-10 py-20 bg-[var(--main-color)]">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className='text-4xl font-bold mb-5'>Featured Tiles</h1>
                    <p className='text-xl font-semibold max-w-220'>Discover our handpicked featured items, carefully selected to bring you the best quality and value. Explore trending choices that stand out from the rest.</p>
                </div>
                <div className='mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {HeroDatas.map(HeroData => <CardUI key={HeroData.id} HeroData={HeroData} ></CardUI>)}
                </div>
                <Link href="/All_tiles" className="mt-10 flex items-center justify-center">
                    <Button className="w-80 bg-[var(--second-color)]">See All</Button>
                </Link>
            </div>
        </>
    );
};

export default HeroBanner;