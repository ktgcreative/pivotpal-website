const DYNAMIC_CODEBOX_DATA = [

    [
        {
            "number": 1,
            "slug": "pivotpal-helper",
            "id": "helper-function",
            "title": "Helper Function: pp.helper()",
            "overview": "Welcome to 'Pivot Pal' Helper!",
            "explanation": "To get detailed descriptions of specific functions, provide a keyword inside the parentheses. Example: pivot_pal.help('value') will show functions related to value statistics.",
            "codeContent": `
pp.helper()
            `
        },
        {
            "number": 2,
            "slug": "pivotpal-missing",
            "id": "missing-function",
            "title": "Missing Function: pp.missing(df)",
            "overview": "Provides a summary of missing values for each column in the dataset.",
            "explanation": "This function helps in identifying columns with missing values and the extent of missing data.",
            "codeContent": `
pp.missing(df)
            `
        },
        {
            "number": 3,
            "slug": "pivotpal-zeros",
            "id": "zeros-function",
            "title": "Zeros Function: pp.zeros(df)",
            "overview": "Summarizes columns with zero values and their respective counts.",
            "explanation": "This function provides insights into columns that have zero values, which can be crucial for data cleaning and preprocessing.",
            "codeContent": `
pp.zeros(df)
            `
        },
        {
            "number": 4,
            "slug": "pivotpal-distribution-age",
            "id": "distribution-age-function",
            "title": "Distribution Function: pp.distribution(df, 'Age')",
            "overview": "Displays the distribution of age values.",
            "explanation": "This function provides insights into the distribution of age values in the DataFrame.",
            "codeContent": `
pp.distribution(df, "Age")
            `
        },
        {
            "number": 5,
            "slug": "pivotpal-distribution-agecategory",
            "id": "distribution-agecategory-function",
            "title": "Distribution Function: pp.distribution(df, 'AgeCategory')",
            "overview": "Displays the distribution of age categories.",
            "explanation": "This function provides insights into the distribution of age categories in the DataFrame.",
            "codeContent": `
pp.distribution(df, 'AgeCategory')
            `
        },
        {
            "number": 6,
            "slug": "pivotpal-distribution-title",
            "id": "distribution-title-function",
            "title": "Distribution Function: pp.distribution(df, 'Title')",
            "overview": "Displays the distribution of titles.",
            "explanation": "This function provides insights into the distribution of titles in the DataFrame.",
            "codeContent": `
pp.distribution(df, "Title")
            `
        },
        {
            "number": 7,
            "slug": "police",
            "id": "police-id-1",
            "title": "Exploring Missing Data in the Police Crime Dataset",
            "overview": "A detailed analysis of the missing data within the Police Crime dataset.",
            "explanation": "The Police Crime dataset provides insights into various crimes reported. In this exploration, we'll focus on identifying and understanding the missing data within this dataset.",
            "codeContent": `
        pp.missing(crime_data)
        Column Name    Missing Count    Missing %
        Context        19269992         100.0
        Last outcome category   4356540 23.0
        Crime ID       4036619          21.0
        LSOA code      821598           4.0
        LSOA name      821598           4.0
        Longitude      322599           2.0
        Latitude       322599           2.0
            `
        },
    ]
]



import { NextResponse } from "next/server"


export async function GET() {
return NextResponse.json(DYNAMIC_CODEBOX_DATA)
}
