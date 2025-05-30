import React from 'react';

const LoadingSkeleton: React.FC = () => {
    return (
      <div className="p-4">
        
        <section className='md:m-10 lg:m-16 p-4 animate-pulse'>
            <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 mb-4 w-1/2"></div> {/* Title */}
            
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4 mb-4"></div> {/* Overview label */}
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4 mb-6"></div> {/* Overview content */}
            
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/3 mb-4"></div> {/* Explanation label */}
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-2/3 mb-6"></div> {/* Explanation content */}
            
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

            <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 mb-4 w-1/2"></div> {/* Title */}
            
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4 mb-4"></div> {/* Overview label */}
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4 mb-6"></div> {/* Overview content */}
            
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/3 mb-4"></div> {/* Explanation label */}
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-2/3 mb-6"></div> {/* Explanation content */}
            
        </section>
        </div>
    );
}

export default LoadingSkeleton;
