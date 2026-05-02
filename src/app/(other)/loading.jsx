import { Spinner } from '@heroui/react';
const loading = () => {
    return (
        <>
            <div className="flex mt-100 flex-col justify-center items-center gap-2">
                <Spinner size="xl" />
                <span className="text-xs text-muted"></span>
            </div>
        </>
    );
};

export default loading;