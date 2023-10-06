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



    const currentPost = posts.find(post => post.slug === params.slug);

    if (!currentPost) {
        return <div>Post not found!</div>;
    }

    const nextPost = posts.find(post => post.number === currentPost.number + 1);
    const prevPost = posts.find(post => post.number === currentPost.number - 1);



    return (
        <div className="p-4">
            
            {posts.filter(post => post.slug === params.slug).map(data => <DynamicCodeBox key={data.id} {...data} />)}
            <div className="flex justify-center items-center mt-4 space-x-4">
            </div>
            <div className="p-5">
            {prevPost && <NavigationButton href={`/blog/${prevPost.slug}`} text="Prev" />}
            </div>
            <div className="p-5">
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
