/* eslint-disable no-unused-vars */
import React from 'react';
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Components/Dashboard';

const Layout = () => {
    return (
        <div>
            <div className="flex flex-col h-screen">
                <Topbar />
                <div className="flex flex-row">
                    <div className='w-[20%]'>
                        <Sidebar />
                    </div>
                    <div className='w-[80%]'>
                        <Dashboard />
                    </div>
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Layout;