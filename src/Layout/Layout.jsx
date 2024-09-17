import  { useState } from 'react';
import Navbar from '../Components/Navbar';

const Layout = () => {
    // State to control the visibility of the two sidebars and the main content
    const [sidebarStep, setSidebarStep] = useState(0);
    const [firstSidebarContent, setFirstSidebarContent] = useState('');
    const [secondSidebarContent, setSecondSidebarContent] = useState('');

    // Function to handle the toggling of sidebars
    const toggleSidebar = () => {
        setSidebarStep((prevStep) => (prevStep + 1) % 4); // Loop through 4 states
    };

    // Function to handle click on first sidebar content
    const handleFirstSidebarClick = (content) => {
        setFirstSidebarContent(content);
        setSidebarStep(2); // Open the second sidebar
    };

    // Function to handle click on second sidebar content
    const handleSecondSidebarClick = (content) => {
        setSecondSidebarContent(content);
    };

    return (
        <div className="">
            {/* Top Navbar */}
            <div className="">
                {/* <div className="text-xl">Navbar</div> */}
                <Navbar toggleSidebar={toggleSidebar}></Navbar>
                
            </div>

            <div className='flex h-screen'>
                {/* Sidebar 1 */}
            
                <div
                    className={`bg-gray-200 w-64 p-4 transition-transform duration-300 ${sidebarStep === 0 || sidebarStep >= 3 ? '-translate-x-full' : 'translate-x-0'}`}
                >

                    <h2 className="text-lg font-semibold mb-4">First Sidebar</h2>
                    <ul>
                        <li
                            className="cursor-pointer hover:bg-gray-300 p-2"
                            onClick={() => handleFirstSidebarClick('Content 1')}
                        >
                            Content 1
                        </li>
                        <li
                            className="cursor-pointer hover:bg-gray-300 p-2"
                            onClick={() => handleFirstSidebarClick('Content 2')}
                        >
                            Content 2
                        </li>
                    </ul>
                </div>

                {/* Sidebar 2 */}
                <div
                    className={`bg-gray-300 w-64 p-4 transition-transform duration-300 ${sidebarStep === 2 ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <h2 className="text-lg font-semibold mb-4">Second Sidebar</h2>
                    <ul>
                        {firstSidebarContent ? (
                            <li
                                className="cursor-pointer hover:bg-gray-400 p-2"
                                onClick={() => handleSecondSidebarClick(firstSidebarContent)}
                            >
                                Open {firstSidebarContent} in Main Outlet
                            </li>
                        ) : (
                            <li>No Content Selected</li>
                        )}
                    </ul>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow bg-white p-4">
                    <h1 className="text-2xl font-bold">Main Content Area</h1>
                    {secondSidebarContent && (
                        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                            <p className="text-lg">Showing: {secondSidebarContent}</p>
                        </div>
                    )}
                </div>
            </div>

          
        </div>
    );
};

export default Layout;