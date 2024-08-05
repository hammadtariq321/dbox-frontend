import React from 'react'
import { LuPlus } from "react-icons/lu";
const Heading = () => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl text-gray-700">Donation Box List</h1>
            <button className="bg-green-600 text-white px-5 py-3 rounded shadow flex items-center text-sm hover:bg-green-700"><LuPlus size={20} className="mr-2" /> Add New Box</button>
        </div>
    )
}

export default Heading