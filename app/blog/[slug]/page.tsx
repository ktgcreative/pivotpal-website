import DynamicCodeBox from "@/components/dynamic/coding/DynamicCodeBox";
import Link from "next/link";

interface CodeBoxData {
    number: number;
    slug: string;
    id: string;
    title: string;
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
    
    const posts: CodeBoxData[] = await fetch('https://next-13-demo-phi.vercel.app/api/docs')
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .catch(error => {
        console.error('Fetch error:', error);
        return [];
    });
    const response = await fetch('your-api-url');
const text = await response.text();
console.log(text);


    const currentPost = posts.find(post => post.slug === params.slug);

    if (!currentPost) {
        return <div>Post not found!</div>;
    }

    const nextPost = posts.find(post => post.number === currentPost.number + 1);
    const prevPost = posts.find(post => post.number === currentPost.number - 1);

    return (
        <div className="p-4">
            {prevPost && <NavigationButton href={`/blog/${prevPost.slug}`} text={`Back: ${prevPost.slug}`} icon="←" additionalClasses="mr-4" />}
            <NavigationButton href="/" text="Home" additionalClasses="mr-4" />
            {nextPost && <NavigationButton href={`/blog/${nextPost.slug}`} text={`Next: ${nextPost.slug}`} icon="→" />}
            {posts.filter(post => post.slug === params.slug).map(data => <DynamicCodeBox key={data.id} {...data} />)}
        </div>
    );
}

const NavigationButton: React.FC<{ href: string, text: string, icon?: string, additionalClasses?: string }> = ({ href, text, icon, additionalClasses = "" }) => (
    <Link href={href}
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out ${additionalClasses}`}>
            {icon && `${icon} `}
            {text}
    </Link>
);
