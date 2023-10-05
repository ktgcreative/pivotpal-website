import DynamicCodeBox from "@/components/dynamic/coding/DynamicCodeBox";
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
    ? 'http://localhost:3000/api/docs' 
    : 'https://pivotpal.vercel.app/api/docs';

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
        {posts.map(post => (
            <DynamicCodeBox key={post.id} {...post} />
        ))}
    </div>
    );
}

