export const user_box_columns = [
    {
        name: "Name",
        selector: (row) => row.name,
    },
    {
        name: "Mobile Number",
        selector: (row) => row.mobile_number,
    },
    {
        name: "Donation Type",
        selector: (row) => row?.donation_type,
    },
    {
        name: "Amount",
        selector: (row) => row?.amount,
    }
]