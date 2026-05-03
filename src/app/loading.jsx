import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <>
            <div className="flex mt-100 flex-col justify-center items-center gap-2">
                <Spinner size="xl" />
            </div>
        </>
    );
};

export default loading;