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

    const posts: any[] = [
        
    ];
    
    return (
        <div className="container mx-auto p-4">
            <section className="mb-8">

            <h1 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-none mb-4 dark:text-white">
                Get Started:
            </h1>
        
            <DynamicCodeBox  codeContent={`!pip install pivotpal`}  number={0} slug={''} id={''}  />
            <DynamicCodeBox  codeContent={`import pivotpal as pp`}  number={0} slug={''} id={''}  />
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-none mb-4 dark:text-white">
                    Overview:
                </h1>
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <strong>Quick Overview:</strong> PivotPal is your go-to Python package for streamlined data analysis. Whether you&apos;re just starting out or you&apos;re deep into machine learning, PivotPal has got your back.
                </p>
            <DynamicCodeBox  codeContent={`pp.helper()`}  number={0} slug={''} id={''}  />
            <DynamicCodeBox  codeContent={`pp.overview(dataset)`}  number={0} slug={''} id={''}  />
               
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <strong>Data Cleaning & Validation:</strong> Say goodbye to the tedious aspects of data cleaning. PivotPal offers intuitive functions that make this process a breeze.
                </p>
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <strong>Tailored for Machine Learning:</strong> Developed with insights from top experts, PivotPal aligns perfectly with the common preprocessing steps in machine learning.
                </p>
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Remember, while PivotPal is a powerful tool, its true strength is unlocked by how you integrate it into your data journey. Dive into our documentation and harness its full potential.
                </p>

                <h1 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-none mb-4 dark:text-white">
                    Outputs a distribution table:
                </h1>
                <div className='p-10'>
                    <DynamicTable columns={tableData} />
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-none mb-4 dark:text-white">
                    Dive Deeper with PivotPal
                </h1>
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <strong>Table Distributions:</strong> PivotPal isn&apos;t just about cleaning data; it&apos;s about understanding it. Get a comprehensive overview of your table distributions with just a few commands.
                </p>
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <strong>Beginner-Friendly:</strong> New to data analysis? No worries. PivotPal&apos;s intuitive design ensures that even those new to Python can get started quickly, without a steep learning curve.
                </p>
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <strong>Community-Driven:</strong> Inspired by platforms like Kaggle and Reddit, PivotPal thrives on community feedback. Our documentation is a collaborative effort, enriched by insights from data enthusiasts around the world.
                </p>
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Whether you&apos;re prepping data for a machine learning model or just exploring a new dataset, PivotPal is designed to be your companion. Explore, analyze, and transform your data with confidence.
                </p>



            </section>


         <BlogSection number={0} slug={''} id={''} codeContent={''} />

        </div>
    );
};

export default AboutPage;
