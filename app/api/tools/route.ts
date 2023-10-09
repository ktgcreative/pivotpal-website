const DYNAMIC_CODEBOX_DATA = [
    {
        "number": 1,
        "slug": "see-all",
        "id": "distribution",
        "title": "1. Value Distribution Table",
        "overview": "Analyzes the distribution of values for a specified column in a dataset.",
        "explanation": "This function provides a breakdown of the distribution of values for a specified column. It's useful for understanding the spread and frequency of data points within a column.",
        "codeContent": "pp.distribution(your_data, 'column_name')",
        "tableData": [
            {
                "columnName": "Column Name",
                "data": ["Value1", "Value2", "Value3"]
            },
            {
                "columnName": "Count",
                "data": ["Count1", "Count2", "Count3"]
            },
            {
                "columnName": "%",
                "data": ["%", "%", "%"]
            }
        ],
        "tableSummary": "The table above showcases the distribution of values for the specified column. It provides a count and percentage distribution for each unique value."
    },
    {
        "number": 2,
        "slug": "see-all",
        "id": "unique",
        "title": "2. Unique Values in Dataset",
        "overview": "Provides a count of unique values for each column in the dataset.",
        "explanation": "This function enumerates the unique values present in each column of the dataset, helping to understand data diversity.",
        "codeContent": "pp.unique(your_data)",
        "tableData": [
            {
                "columnName": "Column Name",
                "data": ["Column1", "Column2", "Column3"]
            },
            {
                "columnName": "Unique Count",
                "data": ["Count1", "Count2", "Count3"]
            }
        ],
        "tableSummary": "The table above lists the unique value counts for each column in the dataset. This helps in understanding the diversity and spread of data within columns."
    },
    {
        "number": 3,
        "slug": "see-all",
        "id": "missing",
        "title": "3. Missing Values Analysis",
        "overview": "Provides a summary of missing values for each column in the dataset.",
        "explanation": "This function identifies columns with missing values, providing a count and percentage of missing data. It's crucial for data cleaning and preprocessing.",
        "codeContent": "pp.missing(your_data)",
        "tableData": [
            {
                "columnName": "Column Name",
                "data": ["Column1", "Column2", "Column3"]
            },
            {
                "columnName": "Missing Count",
                "data": ["Count1", "Count2", "Count3"]
            },
            {
                "columnName": "Missing %",
                "data": ["%", "%", "%"]
            }
        ],
        "tableSummary": "The table above highlights columns with missing values. It provides a count and percentage of missing data for each column, aiding in data quality assessment."
    },
    {
        "number": 4,
        "slug": "see-all",
        "id": "duplicates",
        "title": "4. Duplicate Row Analysis",
        "overview": "Identifies and counts duplicate rows in the dataset.",
        "explanation": "Duplicate rows can skew analysis and lead to incorrect conclusions. This function helps in identifying and potentially removing them.",
        "codeContent": "pp.duplicates(your_data)",
        "tableData": [
            {
                "columnName": "Row Index",
                "data": ["Index1", "Index2", "Index3"]
            },
            {
                "columnName": "Duplicate Count",
                "data": ["Count1", "Count2", "Count3"]
            }
        ],
        "tableSummary": "The table above lists rows that are duplicated in the dataset along with their count."
    },
];



const DYNAMIC_INTRODUCTION_DATA = [
   

    {
        number: 1,
        slug: "see-all",
        topic: "Introduction to PivotPal Tools",
        overview: "A comprehensive guide to understanding and utilizing the core functionalities of the PivotPal Python package.",
        steps: [
            {
                id: "distribution",
                title: " 1. Value Distribution Table: Dive deep into the distribution of values for a specified column."
            },
            {
                id: "unique",
                title: "2. Unique Values in Dataset: Uncover the unique values present in each column."
            },
            {
                id: "missing",
                title: "3. Missing Values Analysis: Identify and understand the gaps in your dataset."
            },
            {
                id: "duplicates",
                title: "4. Duplicate Row Analysis: Detect and quantify duplicate rows in your dataset."
            }
        ]
    },
];

import { NextResponse } from "next/server"


export async function GET() {
    return NextResponse.json({
        codeBoxData: DYNAMIC_CODEBOX_DATA,
        introductionData: DYNAMIC_INTRODUCTION_DATA
    });
}

