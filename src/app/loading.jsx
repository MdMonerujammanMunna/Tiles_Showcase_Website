import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <>
            <div className="flex mt-100 flex-col justify-center items-center gap-2">
                <Spinner size="xl" />
                <span className="text-lg font-bold text-muted">All data</span>
            </div>
        </>
    );
};

export default loading;