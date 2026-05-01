import DetailsUI from '@/app/(main)/Component/DetailsUI/DetailsUi';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const data = await fetch(`https://tiles-showcase-website-server.onrender.com/MainData/${id}`)
    const Singledata = await data.json()
    return (
        <>
            <DetailsUI Singledata={Singledata}></DetailsUI>
        </>
    );
};

export default DetailsPage;