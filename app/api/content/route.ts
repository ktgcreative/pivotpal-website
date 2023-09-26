const posts = [
    {
        "title": "Introduction to Dummy Data",
        "slug": "introduction-to-dummy-data",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris id justo gravida laoreet. Fusce vel arcu at ipsum condimentum iaculis."
    },
    {
        "title": "Creating JSON Data",
        "slug": "creating-json-data",
        "content": "In this tutorial, we will learn how to create JSON dummy data for testing and development purposes. JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write."
    },
    {
        "title": "Generating Random Slugs",
        "slug": "generating-random-slugs",
        "content": "To generate random slugs for your posts, you can use a variety of techniques. One common approach is to combine random words or characters, remove spaces, and convert to lowercase."
    },
    {
        "title": "Content Generation Tips",
        "slug": "content-generation-tips",
        "content": "When generating dummy content, it's essential to use realistic-sounding text to mimic real-world scenarios. You can use Lorem Ipsum as a placeholder, or you can generate random sentences using text generation libraries."
    }
]

import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json(posts)
}

