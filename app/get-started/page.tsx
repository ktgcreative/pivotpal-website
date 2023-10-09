import React from 'react';
import DynamicCodeBox from "@/components/dynamic/coding/DynamicCodeBox";
import Link from "next/link";
import DynamicTable from '@/components/dynamic/coding/DynamicTable';
import BlogSection from '@/components/dynamic/coding/BlogSection';

const tableData = [
    {
        columnName: 'Title',
        data: ['Mr', 'Miss', 'Mrs', 'Master', 'Other']
    },
    {
        columnName: 'Count',
        data: ['517', '182', '125', '40', '27']
    },
    {
        columnName: '%',
        data: ['58.02', '20.43', '14.03', '4.49', '3.03']
    }
];



const AboutPage = () => {
    const posts: any[] = [];

    return (
        <div className="md:m-10 lg:m-16 p-4">

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-none mb-4 dark:text-white">
                Get Started:
            </h1>

            <DynamicCodeBox codeContent={`!pip install pivotpal`} number={0} slug={''} id={''} />
            <DynamicCodeBox codeContent={`import pivotpal as pp`} number={0} slug={''} id={''} />

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-none mb-4 dark:text-white">
                Overview:
            </h1>
            <DynamicCodeBox codeContent={`pp.helper()`} number={0} slug={''} id={''} />
            <DynamicCodeBox codeContent={`pp.overview(your_dataset)`} number={0} slug={''} id={''} />
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                <strong>Quick Overview:</strong> PivotPal is your go-to Python package for streamlined data analysis. Whether you&apos;re just starting out or you&apos;re deep into machine learning, PivotPal has got your back.
            </p>
            <DynamicCodeBox codeContent={`pp.distribution(your_dataset, "title")`} number={0} slug={''} id={''} />

            <DynamicTable columns={tableData} />
            

        </div>
    );
};

export default AboutPage;





