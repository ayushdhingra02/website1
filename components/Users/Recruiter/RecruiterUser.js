import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './AdminJob.css'
const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"
const RecruiterUser = () => {
    return (
            <>
            <div className="courses-nav">
                <Link to="/recruiter/user/" >Manage User</Link>
                <Link to="/recruiter/user/add">Add new User</Link>
            </div>
            <Outlet />
            </>
        
    )
}
 
export default RecruiterUser