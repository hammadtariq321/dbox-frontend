import React from 'react'
import { LuPlus } from "react-icons/lu";
import PageHeading from './page-heading';
const Heading = ({ title }) => {
    return (
        <div className="flex justify-between items-center">
            <PageHeading title={title} />
            <button className="bg-green-600 text-white px-4 py-3 rounded shadow flex items-center text-xs hover:bg-green-700"><LuPlus size={15} className="mr-2" /> Add New Box</button>
        </div>
    )
}

export default Heading