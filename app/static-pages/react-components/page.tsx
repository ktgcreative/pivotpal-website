import DynamicCodeBox from "@/components/dynamic/coding/DynamicCodeBox";
import Introduction from "@/components/dynamic/coding/Introduction";
import Link from "next/link";

export default function Home() {

    const DYNAMIC_CODEBOX_DATA = [
        {
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
            id: "import-dependencies",
            title: "1. Import Dependencies",
            overview: "Before creating a React component, you need to import the necessary libraries. The import statement allows you to bring in functionalities from other modules or libraries. In the given code, React is imported from the 'react' library.",
            explanation: `In the given code, React is imported from the 'react' library. This is essential because JSX (the syntax used in the component) gets transpiled to React.createElement calls.`,
            codeContent:
                `// Import necessary libraries and components
import React from 'react';
`},
        {
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
            id: "export-content",
            title: "4. Export Component",
            overview: `Once the component is defined, it needs to be exported so that it can be imported and used in other parts of the application.`,
            explanation: `The export keyword makes the component available for import in other files. The default keyword indicates that this is the main export from the file.`,
            codeContent:
                `// Export the component for use in other parts of the application
export default MyComponent;`
        },
        {
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
`}
    ];

    const INTRODUCTION_DATA = {
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


    return (
        <> 
            <Introduction {...INTRODUCTION_DATA} />

            {DYNAMIC_CODEBOX_DATA.map(data => <DynamicCodeBox key={data.id} {...data} />)}
        </>
    )
}