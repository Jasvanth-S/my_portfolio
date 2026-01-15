import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <p className="text-2xl mb-8">Page Not Found</p>
            <a href="/" className="px-6 py-2 bg-secondary rounded-full hover:bg-gray-700 transition-colors">Go Home</a>
        </div>
    );
}

export default NotFound;
