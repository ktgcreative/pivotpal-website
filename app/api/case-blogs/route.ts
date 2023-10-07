const DYNAMIC_CODEBOX_DATA = [
    {
        number: 1,
        slug: "sample-slug-1",
        id: "sample-id-1",
        title: "Sample Title 1",
        overview: "This is a sample overview for post 1.",
        explanation: "Here's a detailed explanation for post 1.",
        codeContent: "pp.distribution(df)",
        tableData: [
            {
                columnName: 'Feature',
                data: ['FoodCourt', 'Spa', 'VRDeck', 'RoomService', 'ShoppingMall']
            },
            {
                columnName: 'Total',
                data: ['3,898,237.0', '2,647,791.0', '2,592,790.0', '1,912,541.0', '1,474,092.0']
            },
            {
                columnName: 'Distribution (%)',
                data: ['31.12', '21.14', '20.70', '15.27', '11.77']
            }
        ],
        tableSummary: "Summary of the table data for post 1."
    },
    {
        "number": 2,
        "slug": "titanic",
        "id": "titanic-id-2",
        "title": "Exploring Missing Data in the Titanic Dataset",
        "overview": "A deep dive into the missing data within the Titanic dataset using the PivotPal Python package.",
        "explanation": "The Titanic dataset is one of the most popular datasets used in data science. It contains information about the passengers onboard the Titanic, including their age, cabin, and embarkation point. In this exploration, we'll focus on identifying and understanding the missing data within this dataset.",
        "codeContent": "pp.missing(df)",
        "tableData": [
            {
                "columnName": "Column Name",
                "data": ["Cabin", "Age", "Embarked"]
            },
            {
                "columnName": "Missing Count",
                "data": ["687", "177", "2"]
            },
            {
                "columnName": "Missing %",
                "data": ["77.0", "20.0", "0.0"]
            }
        ],
        "tableSummary": "The table above showcases the columns in the Titanic dataset with missing values. The 'Cabin' column has the highest number of missing values, with 687 missing entries, accounting for 77% of the total data. The 'Age' column has 177 missing values, which is 20% of the data. Lastly, the 'Embarked' column has only 2 missing values, making up 0% of the dataset."
    },
    {
        "number": 3,
        "slug": "titanic",
        "id": "data-cleaning-titanic",
        "title": "Exploring Unique Data Values in the Titanic Dataset",
        "overview": "A comprehensive look at the unique data values within the Titanic dataset using the PivotPal Python package.",
        "explanation": "The Titanic dataset provides a wealth of information about the passengers onboard. One of the key steps in data exploration is understanding the uniqueness of data values. In this exploration, we'll identify and understand the unique values present in each column of the Titanic dataset.",
        "codeContent": "pp.unique(df)",
        "tableData": [
            {
                "columnName": "Column Name",
                "data": ["PassengerId", "Name", "Ticket", "Fare", "Cabin", "Age", "SibSp", "Parch", "Pclass", "Embarked", "Survived", "Sex"]
            },
            {
                "columnName": "Unique Count",
                "data": ["891", "891", "681", "248", "147", "88", "7", "7", "3", "3", "2", "2"]
            }
        ],
        "tableSummary": "The table above highlights the unique data values in each column of the Titanic dataset. Columns like 'PassengerId' and 'Name' have unique values for each entry, while columns like 'Sex' and 'Survived' have only 2 unique values. This information is crucial for understanding the distribution and diversity of data within the dataset."
    },    
];

const DYNAMIC_INTRODUCTION_DATA = [
    {
        number: 1,
        slug: "sample-slug-1",
        topic: "Introduction to Sample Slug 1",
        overview: "This is an overview for Sample Slug 1.",
        steps: ["Step 1", "Step 2", "Step 3"]
    },
    {
        number: 2,
        slug: "titanic",
        topic: "Deep Dive into Titanic Data Analysis",
        overview: "The Titanic dataset is one of the most renowned datasets in the data science community...",
        steps: [
            { id: "understanding-dataset-titanic", title: "Understanding the Dataset: Before diving into any analysis..." },
            { id: "data-cleaning-titanic", title: "Data Cleaning: Like most real-world datasets..." },
            // ... Add other steps similarly
        ]
    }
    
    // ... Add more data as needed
];

import { NextResponse } from "next/server"


export async function GET() {
    return NextResponse.json({
        codeBoxData: DYNAMIC_CODEBOX_DATA,
        introductionData: DYNAMIC_INTRODUCTION_DATA
    });
}

