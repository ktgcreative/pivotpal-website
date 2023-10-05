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


    const posts: CodeBoxData[] = await fetch('http://localhost:3000/api/docs')
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



    const response = await fetch('http://localhost:3000/api/docs');
    const text = await response.text();
    



    return (

        <div className="p-4">
            {posts.map(data => <DynamicCodeBox key={data.id} {...data} />)}           
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
