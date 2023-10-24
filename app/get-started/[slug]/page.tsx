import DataStream from "@/components/dynamic/coding/BlogSection";
import DynamicIntroduction from "@/components/dynamic/coding/DynamicIntroduction";
import Link from "next/link";
import Introduction from "@/components/dynamic/coding/Introduction";

import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api/get-started'
        : 'https://pivotpal.vercel.app/api/get-started';

    const response = await fetch(apiUrl);
    const data = await response.json();

    const posts: CodeBoxData[] = data.codeBoxData;
    const introductions: IntroductionData[] = data.introductionData;
    const currentPost = posts?.find(post => post.slug === params.slug);
    const currentIntroduction = introductions?.find(introduction => introduction.slug === params.slug);

    const title = `${currentIntroduction?.topic}` || `Blog Post: ${params.slug}`;
    const description = currentPost?.overview || `Detailed overview of the blog post with slug: ${params.slug}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            // You can add an image URL if you have one
            // images: [currentPost?.imageUrl]
        },
    };
}

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
    overview2: string;
    steps: { id: string, title: string }[];
}

interface Props {
    params: { slug: string }
}




export default async function BlogPostPage({ params }: Props) {
    const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api/get-started'
        : 'https://pivotpal.vercel.app/api/get-started';

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

    const currentIntroduction = introduction?.find(intro => intro.slug === params.slug);
    const currentPost = posts?.find(post => post.slug === params.slug);

    if (!currentPost) {
        return <div>Post not found!</div>;
    }




    return (
        <div className="p-4">


            <DynamicIntroduction
                topic={currentIntroduction?.topic || "Default Topic"}
                overview={currentIntroduction?.overview || "Default Overview"}
                overview2={currentIntroduction?.overview2 || ""}
                steps={currentIntroduction?.steps || []}
            />

            {posts.filter(post => post.slug === params.slug).map(data => <DataStream key={data.id} {...data} />)}

            <div className="flex justify-center items-center mt-4 space-x-4">
            
            </div>
          
        </div>
    );
}