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
    columnName: 'Feature',
    data: ['FoodCourt', 'Spa', 'VRDeck', 'RoomService', 'ShoppingMall']
  },
  {
    columnName: 'Total',
    data: ['3,898,237.0', '2,647,791.0', '2,592,790.0', '1,912,541.0', '1,474,092.0']
  },
  {
    columnName: 'Distribution (%)',
    data: ['31.12', '21.14', '20.70', '15.27', '11.77']
  }
];

const ContentSection: React.FC<ContentProps> = ({ title, paragraphs, images }) => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="gap-16 items-center  py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "mb-4" : ""}>{paragraph}</p>
          ))}
        </div>
        <div className="gap-4 mt-8">
          {/* <DynamicTable columns={tableData}/> */}
          {/* <DynamicTable columns={tableData}/> */}
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
