
import { getBoxById, getUserBox } from '@/actions/box-actions';
import UserBoxTableView from '@/components/box/user-box-table-view';
import PageHeading from '@/components/page-heading';
import Link from 'next/link';
import React from 'react'
import { LuArrowLeftRight } from 'react-icons/lu';

const BoxView = async ({ params }) => {
    const { id } = params;
    const boxDetail = await getBoxById(id);
    const userBoxDetail = await getUserBox(id);
    return (
        <>
            {/* <PageHeading title="Box Detail" /> */}
            <div className="flex justify-between items-center">
                <PageHeading title="Box Detail" />
                <Link
                    href="/box/add"
                    className="bg-primary text-white px-4 py-3 rounded shadow flex items-center text-xs hover:bg-primary-hover"
                >
                    <LuArrowLeftRight size={15} className="mr-2" /> Transfer Box
                </Link>
            </div>
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
                        <span className="text-gray-700 text-md font-semibold">{boxDetail?.gender?.charAt(0).toUpperCase() + boxDetail?.gender?.slice(1)}</span>
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

            <h1 className='mt-5 font-bold text-xl'>Transactions</h1>
            <UserBoxTableView data={userBoxDetail} />

        </>
    )
}

export default BoxView