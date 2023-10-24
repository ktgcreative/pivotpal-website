import CodeFeatures from '@/components/CodeFeatures';
import DarkModeToggle from '@/components/DarkModeToggle';
import Github from '@/components/Github';
import ContentSection from '@/components/dynamic/UI/Content'
import HeroSection from '@/components/dynamic/UI/HeroSection'
import Timeline from '@/components/dynamic/UI/TimeLine';
import TutorialSection from '@/components/dynamic/UI/Tutorial';
import Introduction from '@/components/dynamic/coding/Introduction';
import { Metadata } from 'next';
import Link from 'next/link';



export default function Home() {

  
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
        "Navigate the Airbnb dataset with PivotPal by your side. This guide delves into dataset overviews, data types, missing values, zero values, and value distributions across New York Airbnb records.",
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
      title: "Exploring the Titanic Dataset with PivotPal",
      description:
        "Use PivotPal to traverse the depths of the Titanic dataset. Learn to navigate, scrutinize, and draw significant conclusions from this historical data.",
      link: "/case-studies/titanic",
      linkText: "Start the Tutorial",
    },



  ];



  return (


    <>
   


      <HeroSection
        id='getStarted'
        title={'Python into Pivot Tables:'}
        subtitle={''}
        description={''}
        primaryButtonText={'Get Started Now'}
        primaryButtonLink={'/get-started/installation'}
        secondaryButtonText={'Star on Github'}
        secondaryButtonLink={''} codeContent={'import '}      />




      <ContentSection
        title={'Elevate Your Data Analysis Experience'}
        paragraphs={[
          `Dive into your data like never before with PivotPal. Built on the robust foundation of Pandas, this Python toolkit is tailored for in-depth data exploration. From massive datasets to intricate spreadsheets, PivotPal ensures you unearth hidden patterns, anomalies, and insights with unmatched precision.`,
          `But it's not just about tables. PivotPal is your comprehensive suite for data preprocessing, cleaning, and understanding. Whether you're a novice or a seasoned data analyst, PivotPal ensures every data point you touch turns into actionable insights.`,
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
