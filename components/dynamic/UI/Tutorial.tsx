import React from 'react';

type TutorialItem = {
    badgeText: string;
    badgeIcon: JSX.Element;
    title: string;
    description: string;
    link?: string;
    linkText?: string;
};

type TutorialSectionProps = {
    mainItem: TutorialItem;
    tutorialItems: TutorialItem[];
};

const TutorialSection: React.FC<TutorialSectionProps> = ({ mainItem, tutorialItems }) => {
    return (
        <section className="bg-white dark:bg-black">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 md:p-12 mb-8">
                    <a href="#" className={`bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2`}>
                        {mainItem.badgeIcon}
                        {mainItem.badgeText}
                    </a>
                    <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">{mainItem.title}</h1>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">{mainItem.description}</p>
                    {mainItem.link && mainItem.linkText && <a href={mainItem.link} className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        {mainItem.linkText}
                    </a>}
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {tutorialItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 md:p-12">
                            <a href="#" className={`bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2`}>
                                {item.badgeIcon}
                                {item.badgeText}
                            </a>
                            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">{item.title}</h2>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">{item.description}</p>
                            {item.link && item.linkText && <a href={item.link} className="text-blue-00 dark:text-blue-00 hover:underline font-medium text-lg inline-flex items-center">
                                {item.linkText}
                            </a>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TutorialSection;
