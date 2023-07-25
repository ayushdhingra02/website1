import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './AdminJob.css'
const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"
const AdminUser = () => {
    return (
            <>
            <div className="courses-nav">
                <Link to="/admin/user/" >Manage User</Link>
                <Link to="/admin/user/add">Add new User</Link>
            </div>
            <Outlet />
            </>
        
    )
}
 
export default AdminUser