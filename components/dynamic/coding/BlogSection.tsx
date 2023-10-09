import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

interface DataProps {
    number: number;
    slug: string;
    id: string;
    title?: string;
    overview?: string;
    explanation?: string;
    codeContent: string;
    tableData?: {
        columnName: string;
        data: string[];
    }[];
    tableSummary?: string;
}

const DataStream: React.FC<DataProps> = ({ title, overview, explanation, codeContent, tableData, tableSummary, id }) => {
    const highlightedCode = Prism.highlight(codeContent, Prism.languages.javascript, 'javascript');

    return (
        <div id={id} className="md:m-10 lg:m-16 p-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-none mb-4 dark:text-white">{title}</h1>
            
            {overview && <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"><strong>Overview:</strong> {overview}</p>}
            {explanation && <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"><strong>Explanation:</strong> {explanation}</p>}
            
            <div className="code-container mb-6 bg-gray-900 p-6 rounded-lg shadow-md overflow-auto">
                <pre className="text-white text-sm">
                    <code className="language-javascript" dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
                </pre>
            </div>

           
            {tableData && (
                <div>
                <div className="py-4 px-2 mx-auto max-w-screen-xl text-center lg:py-8 relative shadow-md sm:rounded-lg dark:bg-gray-800">
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs md:text-sm text-left text-gray-500 dark:text-gray-300">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
                                <tr>
                                    {tableData.map((column, index) => (
                                        <th key={index} scope="col" className="px-2 md:px-6 py-2">
                                            {column.columnName}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: Math.max(...tableData.map(col => col.data ? col.data.length : 0)) }).map((_, rowIndex) => (
                                    <tr key={rowIndex} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                                        {tableData.map((column, colIndex) => (
                                            <td key={colIndex} className="px-2 md:px-6 py-2">
                                                {column.data[rowIndex]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                    
                    {tableSummary && <p className="mt-4 text-gray-600 dark:text-gray-400">{tableSummary}</p>}
               
               
                </div>
            )}
        </div>
    );
}

export default DataStream;
