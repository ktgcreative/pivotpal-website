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
        "number": 3,
        "slug": "motivation",
        "id": "enhanced-output",
        "title": `It's More Than Just Simplification... It's The Power of Structured Outputs`,
        "overview": "In the realm of data analysis, the clarity and structure of outputs are as crucial as the accuracy of the analysis itself. While many tools and packages offer shortcuts or simplifications, PivotPal stands out by transforming how results are presented. It's not only about reducing the lines of code; it's about enhancing the comprehensibility and richness of the data presented, making it an asset for data scientists and analysts alike.",
        "explanation": "I know what you're thinking: 'So, you made simple code even simpler, what's the big deal?' The true essence of PivotPal isn't just about reducing lines of code. It's about elevating the output. Instead of raw, unstructured outputs, PivotPal presents data in structured tables, complete with distribution percentages. This format is not only more readable but also more insightful.",  
        "codeContent": `# Traditional Method:

print(df['column_name'].value_counts())

# Traditional output:

Value1: Count1
Value2: Count2
Value3: Count3

# PivotPal Method:

pp.distribution(df, 'column_name')

# PivotPal Output:

`,
        "tableData": [
            {
                "columnName": "Traditional Method",
                "data": ["Value1: Count1", "Value2: Count2", "Value3: Count3"]
            },
            {
                "columnName": "PivotPal's Enhanced Method",
                "data": ["Value1 | Count1 | 50%", "Value2 | Count2 | 30%", "Value3 | Count3 | 20%"]
            }
        ],
        "tableSummary": "The table above illustrates the difference between traditional outputs and PivotPal's enhanced outputs. With PivotPal, you don't just get counts; you get a comprehensive view with percentages, offering a richer perspective for data analysis."
    },    
    {
        "number": 4,
        "slug": "motivation",
        "id": "dry-approach",
        "title": "Embracing the DRY Principle: PivotPal's Approach to Dataset Overview",
        "overview": "The DRY (Don't Repeat Yourself) principle is a foundational concept in software development, emphasizing the reduction of repetition. In the context of data analysis, this principle translates to avoiding redundant operations and streamlining processes. PivotPal embodies this principle by offering tools like 'overview' that provide a comprehensive snapshot of a dataset with a single function call, eliminating the need for multiple lines of repetitive code.",
        "explanation": "The 'overview' tool in PivotPal is a testament to the DRY principle in action. Instead of writing multiple lines of code to extract various statistics and insights from a dataset, 'overview' consolidates all these operations into a single function. Not only does it reduce the code footprint, but it also presents the results in a structured table format, making it easier to interpret and share.",
        "codeContent": `pp.overview(df)`,
        "tableData": [
            {
                "columnName": "Description",
                "data": ["Total Rows", "Total Columns", "Columns with Missing Values", "Total Duplicate Rows", "Most Frequent Data Type", "Columns with Binary Values", "Columns with Zero Values", "Unique Data Types", "Numeric Columns", "Non-Numeric Columns"]
            },
            {
                "columnName": "Count",
                "data": ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
            }
        ],
        "tableSummary": "The table above provides a snapshot of the dataset's characteristics, all achieved with a single call to the 'overview' function. With PivotPal's 'overview', you get a holistic view of your data, from general statistics to data quality insights, all presented in a structured and readable format."
    },   
    {
        "number": 6,
        "slug": "motivation",
        "id": "ai-summary",
        "title": "Future Features: AI-Powered Summaries",
        "overview": "As we continue to innovate and enhance PivotPal, one of the exciting features on our roadmap is the AI summary functionality. This feature aims to leverage the power of artificial intelligence to provide users with detailed overviews of their datasets.",
        "explanation": "With the AI summary functionality, users can expect more than just tables and statistics. PivotPal will analyze the data and generate insightful summaries, highlighting key patterns, anomalies, and trends. This feature is designed to be powered by PivotPal tables, ensuring that the summaries are based on comprehensive and structured data explorations. It's not just about numbers; it's about understanding the story behind the data.",
        "codeContent": "Coming Soon: `pp.ai_summary(df)`",
        "tableSummary": "The AI-powered summary will offer a narrative perspective to your data, making it easier to grasp complex datasets and share findings with stakeholders."
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
    {
        "number": 3,
        "slug": "under-the-hood",
        "id": "distribution",
        "title": "Exploring Value Distribution in a Dataset",
        "overview": "A detailed analysis of the distribution of values for a specified column in a dataset using the PivotPal Python package.",
        "explanation": "Understanding the distribution of values in a dataset is crucial for data analysis. This function provides insights into the frequency and percentage distribution of unique values in a specified column. It helps in identifying patterns, outliers, and potential data quality issues.",
        "codeContent": `pp.distribution(df, column_name)

# Code Breakdown:

def.distribution(df, column_name):

# Count Values of column
counts = df[column_name].value_counts()

# Calculate % distribution
percentages = ((counts / len(df)) * 100).round(2)

return pd.DataFrame({

    column_name: counts.index,
    'count': counts.values,
    '%': percentages.values,

}).sort_values(by='count', ascending=False)`,
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
        "id": "unique",
        "title": "Exploring Unique Values in a Dataset",
        "overview": "An analysis of the number of unique values for each column in a dataset using the PivotPal Python package.",
        "explanation": "Identifying the number of unique values in each column of a dataset is essential for understanding data diversity and potential categorical features. This function provides a count of unique values for every column, helping in distinguishing between continuous, categorical, and binary features.",
        "codeContent": `pp.unique(df)

# Code Breakdown:        

def unique(df):

    unique_counts = df.nunique()
    
    unique_df = pd.DataFrame({
        'Column Name': unique_counts.index,
        'Unique Count': unique_counts.values
    })
    return unique_df.sort_values(by='Unique Count', ascending=False)
`,
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
    },
    {
        "number": 3,
        "slug": "under-the-hood",
        "id": "missing",
        "title": "Exploring Missing Values",
        "overview": "Provides a summary of missing values for each column in the dataset.",
        "explanation": "This function identifies columns with missing values, providing a count and percentage of missing data. It's crucial for data cleaning and preprocessing.",
        "codeContent": `pp.missing(your_data)
        
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

    return statistics_df`,
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
        "number": 3,
        "slug": "under-the-hood",
        "id": "missing",
        "title": "Exploring Missing Values",
        "overview": "Provides a summary of missing values for each column in the dataset.",
        "explanation": "This function identifies columns with missing values, providing a count and percentage of missing data. It's crucial for data cleaning and preprocessing.",
        "codeContent": `pp.missing(your_data)
        
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

    return statistics_df`,
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
        "number": 5,
        "slug": "under-the-hood",
        "id": "datatypes",
        "title": "Exploring Data Types in a Dataset",
        "overview": "Provides a summary of data types for each column in the dataset.",
        "explanation": "Understanding the data types of each column is essential for data preprocessing and analysis. This function provides insights into the data types and their distribution across the dataset.",
        "codeContent": `pp.datatypes(your_data)
    
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
    
        return pivot_df`,
        "tableData": [
            {
                "columnName": "Data Type",
                "data": ["int64", "object", "float64"]
            },
            {
                "columnName": "Column Count",
                "data": ["3", "2", "1"]
            },
            {
                "columnName": "% Distribution",
                "data": ["50%", "33.3%", "16.7%"]
            }
        ],
        "tableSummary": "The table above showcases the distribution of data types across the dataset. It provides a count and percentage distribution of each data type, aiding in understanding the nature of data in each column."
    }
    
    
    
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
    {
        "number": 1,
        "slug": "motivation",
        "topic": "The Motivation behind PivotPal: A Journey from Repetition to Revolution",
        "overview": `In the dynamic world of machine learning and data science, efficiency and clarity are paramount. As a machine learning student, I found myself repeatedly writing code snippets for data exploration and preprocessing.`,
        "overview2": `While these snippets were functional, they often produced outputs that were messy and hard to interpret, especially when shared with peers or presented to instructors and shareholders. This realisation led to the birth of PivotPal, a package designed to streamline the data exploration process and produce clear, structured outputs.`,
        "steps": [
            {
                "id": "",
                "title": "1. It's More Than Just Simplification..."
            },
            {
                "id": "",
                "title": "2. Embracing the DRY Principle"
            },
            {
                "id": "",
                "title": "3. Future Features: AI-Powered Summaries"
            },
        ]
    },
    {
        number: 1, // Represents the sequence or order number of the section.
        slug: "under-the-hood", // A short label or identifier for the section.
        topic: "Under the Hood", // The main title or name of the section, indicating a deeper dive into the workings of the tool.
        overview: "A comprehensive guide to understanding the inner workings and code implementations of the PivotPal Python package.", // A brief description of the section.
        steps: [ // An array containing a list of functionalities or steps related to the topic.
            {
                id: "distribution", // A unique identifier for the step.
                title: "1. Value Distribution Table: Dive deep into the distribution of values for a specified column. Here, we explore the code that powers this functionality and how it processes data to provide insights." // The title and description of the step, with emphasis on the code implementation.
            },
            {
                id: "unique", // A unique identifier for the step.
                title: "2. Unique Values in Dataset: Uncover the unique values present in each column. This section breaks down the code that identifies and counts unique values across dataset columns." // The title and description of the step, focusing on the code mechanics.
            },
            {
                id: "missing", // A unique identifier for the step.
                title: "3. Missing Values Analysis: Identify and understand the gaps in your dataset. We delve into the code that detects missing values, quantifying them for better data quality assessment." // The title and description of the step, highlighting the code's role in the analysis.
            },
            {
                id: "duplicates", // A unique identifier for the step.
                title: "4. Duplicate Row Analysis: Detect and quantify duplicate rows in your dataset. This section elucidates the code logic that identifies duplicate rows, ensuring data integrity." // The title and description of the step, emphasizing the code's functionality.
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

