const DYNAMIC_CODEBOX_DATA = [

    [
        
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
