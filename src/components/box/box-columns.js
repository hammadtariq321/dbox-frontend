import Image from "next/image";
import Avatar from "@/assets/img/avatar.jpg"

export const box_columns = [
  {
    name: "",
    selector: (row) => row?.image,
    width: '50px',
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
  },
  {
    name: "Mobile Number",
    selector: (row) => row.mobile_number,
  },
  {
    name: "Province",
    selector: (row) => row.province,
  },
  {
    name: "City",
    selector: (row) => row.city,
  },
  {
    name: "Area",
    selector: (row) => row.area,
  },
  {
    name: "Address",
    selector: (row) => row.complete_address,
  },
  {
    name: "Gender",
    selector: (row) => row.gender.charAt(0).toUpperCase() + row.gender.slice(1),
  },
];