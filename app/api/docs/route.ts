const DYNAMIC_CODEBOX_DATA = [
    [
        {
            "number": 1,
            "slug": "pivotpal-helper",
            "id": "helper-function",
            "title": "Helper Function: pp.helper()",
            "overview": "Provides a list of available functions in PivotPal and their descriptions.",
            "explanation": "The helper function displays the descriptions of specific functions when provided with a keyword. It's a quick way to understand the functionalities offered by PivotPal.",
            "codeContent": `
pp.helper()
            `
        },
        {
            "number": 2,
            "slug": "pivotpal-distribution",
            "id": "distribution-function",
            "title": "Distribution Function: pp.distribution(data)",
            "overview": "Displays the distribution of values for a given column.",
            "explanation": "This function provides insights into the distribution of values for a specified column in a pandas DataFrame. It counts the occurrences of each unique value and calculates the percentage distribution.",
            "codeContent": `
def distribution(data, "column_name"):

    # Count Values of column
    counts = df[column_name].value_counts()

    # Calculate % distribution
    percentages = ((counts / len(df)) * 100).round(2)

    return pd.DataFrame({

        column_name: counts.index,
        'count': counts.values,
        '%': percentages.values,

    }).sort_values(by='count', ascending=False)
    `
        },
        {
            "number": 3,
            "slug": "pivotpal-range",
            "id": "range-function",
            "title": "Range Function: pp.range(data)",
            "overview": "Shows the minimum and maximum values for each column in the dataset.",
            "explanation": "This function provides a quick way to understand the range of values for each column in the DataFrame.",
            "codeContent": `
def range(df):

    return pd.DataFrame({'Min Value': df.min(), 'Max Value': df.max()})
            `
        },
        {
            "number": 4,
            "slug": "pivotpal-unique",
            "id": "unique-function",
            "title": "Unique Function: pp.unique(data)",
            "overview": "Provides a count of unique values for each column.",
            "explanation": "This function helps in understanding the number of unique values present in each column of the DataFrame.",
            "codeContent": `
def unique(df):
    unique_counts = df.nunique()
    unique_df = pd.DataFrame({
        'Column Name': unique_counts.index,
        'Unique Count': unique_counts.values
    })

    return unique_df.sort_values(by='Unique Count', ascending=False)
    `
        },
        {
            "number": 5,
            "slug": "pivotpal-summarise",
            "id": "summarise-function",
            "title": "Summarise Function: pp.summarise(data)",
            "overview": "Summarizes numeric columns with various statistics.",
            "explanation": "This function provides a summary of numeric columns with count, sum, mean, median, max, and min values.",
            "codeContent": `
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

    return summary
            `
        },
        {
            "number": 6,
            "slug": "pivotpal-missing",
            "id": "missing-function",
            "title": "Missing Function: pp.missing()",
            "overview": "Provides a summary of missing values for each column in the dataset.",
            "explanation": "This function helps in identifying columns with missing values and the extent of missing data.",
            "codeContent": `
def missing(df):

    # Calculate the number of missing values for each column
    missing_values_count = df.isnull().sum()

    # Calculate the percentage of missing values for each column
    missing_percentage = round((missing_values_count / len(df)) * 100, 0)

    # Create a DataFrame to display the results
    statistics_df = pd.DataFrame({

        'Column Name': missing_values_count.index,
        'Missing Count': missing_values_count.values,
        'Missing %': missing_percentage.values

    })

    # Filter out columns with no missing values and sort by percentage
    statistics_df = statistics_df[statistics_df['Missing Count'] > 0].sort_values(by='Missing %', ascending=False)

    return statistics_df
    `
        },
        {
            "number": 7,
            "slug": "pivotpal-zeros",
            "id": "zeros-function",
            "title": "Zeros Function: pp.zeros(data)",
            "overview": "Summarizes columns with zero values and their respective counts.",
            "explanation": "This function provides insights into columns that have zero values, which can be crucial for data cleaning and preprocessing.",
            "codeContent": `
def zeros(df):

    # Find values equal to zero
    zero_counts = (df == 0).sum()

    # Calculate the distribution of zero values
    zero_percentage = (zero_counts / len(df) * 100).round(2)

    # Print results in DataFrame
    result_df = pd.DataFrame({'Zero Count': zero_counts, 'Zero %': zero_percentage})

    # Sorting the DataFrame by 'Zero %' in descending order
    result_df = result_df.sort_values(by='Zero %', ascending=False)

    return result_df

            `
        },
        {
            "number": 8,
            "slug": "pivotpal-duplicates",
            "id": "duplicates-function",
            "title": "Duplicates Function: pp.duplicates(data)",
            "overview": "Summarizes duplicate rows and columns in the dataset.",
            "explanation": "This function helps in identifying duplicate rows and columns in the DataFrame, which can be essential for data deduplication.",
            "codeContent": `
                def duplicates(df):
                    # ... (rest of the function)
            `
        },
        {
            "number": 9,
            "slug": "pivotpal-datatypes",
            "id": "datatypes-function",
            "title": "Datatypes Function: pp.datatypes(data)",
            "overview": "Provides insights into the data types of columns in the dataset.",
            "explanation": "This function helps in understanding the data types of each column in the DataFrame, which can be crucial for data type conversion and preprocessing.",
            "codeContent": `
def datatypes(df):

    # Get data types for each column
    dtypes = df.dtypes

    # Count the occurrences of each data type
    dtypes_count = dtypes.value_counts()

    # Calculate % distribution
    dtypes_percentage = (dtypes_count / len(dtypes) * 100).round()

    # Create a DataFrame for the pivot table-like layout
    pivot_df = pd.DataFrame({
        'Data Type': dtypes_count.index,
        'Column Count': dtypes_count.values,
        '% Distribution': dtypes_percentage.values
    })

    return pivot_df
    `
        }
    ]
    
    
]

const INTRODUCTION_DATA = {
    number: 1,
    slug: "react-components",
    topic: "React and TypeScript Integration",
    overview: "This guide provides a comprehensive walkthrough on integrating TypeScript with React. TypeScript offers static typing, interfaces, and other features that enhance the developer experience in React applications.",
    steps: [
        "Import Dependencies",
        "Define Component Props",
        "Component Definition",
        "Export Component",
        "Using the Component in a Page"
    ]
};

import { NextResponse } from "next/server"


export async function GET() {
    return NextResponse.json(DYNAMIC_CODEBOX_DATA)
}
