import React from 'react';
import DynamicTable from '../coding/DynamicTable';

interface ContentProps {
  title: string;
  paragraphs: string[];
  images: {
    src: string;
    alt: string;
  }[];
}

const tableData = [
  {
    "columnName": "Tools",
    "data": [
      "pp.overview(data)", 
      "pp.distribution(data, 'column_name')", 
      "pp.range(data)", 
      "pp.unique(data)", 
      "pp.summarise(data)", 
      "pp.missing(data)", 
      "pp.zeros(data)", 
      "pp.datatypes(data)"
    ]
  },
  {
    "columnName": "Description",
    "data": [
      "Provides a snapshot of the dataset.",
      "Analyzes the distribution of values for a specific column.",
      "Determines the minimum and maximum values for each column.",
      "Counts the unique values for each column.",
      "Summarizes numeric columns with various statistics.",
      "Identifies columns with missing data.",
      "Highlights columns with zero values.",
      "Understands the data types present in the dataset."
    ]
  }
]


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
        <div className="gap-4 mt-8 hidden lg:block"> {/* Added hidden and lg:block classes here */}
          <DynamicTable columns={tableData}/>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
