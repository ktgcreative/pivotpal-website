
const DYNAMIC_CODEBOX_DATA = [
    {
        number: 1,
        slug: "react-components",
        id: "full-component",
        title: "React Functional Component with TypeScript",
        overview: "React components are reusable pieces of the user interface. They can be class-based or functional. With the introduction of React Hooks, functional components have become more powerful and can do almost everything that class-based components can. TypeScript, a superset of JavaScript, offers static typing, interfaces, and other features that enhance the developer experience.",
        codeContent: `
// Import necessary libraries and components
import React from 'react';
    
// Define the component's props (if any)
interface MyComponentProps {
    header?:string;
    message?: string;
}
    
// Create the functional component
const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
return (
    <div className="container">
        <h1>{header}</h1>
        <p>{message}</p>
    </div>
);
}

// Export the component for use in other parts of the application
export default MyComponent;
    `
    },
    {
        number: 1,
        slug: "react-components",
        id: "",
        title: "Using the Component in a Page",
        codeContent:
            `import MyComponent from './path-to-component';

function HomePage() {

return (
        <div>
            <MyComponent 
            header={"It's not only readable..."}
            message={"It's reusable too!"} 
            />
        </div>
    );
}

export default HomePage;         
`},
    {
        number: 1,
        slug: "react-components",
        id: "import-dependencies",
        title: "1. Import Dependencies",
        overview: "Before creating a React component, you need to import the necessary libraries. The import statement allows you to bring in functionalities from other modules or libraries. In the given code, React is imported from the 'react' library.",
        explanation: `In the given code, React is imported from the 'react' library. This is essential because JSX (the syntax used in the component) gets transpiled to React.createElement calls.`,
        codeContent:
            `// Import necessary libraries and components
import React from 'react';
`},
    {
        number: 1,
        slug: "react-components",
        id: "define-component-props",
        title: "2. Define Component Props",
        overview: `Props (short for "properties") are a way of passing data from parent to child components in React. TypeScript allows you to define the shape and type of these props using interfaces, ensuring that the component receives the correct data types.`,
        explanation: `: The interface keyword is used to define a new type. In this case, MyComponentProps specifies that the component expects a prop named message of type string.`,
        codeContent:
            `// Define the component's props (if any)
interface MyComponentProps {
    message: string;
    // Add more if needed
}`},
    {
        number: 1,
        slug: "react-components",
        id: "component-definition",
        title: "3. Component Definition",
        overview: `Overview: This is where the actual component is defined. A functional component is essentially a JavaScript function that returns JSX.`,
        explanation: `The component uses the props passed to it (in this case, message) and displays them within the returned JSX. The React.FC type definition ensures that the function is recognized as a React functional component.`,
        codeContent:
            `// Create the functional component
const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
return (
    <div className="container">
        <h1>Hello from MyComponent!</h1>
            <p>{message}</p>
        </div>
);
}`},
    {
        number: 1,
        slug: "react-components",
        id: "export-content",
        title: "4. Export Component",
        overview: `Once the component is defined, it needs to be exported so that it can be imported and used in other parts of the application.`,
        explanation: `The export keyword makes the component available for import in other files. The default keyword indicates that this is the main export from the file.`,
        codeContent:
            `// Export the component for use in other parts of the application
export default MyComponent;`
    },
    {
        number: 1,
        slug: "react-components",
        id: "using-the-component-in-a-page",
        title: "5. Using the Component in a Page",
        overview: `After defining and exporting a component, you can use it in other parts of your application.`,
        explanation: `To use the component, you first need to import it. Then, you can use it like any other JSX element. If the component expects props, you need to pass them as attributes.`,
        codeContent:
            `import MyComponent from './path-to-component';

function HomePage() {

return (
        <div>
            <MyComponent message={"hello"} />
        </div>
    );
}

export default HomePage;         
`},
{
    number: 2,
    slug: "tailwind-css",
    id: "importing-tailwind-css",
    title: "Importing Tailwind CSS vs Traditional CSS",
    overview: "While traditional CSS requires you to write and maintain separate stylesheets, Tailwind CSS allows you to quickly integrate a utility-first framework with a simple import.",
    codeContent: `
// Importing Tailwind CSS
import 'tailwindcss/tailwind.css';

// Importing Traditional CSS
import './styles.css';
    `
},
{
    number: 2,
    slug: "tailwind-css",
    id: "styling-elements",
    title: "Styling Elements: Tailwind vs Traditional CSS",
    overview: "Tailwind provides utility classes that help in quickly styling elements without writing custom CSS, whereas traditional CSS requires manual styling.",
    codeContent: `
/* Using Tailwind */
<div className="bg-blue-500 text-white p-4 rounded">
    This is a blue box with white text.
</div>

/* Using Traditional CSS */
<div className="blueBox">
This is a blue box with white text.
</div>

/* styles.css */
.blueBox {
background-color: #3b82f6;
color: #ffffff;
padding: 1rem;
border-radius: 0.25rem;
}
    `
},
{
    number: 2,
    slug: "tailwind-css",
    id: "responsive-design",
    title: "Responsive Design: Tailwind vs Traditional CSS",
    overview: "Tailwind CSS makes responsive design easy with its set of responsive variants, while traditional CSS requires media queries.",
    codeContent: `
/* Using Tailwind */
<div className="bg-green-500 p-4 md:bg-red-500 lg:bg-yellow-500">
This box changes color based on screen size.
</div>

/* Using Traditional CSS */
<div className="responsiveBox">
This box changes color based on screen size.
</div>

/* styles.css */
.responsiveBox {
background-color: #10b981;
padding: 1rem;
}

@media (min-width: 768px) {
.responsiveBox {
    background-color: #ef4444;
}
}

@media (min-width: 1024px) {
.responsiveBox {
    background-color: #f59e0b;
}
}
    `
},
{
    number: 2,
    slug: "tailwind-css",
    id: "customizing-styles",
    title: "Customizing Styles: Tailwind vs Traditional CSS",
    overview: "Both Tailwind and traditional CSS allow customization. Tailwind offers a configuration file, while traditional CSS is manually written.",
    codeContent: `
/* Customizing Tailwind */
// tailwind.config.js
module.exports = {
theme: {
extend: {
  colors: {
    customBlue: '#3252df',
  },
},
},
variants: {},
plugins: [],
}

/* Customizing Traditional CSS */
/* styles.css */
.customBlueBox {
background-color: #3252df;
}
    `
},
{
    number: 2,
    slug: "tailwind-css",
    id: "using-plugins",
    title: "Using Plugins: Tailwind vs Traditional CSS",
    overview: "Tailwind offers a range of plugins to enhance its functionality. Traditional CSS frameworks might also have plugins, but they vary by framework.",
    codeContent: `
/* Using Tailwind Plugins */
// Install the plugin
npm install @tailwindcss/typography

// Use it in your CSS
@import '@tailwindcss/typography';

/* Using Traditional CSS Plugins */
// This varies based on the CSS framework or library you're using.
    `
},
{
    number: 3,
    slug: "server-components",
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
    number: 3,
    slug: "server-components",
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
    number: 3,
    slug: "server-components",
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
    number: 3,
    slug: "server-components",
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
},
    {
        number: 4,
        slug: "dynamic-routing",
        id: "mock-database",
        title: "Setting Up Mock Database",
        overview: "This section sets up a mock database containing blog posts.",
        codeContent: 
`const posts = [
    {
        "title": "Introduction to Dummy Data",
        "slug": "introduction-to-dummy-data",
        "content": "Lorem ipsum..."
    },
    ...
]`
    },
    {
        "number": 4,
        "slug": "dynamic-routing",
        "id": "api-endpoint-setup",
        "title": "Setting Up API Endpoint",
        "overview": "This section defines an endpoint to fetch the blog posts from the mock database.",
        "explanation": "The GET function is an endpoint that returns all the posts in JSON format when accessed. The NextRequest and NextResponse are part of Next.js's server-side utilities to handle requests and responses.",
        "codeContent": 
`import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json(posts)
}`
    },
    {
        "number": 4,
        "slug": "dynamic-routing",
        "id": "interface-setup",
        "title": "Setting Up Interfaces",
        "overview": "This section defines TypeScript interfaces for the blog post and the component props.",
        "explanation": "Interfaces in TypeScript allow you to define the shape of an object. Here, we're defining the structure of a blog post and the props that the BlogPostPage component expects.",
        "codeContent": `
interface Post {
    title: string;
    content: string;
    slug: string;
}

interface Props {
    params: { slug: string}
}
        `
    },
    {
        "number": 4,
        "slug": "dynamic-routing",
        "id": "frontend-dynamic-route",
        "title": "Creating the Dynamic Route Component",
        "overview": "This section represents a dynamic page in Next.js that fetches and displays a blog post based on its slug.",
        "explanation": "The component fetches the list of posts from the backend API and then finds the post that matches the provided slug. It then renders the title and content of the matched post.",
        "codeContent": `
export default async function BlogPostPage({ params }: Props) {

    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    )
    const post = posts.find((post) => post.slug === params.slug)!;

    return (
        <div>
            <h1>{post.title}</h1>
            <h1>{post.content}</h1>
        </div>
    )
}
        `
    },
        {
            "number": 4,
            "slug": "dynamic-routing",
            "id": "backend-api-endpoint",
            "title": "Backend API Endpoint (app/api/content/route.ts)",
            "overview": "This page defines a mock database of blog posts and an endpoint to fetch them.",
            "explanation": "The `GET` function is an endpoint that returns all the posts in JSON format when accessed. The `NextRequest` and `NextResponse` are part of Next.js's server-side utilities to handle requests and responses.",
            "codeContent": `
    const posts = [
        {
            "title": "Introduction to Dummy Data",
            "slug": "introduction-to-dummy-data",
            "content": "Lorem ipsum..."
        },
        ...
    ]
    
    import { NextRequest, NextResponse } from "next/server"
    
    export async function GET() {
        return NextResponse.json(posts)
    }
            `
        },
        {
            "number": 4,
            "slug": "dynamic-routing",
            "id": "frontend-dynamic-route",
            "title": "Frontend Dynamic Route (app/blog/[slug]/page.tsx)",
            "overview": "This page represents a dynamic route in Next.js that fetches and displays a blog post based on its slug.",
            "explanation": "The `BlogPostPage` component fetches the list of posts from the backend API and then finds the post that matches the provided slug. It then renders the title and content of the matched post.",
            "codeContent": `
    interface Post {
        title: string;
        content: string;
        slug: string;
    }
    
    interface Props {
        params: { slug: string}
    }
    
    export default async function BlogPostPage({ params }: Props) {
    
        const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
            (res) => res.json()
        )
        const post = posts.find((post) => post.slug === params.slug)!;
    
        return (
            <div>
                <h1>{post.title}</h1>
                <h1>{post.content}</h1>
            </div>
        )
    }
            `
        }
    
]

const INTRODUCTION_DATA = {
    number: 1,
    slug: "react-components",
    topic: "React and TypeScript Integration",
    overview: "This guide provides a comprehensive walkthrough on integrating TypeScript with React. TypeScript offers static typing, interfaces, and other features that enhance the developer experience in React applications.",
    steps: [
        "Import Dependencies",
        "Define Component Props",
        "Component Definition",
        "Export Component",
        "Using the Component in a Page"
    ]
};

import { NextResponse } from "next/server"


export async function GET() {
    return NextResponse.json(DYNAMIC_CODEBOX_DATA)
}
