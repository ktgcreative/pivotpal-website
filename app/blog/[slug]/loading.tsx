import React from 'react';

const LoadingSkeleton: React.FC = () => {
    return (
        <section className='md:m-10 lg:m-16 p-4 animate-pulse'>
            <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 mb-4"></div> {/* Title */}
            
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4 mb-6"></div> {/* Overview */}
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-2/3 mb-6"></div> {/* Explanation */}
            
            <div className="code-container bg-gray-900 p-6 rounded-lg shadow-md overflow-auto ">
                <pre className="text-white text-sm" style={{ backgroundColor: 'transparent' }}>
                    <code className="javascript" style={{ backgroundColor: 'transparent' }}>
                        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-2/3 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
                    </code>
                </pre>
            </div>
        </section>
    );
}

export default LoadingSkeleton;
