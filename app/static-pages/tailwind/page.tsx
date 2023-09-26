import DynamicCodeBox from "@/components/dynamic/coding/DynamicCodeBox";
import Introduction from "@/components/dynamic/coding/Introduction";

export default function Home() {

    const DYNAMIC_CODEBOX_DATA = [
        {
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
        }
    ];
    
    
    const INTRODUCTION_DATA = {
        topic: "Tailwind CSS: The Future of UI",
        overview: "Tailwind CSS is revolutionizing the way developers build web interfaces. With its utility-first approach, developers can rapidly create responsive and maintainable UIs.",
        steps: [
            "Importing Tailwind CSS",
            "Using Tailwind Utilities",
            "Responsive Design with Tailwind",
            "Customizing Tailwind Configuration",
            "Using Tailwind Plugins"
        ]
    };
    

    return (
        <>
            

            <Introduction {...INTRODUCTION_DATA} />

            {DYNAMIC_CODEBOX_DATA.map(data => <DynamicCodeBox key={data.id} {...data} />)}
        </>
    )
}