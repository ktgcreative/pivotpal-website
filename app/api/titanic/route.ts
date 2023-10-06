const DYNAMIC_CODEBOX_DATA = [
    [{
        "number": 1,
        "slug": "pivotpal-helper",
        "id": "helper-function",
        "title": "Helper Function: pp.helper()",
        "overview": "Introduction to the 'Pivot Pal' Helper.",
        "explanation": "To get detailed descriptions of specific functions, provide a keyword inside the parentheses. For instance, pivot_pal.help('value') will show functions related to value statistics.",
        "codeContent": `
pp.helper()
        `
    },
    {
        "number": 2,
        "slug": "pivotpal-missing",
        "id": "missing-function",
        "title": "Missing Function: pp.missing(df)",
        "overview": "Summary of missing values for each column in the dataset.",
        "explanation": "Identifies columns with missing values and the extent of missing data. For instance, the 'Cabin' column has 77% missing values.",
        "codeContent": `
pp.missing(df)
        `
    },
    {
        "number": 3,
        "slug": "pivotpal-zeros",
        "id": "zeros-function",
        "title": "Zeros Function: pp.zeros(df)",
        "overview": "Summary of columns with zero values.",
        "explanation": "Provides insights into columns that have zero values. For instance, the 'Parch' column has 76.09% zero values.",
        "codeContent": `
pp.zeros(df)
        `
    },
    {
        "number": 4,
        "slug": "pivotpal-distribution-age",
        "id": "distribution-age-function",
        "title": "Distribution Function: pp.distribution(df, 'Age')",
        "overview": "Distribution of age values.",
        "explanation": "Provides insights into the distribution of age values in the DataFrame. For instance, there are 30 occurrences of age 24, which is 3.37% of the dataset.",
        "codeContent": `
pp.distribution(df, "Age")
        `
    },
    {
        "number": 5,
        "slug": "pivotpal-distribution-agecategory",
        "id": "distribution-agecategory-function",
        "title": "Distribution Function: pp.distribution(df, 'AgeCategory')",
        "overview": "Distribution of age categories.",
        "explanation": "Provides insights into the distribution of age categories in the DataFrame. This was used to categorize passengers into different age groups like 'Young Adult', 'Adult', etc.",
        "codeContent": `

pp.distribution(df, 'AgeCategory')
        `
    },
    {
        "number": 6,
        "slug": "pivotpal-distribution-title",
        "id": "distribution-title-function",
        "title": "Distribution Function: pp.distribution(df, 'Title')",
        "overview": "Distribution of titles.",
        "explanation": "Provides insights into the distribution of titles in the DataFrame. This was used to extract specific titles from the 'Name' column to categorize passengers by title.",
        "codeContent": `
pp.distribution(df, "Title")
        `
    }
]
 

]

import { NextResponse } from "next/server"


export async function GET() {
    return NextResponse.json(DYNAMIC_CODEBOX_DATA)
}
