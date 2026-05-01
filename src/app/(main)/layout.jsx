import React from 'react';
import NavBarPage from './Component/NavBar/page';
import Footersection from './Component/Footer/page';

const MainLayout = ({ children }) => {
    return (
        <>
            <NavBarPage></NavBarPage>
            <main> {children} </main>
            <Footersection></Footersection>
        </>
    );
};

export default MainLayout;