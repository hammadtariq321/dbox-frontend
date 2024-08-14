import { getBoxById } from '@/actions/box-action';
import PageHeading from '@/components/page-heading';
import React from 'react'

const BoxView = async ({ params }) => {
    const { id } = params;
    const boxDetail = await getBoxById(id);
    return (
        <>
            <PageHeading title="Box Detail" />
            <div className='mt-5 flex flex-row justify-between gap-3'>
                <div className='w-full'>
                    <div className="flex flex-col bg-gray-50 border rounded p-3 my-3">
                        <label className="text-gray-700 text-xs">Full Name:</label>
                        <span className="text-gray-700 text-md font-semibold">{boxDetail?.name}</span>
                    </div>
                    <div className="flex flex-col bg-gray-50 border rounded p-3 my-3">
                        <label className="text-gray-700 text-xs">Mobile Number:</label>
                        <span className="text-gray-700 text-md font-semibold">{boxDetail?.mobile_number}</span>
                    </div>
                    <div className="flex flex-col bg-gray-50 border rounded p-3 my-3">
                        <label className="text-gray-700 text-xs">Status:</label>
                        <span className="text-gray-700 text-md font-semibold">{boxDetail?.status}</span>
                    </div>
                    <div className="flex flex-col bg-gray-50 border rounded p-3 my-3">
                        <label className="text-gray-700 text-xs">Province:</label>
                        <span className="text-gray-700 text-md font-semibold">{boxDetail?.province}</span>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="flex flex-col bg-gray-50 border rounded p-3 my-3">
                        <label className="text-gray-700 text-xs">Gender:</label>
                        <span className="text-gray-700 text-md font-semibold">{boxDetail?.gender}</span>
                    </div>
                    <div className="flex flex-col bg-gray-50 border rounded p-3 my-3">
                        <label className="text-gray-700 text-xs">Complete Address:</label>
                        <span className="text-gray-700 text-md font-semibold">{boxDetail?.complete_address}</span>
                    </div>
                    <div className="flex flex-col bg-gray-50 border rounded p-3 my-3">
                        <label className="text-gray-700 text-xs">City:</label>
                        <span className="text-gray-700 text-md font-semibold">{boxDetail?.city}</span>
                    </div>
                    <div className="flex flex-col bg-gray-50 border rounded p-3 my-3">
                        <label className="text-gray-700 text-xs">Area:</label>
                        <span className="text-gray-700 text-md font-semibold">{boxDetail?.area}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxView