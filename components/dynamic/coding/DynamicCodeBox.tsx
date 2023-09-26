"use client"
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'components/styles/github-dark.min.css' // You can choose another theme if you prefer

interface CodeSectionProps {
  codeContent: string;
  title: string;
  overview?: string;    // Overview is mandatory
  explanation?: string;  // Explanation is optional
  id?: string;          // Optional id prop
}

const CodeSection: React.FC<CodeSectionProps> = ({ codeContent, title, overview, explanation, id }) => {
    const codeRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightBlock(codeRef.current);
        }
    }, [codeContent]);

    return (
        <section id={id} className='md:m-10 lg:m-16 p-4'>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-none mb-4 dark:text-white">{title}</h1>
            {overview && ( 
            <p className=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                <strong>Overview:</strong> {overview}
            </p>
            )}
            
            {explanation && (
                <p className=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <strong>Explanation:</strong> {explanation}
                </p>
            )} {/* Render explanation if provided */}
            
            <div className="code-container bg-gray-900 p-6 rounded-lg shadow-md overflow-auto ">
                <pre className="text-white text-sm" style={{ backgroundColor: 'transparent' }}>
                    <code ref={codeRef} className="javascript" style={{ backgroundColor: 'transparent' }}>
                        {codeContent}
                    </code>
                </pre>
            </div>
        </section>
    );
}

export default CodeSection;
