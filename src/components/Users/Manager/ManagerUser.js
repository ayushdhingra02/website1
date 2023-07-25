import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './ManagerJob.css'
const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"
const ManagerUser = () => {
    return (
            <>
            <div className="courses-nav">
                <Link to="/manager/user/" >Manage User</Link>
                <Link to="/manager/user/add">Add new User</Link>
            </div>
            <Outlet />
            </>
        
    )
}
 
export default ManagerUser