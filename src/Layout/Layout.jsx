/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Components/Dashboard';
import { BasicContext } from '../ContextApis/BasicProvider';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const { sidebarOpen } = useContext(BasicContext);
    return (
        <div>
            <div className="flex flex-col h-screen">
                <Topbar />
                <div className="flex gap-1 ">
                    <div
                        className={` ${sidebarOpen ? "w-14" : "w-2/12"
                            } hidden lg:flex duration-300`}
                    >
                        <Sidebar />
                    </div>
                    <div className=" flex-1">
                        <Outlet />
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Layout;