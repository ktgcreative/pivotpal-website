const DYNAMIC_CODEBOX_DATA = [
    [{
        "number": 1,
        "slug": "dataset-size",
        "id": "dataset-size",
        "title": "Understanding the Dataset Size",
        "overview": "Before diving into the analysis, it's essential to understand the size of our dataset.",
        "explanation": "This code will print the number of records in the crime dataset.",
        "codeContent": `
print(f'The number of records in the crime dataset is {len(crime_data):,}')
        `
    },
    {
        "number": 2,
        "slug": "data-types",
        "id": "data-types",
        "title": "Checking Data Types",
        "overview": "To ensure we handle each column appropriately, let's check their data types.",
        "explanation": "This code will display the data types of each column in the dataset.",
        "codeContent": `
crime_data.dtypes
        `
    },
    {
        "number": 3,
        "slug": "missing-values",
        "id": "missing-values",
        "title": "Identifying Missing Values with PivotPal",
        "overview": "With PivotPal, we can easily identify columns with missing values.",
        "explanation": "This code will display columns with missing values and their respective counts.",
        "codeContent": `
pp.missing(crime_data)
        `
    },
    {
        "number": 4,
        "slug": "crime-type-distribution",
        "id": "crime-type-distribution",
        "title": "Diving Deeper into Missing Values",
        "overview": "To understand the patterns in columns with missing values, we can group the data.",
        "explanation": "This code will display the distribution of crime types in the dataset.",
        "codeContent": `
pp.distribution(crime_data, 'Crime type')
        `
    },
    {
        "number": 5,
        "slug": "handling-missing-values",
        "id": "handling-missing-values",
        "title": "Handling Missing Values",
        "overview": "Based on our insights, we can make informed decisions on how to handle missing values.",
        "explanation": "This code will handle missing values for the 'Anti-social behaviour' crime type.",
        "codeContent": `
crime_data.loc[crime_data['Crime type'] == 'Anti-social behaviour', 'Last outcome category'] = 'No Formal Outcome'
        `
    },
    {
        "number": 6,
        "slug": "location-data-analysis",
        "id": "location-data-analysis",
        "title": "Analyzing Location Data",
        "overview": "To understand the geographical distribution of the crimes:",
        "explanation": "This code will display the distribution of reported crimes by different police departments.",
        "codeContent": `
pp.distribution(crime_data, 'Reported by')
        `
    }
]
]

import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json(DYNAMIC_CODEBOX_DATA)
}
