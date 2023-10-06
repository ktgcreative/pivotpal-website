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
        ? 'http://localhost:3000/api/crime'
        : 'https://pivotpal.vercel.app/api/crime';

    const posts: CodeBoxData[] = await fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => data[0])  // Extract the inner array
        .catch(error => {
            console.error('Fetch error:', error);
            return [];
        });



    const response = await fetch(apiUrl);
    const text = await response.text();




    return (


        <div className="container mx-auto p-4">
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

            {posts.map(post => (
                <DynamicCodeBox key={post.id} {...post} />
            ))}
        </div>
    );
}


