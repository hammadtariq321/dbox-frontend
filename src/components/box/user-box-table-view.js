'use client'
import DataTableView from '../data-table-view'
import { user_box_columns } from './user-box-columns'

const UserBoxTableView = ({ data = [] }) => {
    return (
        <DataTableView columns={user_box_columns} data={data} className="mt-2" />
    )
}

export default UserBoxTableView