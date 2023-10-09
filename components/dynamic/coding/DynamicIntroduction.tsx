import Link from 'next/link';
import React from 'react';

interface TimelineItemProps {
    step: Step;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ step }) => {
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <Link href={`#${step.id}`} className="hover:underline">{step.title}</Link>
            </h3>
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
    steps: Step[];
}

const Introduction: React.FC<IntroductionProps> = ({ topic, overview, steps }) => {
    return (
        <section className='md:m-10 lg:m-16'>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{topic}</h1>

            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {overview}
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
