// components/HeroSection.tsx

import React from 'react';
import DynamicCodeBox from '../coding/DynamicCodeBox';
import Link from 'next/link';
import Github from '@/components/Github';

interface HeroSectionProps {
    id?: string;
    title: string;
    subtitle: string;
    description: string;
    codeContent: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
}

const codeContent = `interface CodeSectionProps {
    number: number;
    slug: string;
    id: string;
    title?: string;
    overview?: string;
    explanation?: string;
    codeContent: string;
}`

const HeroSection: React.FC<HeroSectionProps> = ({
    id,
    title,
    subtitle,
    description,
    codeContent,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
}) => {
    return (

        <section className="bg-white dark:bg-black">
            <div className="py-4 px-4 mx-auto max-w-screen-xl  lg:py-16">

               

                <h1 className="mb-4 text-center text-5xl py-5 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-7xl dark:text-white">{title}</h1>

                {/* <DynamicCodeBox
                number={0}
                slug={''}
                id={''}
                codeContent={`import pivotpal as pp`}
            /> */}

                <div className="relative isolate overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                    <div
                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                    />
                    <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                    <Link href='/case-studies/titanic'>
                                        <div className="border-b border-r hover:bg-white/10 border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                            Titanic.ipynb
                                        </div>
                                    </Link>
                                    <Link href='/case-studies/airbnb'>
                                        <div className=" hover:bg-white/10 hover:text-white border-r border-gray-600/10 px-4 py-2">
                                            Airbnb.ipynb
                                        </div>
                                    </Link>
                                    <Link href='/case-studies/police'>
                                        <div className=" hover:bg-white/10 hover:text-white border-r border-gray-600/10 px-4 py-2">
                                            Police.ipynb
                                        </div>
                                    </Link>
                                   
                                </div>
                            </div>
                            <div className="px-6 pb-14 pt-6 text-white">
                            <Link href='/get-started/installation'>
                                <code>
                                    import pivotpal as pp
                                </code>
                            </Link>
                            </div>
                        </div>
                    </div>

                    <div
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                        aria-hidden="true"
                    />
                </div>
                <p className="mb-8 text-xl font-normal text-gray-500 lg:text-2xl sm:px-16 lg:px-48 dark:text-gray-400">{description}</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href={primaryButtonLink} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-900 dark:focus:ring-blue-900">
                        {primaryButtonText}
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <Link href={secondaryButtonLink} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <div className=' pr-2'>
                    <Github />
                    </div>
                    {secondaryButtonText}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
