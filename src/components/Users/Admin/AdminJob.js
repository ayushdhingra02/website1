import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './AdminJob.css'
const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"
const AdminJob = () => {
    return (
            <div >

            <div className="courses-nav">
                <Link to="/admin/jobs/" >Get Jobs</Link>
                <Link to="/admin/jobs/addJob">Add new Job</Link>
            </div>
            <div style={{height:'35%'}}>

            <Outlet />

            </div>
            </div>
        
        
    )
}
 
export default AdminJob