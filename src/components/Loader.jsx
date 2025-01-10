import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="relative">
                <div className="border-2 border-gray-300 border-t-2 border-t-blue-500 rounded-full w-10 h-10 animate-spin"></div>
            </div>
        </div>
    );
};

export default Loader;