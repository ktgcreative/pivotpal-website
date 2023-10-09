const DYNAMIC_CODEBOX_DATA = [

    {
        "number": 2,
        "title": "First install the package to your notebook:",
        "slug": "installation",
        "id": "missing-values",
        "codeContent": "!pip install pivotpal",
    },
    {
        "number": 2,
        "title": "Then install the PivotPal Package:",
        "slug": "installation",
        "id": "missing-values",
        "codeContent": "import pivotpal as pp",
    },
    {
        "number": 8,
        "slug": "installation",
        "id": "function-explanation",
        "title": "Understanding the 'helper' Function in the Pivot Pal Package",
        "overview": "A detailed explanation of the 'helper' function designed to assist users in understanding the functionalities of the 'Pivot Pal' package.",
        "explanation": "The 'helper' function provides descriptions of various functions available in the 'Pivot Pal' package. It offers guidance on how to use them based on a keyword provided by the user. If no keyword is provided, it displays a list of all available functions.",
        "codeContent": "pp.helper()",
        "tableData": [
            {
                "columnName": "Function Signature",
                "data": ["pp.distribution(df, \"column_name\")", "pp.range(df)", "pp.unique(df)", "pp.summarise(df)", "pp.missing(df)", "pp.zeros(df)"]
            },
            {
                "columnName": "Description",
                "data": [
                    "Displays the distribution of values for a given column.",
                    "Shows the minimum and maximum values for each column in the dataset.",
                    "Provides a count of unique values for each column.",
                    "Summarizes numeric columns with count, sum, mean, median, max, and min values.",
                    "Provides a summary of missing values for each column in the dataset.",
                    "Summarizes columns with zero values and their respective counts."
                ]
            }
        ],
        "tableSummary": "The table showcases some of the functions available in the 'Pivot Pal' package and their descriptions. The 'helper' function can provide details on these functions and more based on user input."
    },

    {
        "number": 1,
        "slug": "installation",
        "id": "dataset-overview",
        "title": "Understanding Our Massive Dataset",
        "overview": "Diving into the specifics of our dataset that boasts over 19 million entries.",
        "explanation": "Handling big datasets can be daunting. It's essential to get a clear picture of its structure and peculiarities. Here, we're taking a closer look at the various aspects of our dataset, from the types of data it contains to the presence of any missing values.",
        "codeContent": "pp.get_overview(big_data)",
        "tableData": [
            {
                "columnName": "Aspect",
                "data": ["Total Entries", "Number of Features", "Features with Missing Data", "Repeated Entries", "Most Common Data Type", "Features with Only Yes/No Data", "Features with Only Zeroes", "Different Types of Data", "Features with Numbers", "Features with Text"]
            },
            {
                "columnName": "Details",
                "data": ["19,269,992", "12", "7", "1,455,794", "text", "0", "0", "2", "3", "9"]
            }
        ],
        "tableSummary": "This table gives a quick overview of our dataset. It's quite large with 19 million entries. Most of the data is textual, but we also have some numerical features. Notably, none of the features have just binary or zero values, which adds to the dataset's richness."
    },
    {
        "number": 2,
        "slug": "installation",
        "id": "missing-values",
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
        "number": 1,
        "slug": "installation",
        "id": "room-type-distribution",
        "title": "Distribution Analysis of 'Room Type' in the Airbnb Dataset",
        "overview": "A comprehensive look at the distribution of different room types within the Airbnb dataset.",
        "explanation": "The Airbnb dataset provides insights into various listings and their attributes. One of the key attributes is the 'Room Type'. In this exploration, we'll focus on understanding the distribution of different room types available in the dataset.",
        "codeContent": "pp.distribution(airbnb_data, 'Room Type')",
        "tableData": [
            {
                "columnName": "Room Type",
                "data": ["Entire Home/Apt", "Private Room", "Shared Room"]
            },
            {
                "columnName": "Count",
                "data": ["5186", "4607", "226"]
            },
            {
                "columnName": "%",
                "data": ["51.76", "45.98", "2.26"]
            }
        ],
        "tableSummary": "The table above showcases the distribution of room types in the Airbnb dataset. 'Entire Home/Apt' is the most preferred room type, accounting for 51.76% of the dataset. This is closely followed by 'Private Room' with 45.98%. 'Shared Room' is the least common, making up only 2.26% of the dataset."
    },




];

const DYNAMIC_INTRODUCTION_DATA = [

    {
        number: 2,
        slug: "titanic",
        topic: "Titanic Data Exploration",
        overview: "A brief exploration of the Titanic dataset, focusing on missing values and unique data points.",
        steps: [
            {
                id: "missing-values",
                title: "Missing Data: A look into 'Cabin', 'Age', and 'Embarked'."
            },
            {
                id: "unique-values",
                title: "Unique Data Values: Highlighting unique counts of coulumns."
            }
        ]
    },

    {
        number: 4,
        slug: "police",
        topic: "Crime Dataset Analysis",
        overview: "Exploring the vast crime dataset with 19M entries using the PivotPal Python package.",
        steps: [
            {
                id: "overview-crime-data",
                title: "Dataset Overview: A snapshot of the crime dataset's general attributes."
            },
            {
                id: "missing-data-crime",
                title: "Missing Data: Identifying gaps in the dataset."
            },
            {
                id: "outcome-distribution",
                title: "Outcome Distribution: Analyzing the 'Last outcome category'."
            },
            {
                id: "crime-type-distribution",
                title: "Crime Type Distribution: Understanding prevalent crime types."
            }
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

