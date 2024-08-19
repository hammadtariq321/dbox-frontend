export const transaction_columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true,
    cell: (row) => row?.name || "",
  },
  {
    name: "Mobile Number",
    selector: "mobile_number",
    sortable: true, // Enable sorting if needed
    cell: (row) => row?.mobile_number || "",
  },
  {
    name: "Province",
    selector: "province",
    sortable: true,
    cell: (row) => row?.province || "", // Display "N/A" if the value is null
  },
  {
    name: "City",
    selector: "city",
    sortable: true,
    cell: (row) => row?.city || "",
  },
  {
    name: "Area",
    selector: "area",
    sortable: true,
    cell: (row) => row?.area || "",
  },
  {
    name: "Donation Type",
    selector: "donation_type",
    sortable: true,
    cell: (row) => row?.donation_type || "",
  },
  {
    name: "Amount",
    selector: "amount",
    sortable: true,
    cell: (row) => `Rs. ${row?.amount}`, // Assuming currency format
  }
];
