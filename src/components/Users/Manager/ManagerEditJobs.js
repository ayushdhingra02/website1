
// Filename: Search.js
import React from 'react'
const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"
const ManagerEditJobs = () => {
    return (
        <div className='Search'>
            <h2>You are inside the AdminEditJobs Component</h2>
            <h4>URL: localhost:3000/courses/search</h4>
        </div>
    )
}
 
export default ManagerEditJobs