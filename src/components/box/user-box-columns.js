export const user_box_columns = [
    {
        name: "Name",
        selector: (row) => row.name,
        // sortable: true,
    },
    {
        name: "Mobile Number",
        selector: (row) => row.mobile_number,
        // sortable: true,
    },
    {
        name: "Donation Type",
        selector: (row) => row?.donation_type,
        // sortable: true,
    },
    {
        name: "Amount",
        selector: (row) => row?.amount,
        // sortable: true,
    }
]