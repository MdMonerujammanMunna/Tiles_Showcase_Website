import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const CardUI = ({ HeroData }) => {
    const { title, description, image, category, price, tags, dimensions, currency, id, material, inStock } = HeroData
    return (
        <div className='text-black'>
            <Card className="">
                <Card.Header>
                    <div className="relative w-full aspect-square">
                        <Image src={image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt={`${title} img`} className='object-cover rounded-2xl'></Image>
                    </div>
                    <Chip className={`absolute top-8 right-8 ${inStock ? "bg-green-500" : "bg-red-700"} text-white font-bold`} variant='primary' >{inStock ? "Available" : "Not Available"}</Chip>

                    <Card.Title className='font-bold text-2xl my-4'>{title}</Card.Title>
                    <Card.Description className='font-medium text-xl'>{description}</Card.Description>

                    <div className="mt-4 flex items-center justify-between">
                        <div className=" flex items-center gap-2">
                            {tags.map((tag, index) => <h1 key={index}> <Button className="font-bold" variant="tertiary">{tag}</Button></h1>
                            )}
                        </div>
                    </div>

                    <div className="mt-5">
                        {/* <span className='font-semibold text-xl'>PRICE</span> */}
                        <span className='font-bold text-3xl'>${price}</span>
                    </div>
                    <Link href={`/All_tiles/${id}`} className="mt-5">
                        <Button fullWidth className="bg-[var(--second-color)] font-black">View Details</Button>
                    </Link>
                </Card.Header>
            </Card>
        </div >
    );
};

export default CardUI;