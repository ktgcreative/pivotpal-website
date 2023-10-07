const DYNAMIC_CODEBOX_DATA = [
    {
        number: 1,
        slug: "sample-slug-1",
        id: "sample-id-1",
        title: "Sample Title 1",
        overview: "This is a sample overview for post 1.",
        explanation: "Here's a detailed explanation for post 1.",
        codeContent: "pp.distribution(df)",
        tableData: [
            {
                columnName: 'Feature',
                data: ['FoodCourt', 'Spa', 'VRDeck', 'RoomService', 'ShoppingMall']
            },
            {
                columnName: 'Total',
                data: ['3,898,237.0', '2,647,791.0', '2,592,790.0', '1,912,541.0', '1,474,092.0']
            },
            {
                columnName: 'Distribution (%)',
                data: ['31.12', '21.14', '20.70', '15.27', '11.77']
            }
        ],
        tableSummary: "Summary of the table data for post 1."
    },
    {
        number: 2,
        slug: "sample-slug-2",
        id: "sample-id-2",
        title: "Sample Title 2",
        overview: "This is a sample overview for post 2.",
        explanation: "Here's a detailed explanation for post 2.",
        codeContent: "console.log('Hello from post 2!');",
        tableSummary: "Summary of the table data for post 2."
    },
    // ... Add more data as needed
];


import { NextResponse } from "next/server"


export async function GET() {
    return NextResponse.json(DYNAMIC_CODEBOX_DATA)
}
