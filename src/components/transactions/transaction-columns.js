export const transaction_columns = [
  {
    name: "Name",
    selector: "name",
    cell: (row) => row?.name || "",
  },
  {
    name: "Mobile Number",
    selector: "mobile_number", // Enable sorting if needed
    cell: (row) => row?.mobile_number || "",
  },
  {
    name: "Province",
    selector: "province",
    cell: (row) => row?.province || "", // Display "N/A" if the value is null
  },
  {
    name: "City",
    selector: "city",
    cell: (row) => row?.city || "",
  },
  {
    name: "Area",
    selector: "area",
    cell: (row) => row?.area || "",
  },
  {
    name: "Donation Type",
    selector: "donation_type",
    cell: (row) => row?.donation_type || "",
  },
  {
    name: "Amount",
    selector: "amount",
    cell: (row) => `Rs. ${row?.amount}`, // Assuming currency format
  }
];
