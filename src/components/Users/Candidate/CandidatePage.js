import React from 'react'
import CandidateSidebar from './CandidateSidebar';
// import Sidebar from './siderbar';
import { Outlet } from 'react-router-dom';
// import { CImage } from '@coreui/react'

const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"
function CandidatePage() {
    // const box = document.getElementById('sidebar');
    // console.log(box.clientWidth);

  return (
    <div>
      {/* <AdminDashboard /> */}
      <CandidateSidebar/>
      {/* <Outlet */}
      {/* <CImage fluid src="/images/react.jpg" /> */}
    </div>
  )
}

export default CandidatePage