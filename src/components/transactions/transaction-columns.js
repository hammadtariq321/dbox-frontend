export const transaction_columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Gender",
    selector: "gender",
    sortable: true,
    cell: (row) => row.gender || "N/A",
  },
  {
    name: "Mobile Number",
    selector: "mobile_number",
    sortable: true, // Enable sorting if needed
  },
  {
    name: "City",
    selector: "city",
    sortable: true,
  },
  {
    name: "Amount",
    selector: "amount",
    sortable: true,
  },

  {
    name: "Donation Type",
    selector: "donation_type",
    sortable: true,
  },
  {
    name: "Amount",
    selector: "amount",
    sortable: true,
    cell: (row) => `$${row.amount}`, // Assuming currency format
  },
  {
    name: "User ID",
    selector: "user",
    sortable: true,
  },
  {
    name: "Box ID",
    selector: "box",
    sortable: true,
  },
];
