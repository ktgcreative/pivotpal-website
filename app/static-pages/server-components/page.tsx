import DynamicCodeBox from "@/components/dynamic/coding/DynamicCodeBox";
import Introduction from "@/components/dynamic/coding/Introduction";
import Link from "next/link";

export default function Home() {

    const DYNAMIC_CODEBOX_DATA = [
        {
            id: "server-static-interface",
            title: "Server Component: Static Content with Interface",
            overview: "A basic server component that displays static content using an interface. This introduces the concept of type safety in components.",
            explanation: "Interfaces in TypeScript allow us to define the shape of an object. Here, we're using an interface to define the expected properties of our static content.",
            codeContent: 
    `interface StaticContentProps {
        title: string;
        description: string;
    }
    
    function StaticContent({ title, description }: StaticContentProps) {
        return (
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        );
    }
    
    export default StaticContent;
    `
        },
        {
            id: "client-counter",
            title: "Client Component: Interactive Counter with 'use client'",
            overview: "An interactive client component that demonstrates a simple counter. It's rendered on the client side, allowing for dynamic behaviors like incrementing the count.",
            explanation: "Using the 'useState' hook from React, we can manage state within our component. This allows us to update and display the count based on user interactions.",
            codeContent: 
    `'use client';
    import { useState } from 'react';
    
    function Counter() {
        const [count, setCount] = useState(0);
    
        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
        );
    }
    
    export default Counter;
    `
        },
        {
            id: "server-user-profile",
            title: "Server Component: User Profile with Database",
            overview: "A server component that fetches and displays user profile data directly from the server. This introduces the concept of data fetching in server components.",
            explanation: "By fetching data directly on the server, we can efficiently render content without sending unnecessary JavaScript to the client. This results in faster page loads.",
            codeContent: 
    `import { db } from './database';
    
    function UserProfile({ userId }) {
        const user = db.users.get(userId);
    
        return (
            <div>
                <h1>{user.name}</h1>
                <p>{user.bio}</p>
            </div>
        );
    }
    
    export default UserProfile;
    `
        },
        {
            id: "client-navigation",
            title: "Client Component: Interactive Navigation with 'use client'",
            overview: "An interactive client component that showcases a navigation bar with a dropdown menu. It's rendered on the client side, making it responsive to user interactions.",
            explanation: "The 'useState' hook allows us to manage the state of the dropdown. By toggling the state, we can show or hide the dropdown menu based on user clicks.",
            codeContent: 
    `'use client';
    import { useState } from 'react';
    
    function Navigation() {
        const [isDropdownOpen, setDropdownOpen] = useState(false);
    
        return (
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li onClick={() => setDropdownOpen(!isDropdownOpen)}>
                        Services
                        {isDropdownOpen && (
                            <ul>
                                <li><a href="/services/web">Web Development</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        );
    }
    
    export default Navigation;
    `
        }
    ];
    
    
    
    const INTRODUCTION_DATA = {
        topic: "Introduction to Next.js 13 Components",
        overview: "Next.js 13 brings a paradigm shift in how we think about rendering components, introducing distinct Server and Client Components. This guide is structured to help beginners, especially those transitioning from vanilla JS, to grasp the core concepts, benefits, and use cases of these components in a progressive manner.",
        steps: [
            "Static Server Component with Interface",
            "Interactive Client Component: Counter",
            "Server Component: User Profile with Database",
            "Interactive Client Component: Navigation with Dropdown"
        ]
    };
    
    


    return (
        <>

            <Introduction {...INTRODUCTION_DATA} />

            {DYNAMIC_CODEBOX_DATA.map(data => <DynamicCodeBox key={data.id} {...data} />)}
        </>
    )
}