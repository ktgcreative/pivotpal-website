import ContentSection from '@/components/dynamic/UI/Content'
import HeroSection from '@/components/dynamic/UI/HeroSection'
import Timeline from '@/components/dynamic/UI/TimeLine';
import TutorialSection from '@/components/dynamic/UI/Tutorial';
import DynamicCodeBox from '@/components/dynamic/coding/DynamicCodeBox';
import DynamicTable from '@/components/dynamic/coding/DynamicTable';
import Image from 'next/image'

export default function Home() {

  const timelineData = [
    {
      date: "Step 1",
      title: "Introduction to Pivot Pal",
      description: "Get acquainted with Pivot Pal, a Python package designed for seamless data analysis with Pandas. Begin your journey by understanding the core features and the motivation behind this package.",
      link: "/blog/introduction-pivotpal",
      linkText: "Begin with Basics"
    },
    {
      date: "Step 2",
      title: "Data Overview with Pivot Pal",
      description: "Dive into the initial steps of data exploration. Learn how to quickly understand data types, range of values, and unique entries in your dataset using Pivot Pal's intuitive functions.",
      link: "/blog/data-overview-pivotpal",
      linkText: "Explore Data Overview"
    },
    {
      date: "Step 3",
      title: "Ensuring Data Quality",
      description: "Data quality is paramount. Discover how Pivot Pal assists in identifying missing values, zero entries, and duplicate rows or columns. Ensure your dataset's integrity before diving into deeper analyses.",
      link: "/blog/data-quality-pivotpal",
      linkText: "Maintain Data Integrity"
    },
    {
      date: "Step 4",
      title: "Detailed Data Analysis",
      description: "Go beyond the basics. Delve into detailed analyses of your data, from summarizing numeric columns to understanding value distributions. Pivot Pal provides the tools for comprehensive data exploration.",
      link: "/blog/detailed-analysis-pivotpal",
      linkText: "Deep Dive into Data"
    },
    {
      date: "Step 5",
      title: "Advanced Features & Tips",
      description: "Master the advanced features of Pivot Pal. Learn optimization techniques, best practices, and tips to get the most out of your data analysis journey.",
      link: "/blog/advanced-pivotpal",
      linkText: "Master Pivot Pal"
    }
  ];

  const lineData = [
    {
      date: "Function 1",
      title: "helper(value=None)",
      description: "Provides a list of available functions in PivotPal and their descriptions.",
      link: "/blog/pivotpal-helper",
      linkText: "Understand the Helper"
    },
    {
      date: "Function 2",
      title: "distribution(df, column_name)",
      description: "Displays the distribution of values for a given column.",
      link: "/blog/pivotpal-distribution",
      linkText: "Visualize Value Distribution"
    },
    {
      date: "Function 3",
      title: "range(df)",
      description: "Shows the minimum and maximum values for each column in the dataset.",
      link: "/blog/pivotpal-range",
      linkText: "Discover Data Range"
    },
    {
      date: "Function 4",
      title: "unique(df)",
      description: "Provides a count of unique values for each column.",
      link: "/blog/pivotpal-unique",
      linkText: "Identify Unique Values"
    },
    {
      date: "Function 5",
      title: "summarise(df)",
      description: "Summarizes numeric columns with various statistics.",
      link: "/blog/pivotpal-summarise",
      linkText: "Dive into Numeric Analysis"
    },
    {
      date: "Function 6",
      title: "missing(df)",
      description: "Provides a summary of missing values for each column in the dataset.",
      link: "/blog/pivotpal-missing",
      linkText: "Handle Missing Values"
    },
    {
      date: "Function 7",
      title: "zeros(df)",
      description: "Summarizes columns with zero values and their respective counts.",
      link: "/blog/pivotpal-zeros",
      linkText: "Analyze Zero Values"
    },
    {
      date: "Function 8",
      title: "duplicates(df)",
      description: "Summarizes duplicate rows and columns in the dataset.",
      link: "/blog/pivotpal-duplicates",
      linkText: "Detect Duplicates"
    },
    {
      date: "Function 9",
      title: "datatypes(df)",
      description: "Provides insights into the data types of columns in the dataset.",
      link: "/blog/pivotpal-datatypes",
      linkText: "Discover Data Types"
    }
  ];






  const mainTutorialItem = {
    badgeText: "Tutorial",
    badgeIcon: <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
      <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" /></svg>,
    title: "Getting Started with PivotPal",
    description: "PivotPal is a powerful Python package designed to simplify and enhance data analysis. Dive into its features and learn how to make the most of it.",
    link: "#",
    linkText: "Learn More"
};

const tutorialItems = [
    {
      badgeText: "Data Analysis",
      badgeIcon: <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
        <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
      </svg>,
      title: "Visualizing Data with PivotPal",
      description: "Discover how PivotPal can assist you in visualizing and understanding complex datasets with ease.",
      link: "#data-analysis",
      linkText: "Dive into Data Visualization"
    },
    {
      badgeText: "Code",
      badgeIcon: <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
      </svg>,
      title: "PivotPal's Codebase Explained",
      description: "Get a deeper understanding of how PivotPal's functions work under the hood and how you can extend its capabilities.",
      link: "/functions",
      linkText: "Explore the Code"
    }
];


  const tableData = [
    {
      title: "hello",
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


  return (


    <>
      <HeroSection
        id='getStarted'
        title={'Accelerate Your Data Analysis with a Single Import.'}
        subtitle={'pip import PivotPal'}
        description={'Break free from the limitations of traditional spreadsheet tools. With PivotPal, harness the power of Python to transform, analyze, and visualize your data seamlessly.'}
        primaryButtonText={'Start Learning'}
        primaryButtonLink={'/functions'}
        secondaryButtonText={'Why PivotPal?'}
        secondaryButtonLink={'/about'}
      />

  


      <ContentSection
        title={'PivotPal: Powering Data Analysis'}
        paragraphs={[
          'PivotPal is designed to simplify and enhance your data analysis workflow in Python. With a suite of utility functions, it assists in understanding and visualizing data distributions, missing values, zero values, duplicates, and more.',
          `Whether you're a data scientist, analyst, or enthusiast, PivotPal provides the tools you need to gain deeper insights from your datasets. Its intuitive functions make data preprocessing and exploration a breeze, allowing you to focus on drawing meaningful conclusions.`,
        ]}
        images={[
          // You can add image paths here if needed
        ]} />

      <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16">
        {/* <TutorialSection mainItem={mainTutorialItem} tutorialItems={tutorialItems} /> */}
      
</div>
<Timeline id='getStarted' items={lineData} />
    </>
  )
}
