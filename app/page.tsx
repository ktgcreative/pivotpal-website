import ContentSection from '@/components/dynamic/UI/Content'
import HeroSection from '@/components/dynamic/UI/HeroSection'
import Timeline from '@/components/dynamic/UI/TimeLine';
import TutorialSection from '@/components/dynamic/UI/Tutorial';
import Image from 'next/image'

export default function Home() {

  const timelineData = [
    {
      date: "Step 1",
      title: "React Components: Modular & Reusable",
      description: "Dive into the world of React components, where modularity meets reusability. Craft individual pieces of your UI and reuse them across your application, ensuring consistency and reducing redundancy.",
      link: "/blog/react-components",
      linkText: "Discover More"
    },
    {
      date: "Step 2",
      title: "Tailwind CSS vs Traditional CSS",
      description: "Dive deep into the utility-first approach of Tailwind CSS and discover how it's revolutionizing web interfaces. Compare it with traditional CSS and understand the benefits of rapid, responsive, and maintainable UI development.",
      link: "/blog/tailwind-css",
      linkText: "Learn the Differences"
    },    
    {
      date: "Step 3",
      title: "Next.js 13: Server & Client Components",
      description: "Venture into the latest advancements of Next.js. Learn the distinction between Server and Client Components, and how they revolutionize the rendering process. Understand their roles in optimizing performance and enhancing user experience.",
      link: "/blog/server-components",
      linkText: "Dive into Next.js 13"
    }
    
  ];

  const mainTutorialItem = {
    badgeText: "Tutorial",
    badgeIcon: <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
      <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" /></svg>,
    title: "How to quickly deploy a static website",
    description: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
    link: "#",
    linkText: "Read more"
  };

  const tutorialItems = [
    {
      badgeText: "Design",
      badgeIcon: <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
        <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
      </svg>,
      title: "Start with Flowbite Design System",
      description: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
      link: "#design",
      linkText: "Discover Design"
    },
    {
      badgeText: "Code",
      badgeIcon: <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
      </svg>,
      title: "Best react libraries around the web",
      description: "Explore the top React libraries that have revolutionized the way developers build web applications, ensuring efficiency and scalability.",
      link: "#code",
      linkText: "Explore Libraries"
    }
  ];


  return (


    <>
    <HeroSection 
    id='getStarted'
    title={'Next.js 13 for Beginners'}
    description={'Transition from traditional web tools like Wix and WordPress to Next.js. Dive into modern web development and enhance group collaboration.'}
    primaryButtonText={'Start Learning'}
    primaryButtonLink={'#getStarted'}
    secondaryButtonText={'Why Next.js?'}
    secondaryButtonLink={'#learnMore'}
/>



      <Timeline id='getStarted' items={timelineData} />

      {/* <TutorialSection mainItem={mainTutorialItem} tutorialItems={tutorialItems} /> */}

      <ContentSection
        title={'The Next.js Advantage'}
        paragraphs={[
          'Next.js offers a seamless development experience, allowing teams to collaborate efficiently and deliver outstanding results. Its component-based architecture means every piece can be crafted independently, ensuring scalability and maintainability.',
          'With built-in features like server-side rendering and static site generation, Next.js ensures optimal performance and SEO out of the box. No more trade-offs between user experience and search engine visibility.',
        ]}
        images={[
        ]} />
    </>
  )
}
