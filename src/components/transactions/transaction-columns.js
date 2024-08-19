export const transaction_columns = [
  // {
  //   name: "Name",
  //   selector: "name",
  //   sortable: true,
  //   cell: (row) => row.name || "N/A",
  // },
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
    name: "Province",
    selector: "province",
    sortable: true,
    cell: (row) => row.province || "N/A", // Display "N/A" if the value is null
  },
  {
    name: "City",
    selector: "city",
    sortable: true,
  },
  {
    name: "Area",
    selector: "area",
    sortable: true,
    cell: (row) => row.area || "N/A",
  },
  {
    name: "Complete Address",
    selector: "complete_address",
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
