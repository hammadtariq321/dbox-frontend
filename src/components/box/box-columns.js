import Image from "next/image";
import Avatar from "@/assets/img/avatar.jpg"

export const box_columns = [
  {
    name: "",
    selector: (row) => row?.image,
    width: '50px',
    // sortable: true,
    cell: (row) => {
      if (row?.image) {
        return <Image src={row?.image} alt=" " className="rounded-full" height={50} width={50} /> || ""
      }
      else {
        return <Image src={Avatar} alt=" " className="rounded-full" height={50} width={50} /> || ""
      }
    },
  },
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
    name: "Province",
    selector: (row) => row.province,
    // sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    // sortable: true,
  },
  {
    name: "Area",
    selector: (row) => row.area,
    // sortable: true,
  },
  {
    name: "Address",
    selector: (row) => row.complete_address,
    // sortable: true,
  },
  {
    name: "Gender",
    selector: (row) => row.gender.charAt(0).toUpperCase() + row.gender.slice(1),
    // sortable: true,
  },
];