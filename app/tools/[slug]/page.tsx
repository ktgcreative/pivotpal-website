import DataStream from "@/components/dynamic/coding/BlogSection";
import DynamicIntroduction from "@/components/dynamic/coding/DynamicIntroduction";
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
    steps: { id: string, title: string }[];
}

interface Props {
    params: { slug: string }
}




export default async function BlogPostPage({ params }: Props) {
    const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api/tools'
        : 'https://pivotpal.vercel.app/api/tools';

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

    console.log(currentIntroduction)

    if (!currentPost) {
        return <div>Post not found!</div>;
    }


    console.log(currentIntroduction)
console.log("/////// post /////" + currentPost)


    return (
        <div className="p-4">


            <DynamicIntroduction
                topic={currentIntroduction?.topic || "Default Topic"}
                overview={currentIntroduction?.overview || "Default Overview"}
                steps={currentIntroduction?.steps || []}
            />

            {posts.filter(post => post.slug === params.slug).map(data => <DataStream key={data.id} {...data} />)}

            <div className="flex justify-center items-center mt-4 space-x-4">
            
            </div>
          
        </div>
    );
}