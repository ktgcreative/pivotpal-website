// components/DynamicTable.tsx

import React from 'react';

interface TableData {
    columnName: string;
    data: string[];
}

interface DynamicTableProps {
    columns: TableData[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({ columns }) => {
    return (
        <div className="py-4 px-2 mx-auto max-w-screen-xl text-center lg:py-8 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-xs md:text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} scope="col" className="px-2 md:px-6 py-2">
                                {column.columnName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: Math.max(...columns.map(col => col.data.length)) }).map((_, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className="px-2 md:px-6 py-2">
                                    {column.data[rowIndex]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DynamicTable;
