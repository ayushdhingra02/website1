import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import Box from '@mui/material/Box';
import { NavLink, Outlet } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"
const AdminSidebar = () => {

    const navigate = useNavigate();
    const submit = () => {
        confirmAlert({
          title: 'Logout?',
          message: 'Are you sure you want to logout.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                sessionStorage.clear()
                navigate('/headLogin')
              }
            },
            {
              label: 'No',
              onClick: () => {}
            }
          ]
        })
      };
    // const box = document.getElementById("sidebar");
    // console.log(box.clientWidth);

  return (
    <>
        <Box sx={{ display: 'flex' }}>
            <Box
            component="sidebar"
            sx={{ flexGrow: 1, width: { sm: `calc(25%)` } }}
            >


                <div id='sidebar' style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/admin" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Admin
                    </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/admin/jobs/" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="columns">Active Jobs</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/admin/user" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user_group">Manage Users</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/admin/profile"  activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="logout"  onClick={submit}>Logout</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                        >
                        Sidebar Footer
                    </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
                </div>
            </Box>
            <Box
            component="main"
            sx={{ flexGrow: 1, p: 2, width: { sm: `calc(60%)` } }}
            >
                <Outlet/>
            </Box>
        </Box>
    </>
  );
};

export default AdminSidebar;