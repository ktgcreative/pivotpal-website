
import React from 'react';

interface IntroductionProps {
    topic: string;
    overview: string;
    steps: { id: string, title: string }[];  // This should be an array of objects
    
    // This should be an array of strings
}


const Introduction: React.FC<IntroductionProps> = ({ topic, overview, steps }) => {
    return (
        <section className='md:m-10 lg:m-16 p-4'>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{topic}</h1>

            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {overview}
            </p>

            <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Table of Contents</h2>
            <ul className="list-decimal pl-5">
    {steps.map((step, index) => (
        <li key={index} className="mb-2 text-lg dark:text-gray-400">
            <a href={`#${step.id}`} className="hover:underline">{step.title}</a>
        </li>
    ))}
</ul>



        </section>
    );
}

export default Introduction;
