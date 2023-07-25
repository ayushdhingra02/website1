import React from 'react'
import RecruiterSidebar from './RecruiterSidebar';
// import Sidebar from './siderbar';
import { Outlet } from 'react-router-dom';
// import { CImage } from '@coreui/react'
const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"

function RecruiterPage() {
    // const box = document.getElementById('sidebar');
    // console.log(box.clientWidth);

  return (
    <div>
      {/* <AdminDashboard /> */}
      <RecruiterSidebar/>
      {/* <Outlet */}
      {/* <CImage fluid src="/images/react.jpg" /> */}
    </div>
  )
}

export default RecruiterPage