import Link from 'next/link';
import React from 'react';

interface TimelineItemProps {
    step: Step;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ step }) => {
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <Link href={`#${step.id}`} className="hover:underline">{step.title}</Link>
            </h3> */}
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{step.title}</p>
            <Link href={`#${step.id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                Learn More:
                <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>

        </li>
    );
}

interface Step {
    id: string;
    title: string;

}

interface IntroductionProps {
    topic: string;
    overview: string;
    overview2: string;
    steps: Step[];
}

const Introduction: React.FC<IntroductionProps> = ({ topic, overview, overview2, steps }) => {
    return (
        <section className='md:m-10 lg:m-16'>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{topic}</h1>

            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {overview}
            </p>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {overview2}
            </p>

            <hr className="mt-6 mb-8 bg-gray-200 dark:bg-gray-700 h-0.5 border-none" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Table of Contents</h2>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {steps.map((step, index) => (
                    <TimelineItem key={index} step={step} />
                ))}
            </ol>
            <hr className="mt-6 mb-8 bg-gray-200 dark:bg-gray-700 h-0.5 border-none" />

        </section>
    );
}

export default Introduction;
