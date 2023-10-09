const DYNAMIC_CODEBOX_DATA = [

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
        "title": "Exploring ASDFGHJKL Data Values in the Titanic Dataset",
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
    {
        "number": 4,
        "slug": "police",
        "id": "police-id-1",
        "title": "Exploring Missing Data in the Crime Dataset",
        "overview": "A deep dive into the missing data within the crime dataset using the PivotPal Python package.",
        "explanation": "The crime dataset provides comprehensive data about various crimes reported. In this exploration, we'll focus on identifying and understanding the missing data within this dataset.",
        "codeContent": "pp.missing(crime_data)",
        "tableData": [
            {
                "columnName": "Column Name",
                "data": ["Context", "Last outcome category", "Crime ID", "LSOA code", "LSOA name", "Longitude", "Latitude"]
            },
            {
                "columnName": "Missing Count",
                "data": ["19269992", "4356540", "4036619", "821598", "821598", "322599", "322599"]
            },
            {
                "columnName": "Missing %",
                "data": ["100.0", "23.0", "21.0", "4.0", "4.0", "2.0", "2.0"]
            }
        ],
        "tableSummary": "The table above showcases the columns in the crime dataset with missing values. The 'Context' column has the highest number of missing values, accounting for 100% of the total data. Other columns like 'Last outcome category' and 'Crime ID' also have significant missing values."
    }
    
];

const DYNAMIC_INTRODUCTION_DATA = [

    {
        number: 2,
        slug: "titanic",
        topic: "Deep Dive into Titanic Data Analysis",
        overview: "The Titanic dataset is one of the most renowned datasets in the data science community...",
        steps: [

            { id: "understanding-dataset-titanic", title: "Understanding the Dataset: Before diving into any analysis..." },
            { id: "data-cleaning-titanic", title: "Data Cleaning: Like most real-world datasets..." },
       
        ]
    },
    {
        number: 3,
        slug: "police",
        topic: "Deep Dive into Crime Data Analysis",
        overview: "The crime dataset provides insights into various reported crimes...",
        steps: [
            { id: "understanding-dataset-police", title: "Understanding the Dataset: Before diving into any analysis, it's essential to understand the structure and content of the crime dataset." },
            { id: "data-cleaning-police", title: "Data Cleaning: Handling missing values and inconsistencies is crucial for accurate analysis." }
        ]
    }

];

import { NextResponse } from "next/server"


export async function GET() {
    return NextResponse.json({
        codeBoxData: DYNAMIC_CODEBOX_DATA,
        introductionData: DYNAMIC_INTRODUCTION_DATA
    });
}

