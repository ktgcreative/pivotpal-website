import React from 'react';

interface ContentProps {
  title: string;
  paragraphs: string[];
  images: {
    src: string;
    alt: string;
  }[];
}

const ContentSection: React.FC<ContentProps> = ({ title, paragraphs, images }) => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "mb-4" : ""}>{paragraph}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {images.map((image, index) => (
            <img key={index} className={`${index === 1 ? "mt-4 w-full lg:mt-10" : "w-full"} rounded-lg`} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
