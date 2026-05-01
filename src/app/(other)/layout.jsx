import React from 'react';
import NavBarPage from '../(main)/Component/NavBar/page';

const layout = ({ children }) => {
    return (
        <div>
            <NavBarPage></NavBarPage>
            <main>{children}</main>
        </div>
    );
};

export default layout;