const DYNAMIC_CODEBOX_DATA = [

    {
        "number": 2,
        "slug": "titanic",
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
        "number": 3,
        "slug": "titanic",
        "id": "unique-values",
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




    // -- // CRIME DATA // -- //





    {
        "number": 4,
        "slug": "police",
        "id": "overview-crime-data",
        "title": "1. Comprehensive Overview of the Crime Dataset with 19M Entries",
        "overview": "Utilizing the PivotPal Python package, we delve into the vast crime dataset, which boasts an impressive 19 million entries, to provide a holistic understanding of its structure and characteristics.",
        "explanation": "Kaggle datasets often come with a myriad of features and entries. The crime dataset is no exception, with a staggering 19 million rows. In this section, we'll shed light on the dataset's general attributes, from column types to missing values, ensuring a robust understanding for any aspiring data scientist or enthusiast.",
        "codeContent": "pp.overview(crime_data)",
        "tableData": [
            {
                "columnName": "Description",
                "data": ["Total Rows", "Total Columns", "Columns with Missing Values", "Total Duplicate Rows", "Most Frequent Data Type", "Columns with Binary Values", "Columns with Zero Values", "Unique Data Types", "Numeric Columns", "Non-Numeric Columns"]
            },
            {
                "columnName": "Count",
                "data": ["19,269,992", "12", "7", "1,455,794", "object", "0", "0", "2", "3", "9"]
            }
        ],
        "tableSummary": "The table provides a snapshot of the crime dataset. Notably, with 19 million entries, it's a sizable dataset. The majority data type is 'object', and there are both numeric and non-numeric columns. Interestingly, despite its size, there are no columns with binary or zero values."
    },
    {
        "number": 5,
        "slug": "police",
        "id": "missing-data-crime",
        "title": "2. Exploring Missing Data in the Crime Dataset",
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
                "data": ["19,269,992", "4,356,540", "4,036,619", "821,598", "821,598", "322,599", "322,599"]
            },
            {
                "columnName": "Missing %",
                "data": ["100.0", "23.0", "21.0", "4.0", "4.0", "2.0", "2.0"]
            }
        ],
        "tableSummary": "The table above showcases the columns in the crime dataset with missing values. The 'Context' column has the highest number of missing values, accounting for 100% of the total data. Other columns like 'Last outcome category' and 'Crime ID' also have significant missing values."
    },
    {
        "number": 6,
        "slug": "police",
        "id": "outcome-distribution",
        "title": "3. Distribution Analysis of 'Last outcome category' in the Crime Dataset",
        "overview": "Using the PivotPal Python package, we explore the distribution of the 'Last outcome category' within the crime dataset, which contains over 19 million entries.",
        "explanation": "In large datasets like the one from Kaggle's crime records, understanding the distribution of specific columns is crucial. Here, we focus on the 'Last outcome category' to discern the most common outcomes of reported crimes.",
        "codeContent": "pp.distribution(crime_data, 'Last outcome category')",
        "tableData": [
            {
                "columnName": "Last outcome category",
                "data": ["Investigation complete; no suspect identified", "Unable to prosecute suspect", "Status update unavailable", "Under investigation", "Court result unavailable", "Local resolution", "Awaiting court outcome", "Action to be taken by another organisation", "Offender given a caution", "Further investigation is not in the public interest", "Formal action is not in the public interest", "Further action is not in the public interest", "Offender given penalty notice", "Offender given a drugs possession warning", "Suspect charged as part of another case"]
            },
            {
                "columnName": "Count",
                "data": ["6,131,104", "4,935,065", "1,126,295", "857,878", "669,807", "361,615", "196,928", "168,733", "140,223", "127,227", "76,340", "72,329", "24,397", "19,000", "6,511"]
            },
            {
                "columnName": "%",
                "data": ["31.82", "25.61", "5.84", "4.45", "3.48", "1.88", "1.02", "0.88", "0.73", "0.66", "0.40", "0.38", "0.13", "0.10", "0.03"]
            }
        ],
        "tableSummary": "The table illustrates the distribution of outcomes in the 'Last outcome category'. The most frequent outcome is 'Investigation complete; no suspect identified' with over 6.1 million occurrences, accounting for 31.82% of the dataset. This is followed by 'Unable to prosecute suspect' with nearly 5 million occurrences. The data provides valuable insights into the resolution of reported crimes."
    },
    {
        "number": 7,
        "slug": "police",
        "id": "crime-type-distribution",
        "title": "4. Distribution Analysis of 'Crime type' in the Crime Dataset",
        "overview": "Using the PivotPal Python package, we delve into the crime dataset, which contains over 19 million entries, to understand the distribution of different crime types.",
        "explanation": "Kaggle datasets, especially those as extensive as the crime dataset with its 19 million records, offer a plethora of insights. In this section, we'll focus on the 'Crime type' column to understand the most prevalent types of reported crimes.",
        "codeContent": "pp.distribution(crime_data, 'Crime type')",
        "tableData": [
            {
                "columnName": "Crime type",
                "data": ["Violence and sexual offences", "Anti-social behaviour", "Public order", "Criminal damage and arson", "Other theft", "Vehicle crime", "Shoplifting", "Burglary", "Drugs", "Other crime", "Theft from the person", "Bicycle theft", "Robbery", "Possession of weapons"]
            },
            {
                "columnName": "Count",
                "data": ["6,480,661", "3,886,040", "1,577,873", "1,525,290", "1,318,322", "1,086,004", "901,923", "776,869", "542,978", "332,155", "268,202", "227,533", "200,031", "146,111"]
            },
            {
                "columnName": "%",
                "data": ["33.63", "20.17", "8.19", "7.92", "6.84", "5.64", "4.68", "4.03", "2.82", "1.72", "1.39", "1.18", "1.04", "0.76"]
            }
        ],
        "tableSummary": "The table above highlights the distribution of various crime types in the dataset. 'Violence and sexual offences' is the most common crime type, accounting for 33.63% of the dataset. This is followed by 'Anti-social behaviour' and 'Public order'. The data provides a comprehensive view of the nature of reported crimes."
    },


    // AIRBNB DATA

    {
        "number": 1,
        "slug": "airbnb",
        "id": "overview",
        "title": "1. Dataset Overview",
        "overview": "Provides a general overview of the dataset.",
        "explanation": "This function gives a snapshot of the dataset, including the number of rows, columns, missing values, and more.",
        "codeContent": "pp.overview(airbnb)",
        "tableData": [
            {
                "columnName": "Description",
                "data": ["Total Rows", "Total Columns", "Columns with Missing Values", "Total Duplicate Rows", "Most Frequent Data Type", "Columns with Binary Values", "Columns with Zero Values", "Unique Data Types", "Numeric Columns", "Non-Numeric Columns"]
            },
            {
                "columnName": "Count",
                "data": ["10,019", "22", "4", "13", "object", "0", "10", "3", "13", "9"]
            }
        ],
        "tableSummary": "The table above provides a comprehensive overview of the Airbnb dataset, highlighting key metrics and characteristics."
    },
    {
        "number": 2,
        "slug": "airbnb",
        "id": "types",
        "title": "2. Data Types Distribution",
        "overview": "Analyzes the distribution of data types in the dataset.",
        "explanation": "This function provides a breakdown of the different data types present in the dataset and their distribution.",
        "codeContent": "pp.datatypes(airbnb)",
        "tableData": [
            {
                "columnName": "Data Type",
                "data": ["object", "int64", "float64"]
            },
            {
                "columnName": "Column Count",
                "data": ["8", "4", "4"]
            },
            {
                "columnName": "% Distribution",
                "data": ["50.0", "25.0", "25.0"]
            }
        ],
        "tableSummary": "The table above showcases the distribution of data types in the Airbnb dataset."
    },
    {
        "number": 3,
        "slug": "airbnb",
        "id": "missing",
        "title": "3. Columns with Missing Values",
        "overview": "Identifies columns with missing values in the dataset.",
        "explanation": "This function lists columns that have missing values, along with the count and percentage of missing data.",
        "codeContent": "pp.missing(airbnb)",
        "tableData": [
            {
                "columnName": "Column Name",
                "data": ["price", "estimated_revenue", "name", "host_name"]
            },
            {
                "columnName": "Missing Count",
                "data": ["238", "238", "5", "2"]
            },
            {
                "columnName": "Missing %",
                "data": ["2.0", "2.0", "0.0", "0.0"]
            }
        ],
        "tableSummary": "The table above highlights columns with missing values in the Airbnb dataset."
    },
    {
        "number": 4,
        "slug": "airbnb",
        "id": "zeros",
        "title": "4. Columns with Zero Values",
        "overview": "Identifies columns with zero values in the dataset.",
        "explanation": "This function lists columns that have zero values, along with the count and percentage of zeros.",
        "codeContent": "pp.zeros(airbnb)",
        "tableData": [
            {
                "columnName": "Column Name",
                "data": ["availability_365", "number_of_reviews", "last_review", "reviews_per_month", "rating", "number_of_stays", "5_stars", "occupancy", "estimated_revenue", "price"]
            },
            {
                "columnName": "Zero Count",
                "data": ["3614", "2075", "2075", "2075", "2075", "2075", "2075", "290", "288", "2"]
            },
            {
                "columnName": "Zero %",
                "data": ["36.07", "20.71", "20.71", "20.71", "20.71", "20.71", "20.71", "2.89", "2.87", "0.02"]
            }
        ],
        "tableSummary": "The table above highlights columns with zero values in the Airbnb dataset."
    },
    {
        "number": 5,
        "slug": "airbnb",
        "id": "distribution-roomtype",
        "title": "5. Distribution of `room_type`",
        "overview": "Analyzes the distribution of values for the `room_type` column.",
        "explanation": "This function provides a breakdown of the distribution of room types in the dataset.",
        "codeContent": "pp.distribution(airbnb, 'room_type')",
        "tableData": [
            {
                "columnName": "room_type",
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
        "tableSummary": "The table above showcases the distribution of room types in the Airbnb dataset."
    },
    {
        "number": 6,
        "slug": "airbnb",
        "id": "distribution-burough",
        "title": "6. Distribution of `burough`",
        "overview": "Analyzes the distribution of values for the `burough` column.",
        "explanation": "This function provides a breakdown of the distribution of boroughs in the dataset.",
        "codeContent": "pp.distribution(airbnb, 'burough')",
        "tableData": [
            {
                "columnName": "burough",
                "data": ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"]
            },
            {
                "columnName": "Count",
                "data": ["4449", "4086", "1182", "229", "73"]
            },
            {
                "columnName": "%",
                "data": ["44.41", "40.78", "11.80", "2.29", "0.73"]
            }
        ],
        "tableSummary": "The table above showcases the distribution of boroughs in the Airbnb dataset."
    }
    
    
    
];

const DYNAMIC_INTRODUCTION_DATA = [
   
    {
        "number": 1,
        "slug": "motivation",
        "topic": "Airbnb Data Exploration",
        "overview": `In the dynamic world of machine learning and data science, efficiency and clarity are paramount. As a machine learning student, I found myself repeatedly writing code snippets for data exploration and preprocessing. While these snippets were functional, they often produced outputs that were messy and hard to interpret, especially when shared with peers or presented to instructors. This realization led to the birth of PivotPal, a package designed to streamline the data exploration process and produce clear, structured outputs.`,
        "overview2": `In the dynamic world of machine learning and data science, efficiency and clarity are paramount. As a machine learning student, I found myself repeatedly writing code snippets for data exploration and preprocessing. While these snippets were functional, they often produced outputs that were messy and hard to interpret, especially when shared with peers or presented to instructors. This realization led to the birth of PivotPal, a package designed to streamline the data exploration process and produce clear, structured outputs.`,
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

