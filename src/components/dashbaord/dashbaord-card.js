import React from 'react'

const DashboardCard = ({ data, icon, text }) => {
    return (
        <div className=" p-5 w-full rounded border hover:shadow cursor-pointer">
            <div className="bg-gray-100 h-[50px] w-[50px] flex items-center justify-center rounded-full">
                {icon}
            </div>
            <p className="font-bold text-xl mt-5 text-gray-700">Rs {data}</p>
            <p className="text-xs text-gray-500">{text}</p>
        </div>
    )
}

export default DashboardCard