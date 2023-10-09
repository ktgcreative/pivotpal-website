import Github from '@/components/Github';
import ContentSection from '@/components/dynamic/UI/Content'
import HeroSection from '@/components/dynamic/UI/HeroSection'
import Timeline from '@/components/dynamic/UI/TimeLine';
import TutorialSection from '@/components/dynamic/UI/Tutorial';
import Introduction from '@/components/dynamic/coding/Introduction';
import Link from 'next/link';


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
      title: "helper()",
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
    badgeText: "Crime Analysis",
    badgeIcon: (
      <svg
        className="w-2.5 h-2.5 mr-1.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
        />
      </svg>
    ),
    title: "Deep Dive into Crime Data with PivotPal",
    description:
      "Harness the capabilities of PivotPal to analyse a comprehensive crime dataset consisting of over 19 million records. Explore how our tool efficiently processes, visualises, and extracts actionable insights from vast amounts of data.",
    link: "/case-studies/police",
    linkText: "Explore the Analysis",
  };

  const tutorialItems = [
    {
      badgeText: "Data Exploration",
      badgeIcon: (
        <svg
          className="w-2.5 h-2.5 mr-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
          />
        </svg>
      ),
      title: "Airbnb Data Exploration with PivotPal",
      description:
        "Embark on a comprehensive exploration of the Airbnb dataset using PivotPal. This tutorial covers dataset overview, data types, missing values, zero values, and value distributions across a dataset of New York Airbnb Records.",
      link: "/case-studies/airbnb",
      linkText: "Begin the Exploration",
    },
    {
      badgeText: "Tutorial",
      badgeIcon: (
        <svg
          className="w-2.5 h-2.5 mr-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
          />
        </svg>
      ),
      title: "Analyzing the Titanic Dataset with PivotPal",
      description:
        "Utilize PivotPal to delve into the Titanic dataset. Learn how to navigate, analyze, and derive meaningful conclusions from historical data.",
      link: "/case-studies/titanic",
      linkText: "Start the Tutorial",
    },


   
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
      {/* This link can be customized to point to any URL and display any text. */}


      <HeroSection
        id='getStarted'
        title={'Accelerate your Data Analysis with a Single Import:'}
        subtitle={''}
        description={''}
        primaryButtonText={'Get Started Now'}
        primaryButtonLink={'/get-started/installation'}
        secondaryButtonText={'See all tools'}
        secondaryButtonLink={'/tools/see-all'}
      />




      <ContentSection
  title={'PivotPal: Elevate Your Data Exploration Journey 📊'}
  paragraphs={[
    `Dive deeper into your data with PivotPal, the Python toolkit engineered for comprehensive data exploration. Whether you're working with vast datasets or intricate spreadsheets, PivotPal empowers you to uncover hidden patterns, anomalies, and insights with unparalleled ease.`,
    `Beyond just tables, PivotPal is your all-in-one solution for data preprocessing, cleaning, and understanding. It's designed for both beginners and seasoned analysts, ensuring that every piece of data you encounter is transformed into actionable insights. With PivotPal, data exploration isn't just a task; it's an adventure.`,
  ]}
  images={[
    // You can add image paths here if needed
  ]} />


      <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16">
        <TutorialSection mainItem={mainTutorialItem} tutorialItems={tutorialItems} />

      </div>

    </>
  )
}
