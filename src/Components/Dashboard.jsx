// Dashboard.js

import { Outlet } from "react-router-dom";


function Dashboard() {
    return (
        <div className="dashboard-content">
           <Outlet></Outlet>
        </div>
    );
}

export default Dashboard;
