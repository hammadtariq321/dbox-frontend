export const worker_columns = [
  {
    name: "First Name",
    selector: (row) => row.first_name,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.last_name,
    sortable: true,
  },
  {
    name: "Phone No",
    selector: (row) => row.phone_number,
    sortable: true,
  }
];
