import DataStream from "@/components/dynamic/coding/BlogSection";
import DynamicCodeBox from "@/components/dynamic/coding/DynamicCodeBox";
import Introduction from "@/components/dynamic/coding/Introduction";
import Link from "next/link";

interface CodeBoxData {
    number: number;
    slug: string;
    id: string;
    title?: string;
    overview?: string;
    explanation?: string;
    codeContent: string;
}

interface IntroductionData {
    number: number;
    slug: string;
    topic: string;
    overview: string;
    steps: string[];
}

interface Props {
    params: { slug: string }
}




export default async function BlogPostPage({ params }: Props) {
    const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api/case-blogs'
        : 'https://pivotpal.vercel.app/api/case-blogs';

    const fetchData = async () => {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    };

    let data;
    try {
        data = await fetchData();
    } catch (error) {
        console.error('Fetch error:', error);
        return <div>Error fetching data!</div>;
    }

    const posts: CodeBoxData[] = data.codeBoxData;
    const introduction: IntroductionData[] = data.introductionData; // You can use this later if needed

    const currentIntroduction = introduction.find(intro => intro.slug === params.slug);

    const currentPost = posts.find(post => post.slug === params.slug);
    if (!currentPost) {
        return <div>Post not found!</div>;
    }

    const nextPost = posts.find(post => post.number === currentPost.number + 1);
    const prevPost = posts.find(post => post.number === currentPost.number - 1);



    return (
        <div className="p-4">
            <Introduction
                topic="PivotPal: A Comprehensive Data Analysis Tool"
                overview="PivotPal is a Python package designed to simplify common data analysis tasks, such as summarising large datasets, discovering patterns in distributions and finding missing values. It provides a set of functions that allow users to quickly generate insights from their data without the need for extensive coding. From understanding data distributions to identifying missing values, PivotPal offers a streamlined approach to data exploration."
                steps={[
                    "Helper Function: Provides a list of available functions in PivotPal and their descriptions.",
                    "Distribution Function: Displays the distribution of values for a given column.",
                    "Range Function: Shows the minimum and maximum values for each column in the dataset.",
                    "Unique Function: Provides a count of unique values for each column.",
                    "Summarise Function: Summarizes numeric columns with various statistics.",
                    "Missing Function: Provides a summary of missing values for each column in the dataset.",
                    "Zeros Function: Summarizes columns with zero values and their respective counts.",
                    "Duplicates Function: Summarizes duplicate rows and columns in the dataset.",
                    "Datatypes Function: Provides insights into the data types of columns in the dataset."
                ]}
            />
            

            {posts.filter(post => post.slug === params.slug).map(data => <DataStream key={data.id} {...data} />)}
            
            <div className="flex justify-center items-center mt-4 space-x-4">
            </div>
            <div className="p-5">
                
                {prevPost && <NavigationButton href={`/blog/${prevPost.slug}`} text="Prev" />}

                {nextPost && <NavigationButton href={`/blog/${nextPost.slug}`} text="Next" />}
            </div>
        </div>
    );
}

const NavigationButton: React.FC<{ href: string, text: string, additionalClasses?: string }> = ({ href, text, additionalClasses = "" }) => (
    <Link href={href}
        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${text === "Prev" ? "rounded-l" : "rounded-r"} ${additionalClasses}`}>
        {text}

    </Link>
);
