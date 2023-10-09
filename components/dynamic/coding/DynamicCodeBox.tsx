import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeSectionProps {
    number: number;
    slug: string;
    id: string;
    title?: string;
    overview?: string;
    explanation?: string;
    codeContent: string;
}

const CodeSection: React.FC<CodeSectionProps> = ({ codeContent, title, overview, explanation, id }) => {
    const highlightedCode = Prism.highlight(codeContent, Prism.languages.javascript, 'javascript');

    return (
        <section id={id} className='md:m-10 lg:m-16'>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-none mb-4 dark:text-white">{title}</h1>
            {overview && (
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <strong>Overview:</strong> {overview}
                </p>
            )}

            {explanation && (
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <strong>Explanation:</strong> {explanation}
                </p>
            )}

            <div className="code-container bg-gray-900 p-6 rounded-lg shadow-md overflow-auto">
                <pre className="text-white text-sm">
                    <code className="language-python" dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
                </pre>
            </div>
        </section>
    );
}

export default CodeSection;
