const DYNAMIC_CODEBOX_DATA = [

    {
        "number": 3,
        "slug": "under-the-hood",
        "id": "value-distribution",
        "title": "Exploring Value Distribution in a Dataset",
        "overview": "A detailed analysis of the distribution of values for a specified column in a dataset using the PivotPal Python package.",
        "explanation": "Understanding the distribution of values in a dataset is crucial for data analysis. This function provides insights into the frequency and percentage distribution of unique values in a specified column. It helps in identifying patterns, outliers, and potential data quality issues.",
        "codeContent": `pp.distribution(df, column_name)

def summarise(df):

    numeric_df = df.select_dtypes(include=[float, int])  # Select only numeric columns

    summary = pd.DataFrame({
        'Column Name': numeric_df.columns,
        'Count': numeric_df.count().values,
        'Sum': numeric_df.sum().values,
        'Mean': numeric_df.mean().values,
        'Median': numeric_df.median().values,
        'Max': numeric_df.max().values,
        'Min': numeric_df.min().values
    })

    # Reordering the columns for better readability
    column_order = ['Column Name', 'Count', 'Sum', 'Mean', 'Median', 'Max', 'Min']
    summary = summary[column_order]

    return summary`,
        "tableData": [
            {
                "columnName": "Value",
                "data": ["Value1", "Value2", "Value3"]
            },
            {
                "columnName": "Count",
                "data": ["100", "50", "25"]
            },
            {
                "columnName": "% Distribution",
                "data": ["50.0", "25.0", "12.5"]
            }
        ],
        "tableSummary": "The table above showcases the distribution of values in the specified column of the dataset. It provides the count and percentage distribution of each unique value. This helps in understanding the prominence of each value in the dataset and can guide further analysis."
    },
    
    {
        "number": 4,
        "slug": "under-the-hood",
        "id": "unique-values",
        "title": "Exploring Unique Values in a Dataset",
        "overview": "An analysis of the number of unique values for each column in a dataset using the PivotPal Python package.",
        "explanation": "Identifying the number of unique values in each column of a dataset is essential for understanding data diversity and potential categorical features. This function provides a count of unique values for every column, helping in distinguishing between continuous, categorical, and binary features.",
        "codeContent": "pp.unique(df)",
        "tableData": [
            {
                "columnName": "Column Name",
                "data": ["Column1", "Column2", "Column3"]
            },
            {
                "columnName": "Unique Count",
                "data": ["10", "5", "2"]
            }
        ],
        "tableSummary": "The table above displays the number of unique values for each column in the dataset. Columns with a lower count of unique values might represent categorical or binary data, while those with a higher count could indicate continuous data. Understanding this distribution is crucial for feature engineering and data preprocessing."
    }
     
    
    
];

const DYNAMIC_INTRODUCTION_DATA = [
   
    {
        "number": 1,
        "slug": "airbnb",
        "topic": "Airbnb Data Exploration",
        "overview": "A comprehensive exploration of the Airbnb dataset, focusing on dataset overview, data types, missing values, zero values, and value distributions.",
        "steps": [
            {
                "id": "overview",
                "title": "1. Dataset Overview: A snapshot of the Airbnb dataset."
            },
            {
                "id": "types",
                "title": "2. Data Types Distribution: Analyzing the types of data in the dataset."
            },
            {
                "id": "missings",
                "title": "3. Columns with Missing Values: Identifying columns with missing data."
            },
            {
                "id": "zero",
                "title": "4. Columns with Zero Values: Identifying columns with zero data."
            },
            {
                "id": "distribution-roomtype",
                "title": "5. Distribution of `room_type`: Analyzing the types of rooms available."
            },
            {
                "id": "distribution-burough",
                "title": "6. Distribution of `burough`: Analyzing the distribution of boroughs in the dataset."
            }
        ]
    }
,    
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
                title: "1. Dataset Overview: A snapshot of the crime dataset's general attributes."
            },
            {
                id: "missing-data-crime",
                title: "2. Missing Data: Identifying gaps in the dataset."
            },
            {
                id: "outcome-distribution",
                title: "3. Outcome Distribution: Analyzing the 'Last outcome category'."
            },
            {
                id: "crime-type-distribution",
                title: "4. Crime Type Distribution: Understanding prevalent crime types."
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

