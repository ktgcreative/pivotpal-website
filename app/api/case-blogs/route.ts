const DYNAMIC_CODEBOX_DATA = [

    
           //////////////////
    // -- // TITANIC DATA // -- //
         //////////////////


    // MISSING VALUES
    {
        "slug": "titanic",
        "id": "overview",
        "title": "1. Overview Analysis of the Titanic Dataset using PivotPal",
        "overview": "Utilizing the `pp.overview` function from the PivotPal Python package, we've extracted a comprehensive summary of the Titanic dataset.",
        "explanation": "The Titanic dataset, a classic in the data science community, contains various features describing the passengers aboard the ill-fated ship. With `pp.overview`, we can quickly gain insights into the dataset's structure, missing values, data types, and more. This high-level overview is crucial for understanding the data before diving into deeper analyses.",
        "codeContent": `
# Using pp.overview to summarise the Titanic dataset
pp.overview(titanic_data)
            `,
        "tableData": [
            {
                "columnName": "Description",
                "data": ["Total Rows", "Total Columns", "Columns with Missing Values", "Total Duplicate Rows", "Most Frequent Data Type", "Columns with Binary Values", "Columns with Zero Values", "Unique Data Types", "Numeric Columns", "Non-Numeric Columns"]
            },
            {
                "columnName": "Count",
                "data": ["891", "12", "3", "0", "int64", "2", "4", "3", "7", "5"]
            }
        ],
        "tableSummary": "The table above provides a snapshot of the Titanic dataset's structure and characteristics. With 891 rows and 12 columns, the dataset offers a mix of numeric and non-numeric data. Notably, there are three columns with missing values, which will require attention during the data preprocessing phase. The `pp.overview` function proves invaluable for such quick and informative explorations."
    },
    
    // MISSING VALUES
    {
        "number": 2,
        "slug": "titanic",
        "id": "missing-values",
        "title": "2. Exploring Missing Data in the Titanic Dataset",
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
    // UNIQUE VALUES
    {
        "number": 3,
        "slug": "titanic",
        "id": "unique-values",
        "title": "3. Exploring Unique Data in the Titanic Dataset",
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
    // FEATURE ENGINEERING
    {
        "slug": "titanic",
        "id": "age-distribution",
        "title": "4. Distribution Analysis of 'Age' in the Titanic Dataset using PivotPal",
        "overview": "Using the PivotPal Python package, we've analyzed the age distribution of passengers in the Titanic dataset.",
        "explanation": "The age of passengers aboard the Titanic varies widely, from infants to the elderly. Understanding this distribution can provide insights into the demographics of the ship's passengers and potentially reveal patterns related to survival rates based on age groups.",
        "codeContent": `
# Using PivotPal to get 'Age' feature  and it's distribution
age_distribution = pp.distribution(titanic_data, 'Age')
            `,
        "tableData": [
            {
                "columnName": "Age",
                "data": ["24.00", "22.00", "18.00", "19.00", "28.00", "...", "66.00", "0.67", "0.42", "34.50", "74.00"]
            },
            {
                "columnName": "Count",
                "data": ["30", "27", "26", "25", "25", "...", "1", "1", "1", "1", "1"]
            },
            {
                "columnName": "%",
                "data": ["3.37", "3.03", "2.92", "2.81", "2.81", "...", "0.11", "0.11", "0.11", "0.11", "0.11"]
            }
        ],
        "tableSummary": "The table above showcases the age distribution of passengers aboard the Titanic. The most common age is 24, with 30 passengers (3.37% of the dataset). The dataset contains a wide range of ages, from infants (e.g., 0.42 years) to elderly passengers (e.g., 74 years). This distribution helps us understand the diverse age groups present on the ship. Now it's time to feature engineer..."
    },
    // FEATURE ENGINEERING TITLE
    {
        "slug": "titanic",
        "id": "age-engineering",
        "title": "5. Feature Engineering: Categorizing 'Age' into 'AgeCategory' in the Titanic Dataset using PivotPal",
        "overview": "By leveraging the `pd.cut` function and the PivotPal Python package, we've engineered a new feature, 'AgeCategory', which categorizes passengers into age groups based on their age.",
        "explanation": "The age of passengers aboard the Titanic spans a wide range. To simplify analyses and derive more meaningful insights, we've categorized the continuous 'Age' values into discrete age groups: 'Child', 'Teenager', 'Young Adult', 'Adult', and 'Senior'. This transformation allows for a more aggregated view of age distributions and can reveal patterns related to survival rates based on age groups.",
        "codeContent": `
# Using pd.cut to categorize 'Age' into 'AgeCategory'
df['AgeCategory'] = pd.cut(df['Age'], bins=[0, 12, 19, 30, 50, 100], labels=['Child', 'Teenager', 'Young Adult', 'Adult', 'Senior'])
            
# Using PivotPal to get a distribution of the newly engineered 'AgeCategory' feature
age_category_distribution = pp.distribution(df, 'AgeCategory')
            `,
        "tableData": [
            {
                "columnName": "AgeCategory",
                "data": ["Young Adult", "Adult", "Teenager", "Child", "Senior"]
            },
            {
                "columnName": "Count",
                "data": ["245", "241", "95", "69", "64"]
            },
            {
                "columnName": "%",
                "data": ["27.50", "27.05", "10.66", "7.74", "7.18"]
            }
        ],
        "tableSummary": "The table above showcases the distribution of age categories among passengers aboard the Titanic. 'Young Adult' and 'Adult' are the most prevalent age categories, accounting for over half of the dataset. This engineered 'AgeCategory' feature simplifies the age data and provides a clearer perspective on the age demographics of the passengers."
    },    
    {
        "slug": "titanic",
        "id": "title-extraction",
        "title": "6. Feature Engineering: Extracting 'Title' from 'Name' in the Titanic Dataset using PivotPal",
        "overview": "Utilizing a custom function and the PivotPal Python package, we've engineered a new feature, 'Title', extracted from the 'Name' column of the Titanic dataset.",
        "explanation": "Names in the Titanic dataset contain titles that can provide insights into the social status, gender, and age group of passengers. By extracting these titles, we can categorize passengers into groups like 'Mr', 'Mrs', 'Master', 'Miss', and 'Other'. This engineered feature can be crucial for understanding patterns related to survival rates based on social status or demographics.",
        "codeContent": `
# Custom function to extract titles from the 'Name' column

# Extract titles using a custom function
def extract_specific_titles(name):

    title = name.split(',')[1].split('.')[0].strip()

    if title in ['Mr', 'Mrs', 'Master', 'Miss']:
        return title
    else:
        return 'Other'

df['Title'] = df['Name'].apply(extract_specific_titles)

# Using PivotPal to get a distribution of the newly engineered 'Title' feature
title_distribution = pp.distribution(df, 'Title')
            `,
        "tableData": [
            {
                "columnName": "Title",
                "data": ["Mr", "Miss", "Mrs", "Master", "Other"]
            },
            {
                "columnName": "Count",
                "data": ["517", "182", "125", "40", "27"]
            },
            {
                "columnName": "%",
                "data": ["58.02", "20.43", "14.03", "4.49", "3.03"]
            }
        ],
        "tableSummary": "The table above showcases the distribution of titles among passengers aboard the Titanic. The most prevalent title is 'Mr', accounting for 58.02% of the dataset. The 'Other' category captures titles that are less common. This engineered 'Title' feature provides a new perspective on the passengers and can be instrumental in further analyses."
    },    

           /////////////////
    // -- // CRIME DATA  // -- //
         /////////////////


    // OVERVIEW
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
    // MISSING CRIME VALUES
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
    // OUTCOME DISTRIBUTION VALUES
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
    // CRIME-TYPE DISTRIBUTION VALUES
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
    // GEOGRAOHICAL DISTRIBUTION VALUES
    {
        "number": 7,
        "slug": "police",
        "id": "feature-engineering",
        "title": "5. Feature Engineering: Mapping 'Reported by' to 'Geographical Region'",
        "overview": "Using the provided mapping of police forces to their respective geographical regions, we've engineered a new feature, 'Geographical_Region', in our crime dataset, which contains over 19 million entries.",
        "explanation": "Datasets often require additional context or categorization to derive meaningful insights. In this section, we've taken the 'Reported by' column, which indicates the police force that reported the crime, and mapped it to a broader 'Geographical_Region'. This allows for a more aggregated view of crime distribution across the UK, facilitating regional comparisons and analyses.",
       "codeContent": `
# Drop Ireland and Wales to focus on English Regions

forces_to_drop = ['Police Service of Northern Ireland', 'Dyfed-Powys Police', 'North Wales Police', 'South Wales Police', 'Gwent Police']

data = data[~data['Reported by'].isin(forces_to_drop)]

geographical_regions = {
    "South West England": [
        "Avon and Somerset Constabulary",
        "Devon & Cornwall Police",
        "Dorset Police",
        "Gloucestershire Constabulary",
        "Wiltshire Police"
    ],
    "South East England": [
        "Hampshire Constabulary",
        "Kent Police",
        "Surrey Police",
        "Sussex Police",
        "Thames Valley Police"
    ],
    "East of England": [
        "Bedfordshire Police",
        "Cambridgeshire Constabulary",
        "Essex Police",
        "Hertfordshire Constabulary",
        "Norfolk Constabulary",
        "Suffolk Constabulary"
    ],
    "London": [
        "Metropolitan Police Service",
        "City of London Police"
    ],
    "West Midlands": [
        "Staffordshire Police",
        "Warwickshire Police",
        "West Mercia Police",
        "West Midlands Police"
    ],
    "East Midlands": [
        "Derbyshire Constabulary",
        "Leicestershire Police",
        "Lincolnshire Police",
        "Northamptonshire Police",
        "Nottinghamshire Police"
    ],
    "North West England": [
        "Cheshire Constabulary",
        "Cumbria Constabulary",
        "Greater Manchester Police",
        "Lancashire Constabulary",
        "Merseyside Police"
    ],
    "North East England": [
        "Cleveland Police",
        "Durham Constabulary",
        "Northumbria Police",
        "North Yorkshire Police"
    ],
    "Yorkshire and the Humber": [
        "Humberside Police",
        "South Yorkshire Police",
        "West Yorkshire Police"
    ],
    "Specialized/Other": [
        "British Transport Police",
    ]
}

# Feature engineering Forces by Geographical Regions

def get_geographical_region(force_name):
    for region, forces in geographical_regions.items():
        if force_name in forces:
            return region
    return None

data['Geographical_Region'] = data['Reported by'].apply(get_geographical_region)


# See Crime Distribution around different Geographical Regions

pp.distribution(data, 'Geographical_Region')
        `,
        "tableData": [
            {
                "columnName": "Geographical Region",
                "data": ["London", "South East England", "West Midlands", "Yorkshire and the Humber", "East of England", "North West England", "East Midlands", "South West England", "North East England", "Specialized/Other"]
            },
            {
                "columnName": "Count",
                "data": ["3,446,252", "2,622,798", "2,013,252", "1,896,734", "1,781,383", "1,621,231", "1,522,387", "1,396,609", "1,342,356", "150,579"]
            },
            {
                "columnName": "%",
                "data": ["19.37", "14.74", "11.31", "10.66", "10.01", "9.11", "8.56", "7.85", "7.54", "0.85"]
            }
        ],
        "tableSummary": "The table above highlights the distribution of crimes across different geographical regions in the UK. 'London' has the highest count, accounting for 19.37% of the dataset. This is followed by 'South East England' and 'West Midlands'. The data provides a comprehensive view of the geographical distribution of reported crimes."
     },

           /////////////////
    // -- // AIRBNB DATA // -- //
         /////////////////

   
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
    "number": 4,
    "slug": "titanic",
    "topic": "Titanic Data Exploration",
    "overview": "This exploration delves deep into the Titanic dataset, a classic in the data science community. The dataset, which contains various features describing the passengers aboard the ill-fated ship, is dissected using the PivotPal Python package. The analysis focuses on understanding the dataset's structure, missing values, unique data points, and the distribution of key features such as age.",
    "overview2": "Beyond the initial exploration, the study also emphasizes feature engineering, a crucial step in data preprocessing. By extracting titles from names and categorizing age into distinct groups, the analysis unveils patterns that can be instrumental in understanding survival rates, demographics, and social statuses of the passengers. Each step in the exploration is meticulously detailed, providing insights and showcasing the capabilities of the PivotPal Python package in handling and analyzing datasets.",
    "steps": [
        {
            "id": "overview",
            "title": "1. Dataset Overview: A snapshot of the Titanic dataset's general attributes, revealing its structure, data types, and characteristics."
        },
        {
            "id": "missing-values",
            "title": "2. Missing Data: A deep dive into the columns with missing values, highlighting the significance of each and potential implications for analysis."
        },
        {
            "id": "unique-values",
            "title": "3. Unique Data Values: A comprehensive look at the unique values present in each column, emphasizing the distribution and diversity of data within the dataset."
        },
        {
            "id": "age-distribution",
            "title": "4. Age Distribution: An in-depth analysis of the age distribution of passengers, revealing the diverse age groups present on the ship."
        },
        {
            "id": "age-engineering",
            "title": "5. Age Category Engineering: The transformation of continuous 'Age' values into discrete age groups, offering a more aggregated view of age distributions."
        },
        {
            "id": "title-extraction",
            "title": "6. Title Extraction: A feature engineering step that extracts titles from names, providing insights into the social status, gender, and age group of passengers."
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

