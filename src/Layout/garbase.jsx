import { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { HiUserGroup } from 'react-icons/hi';
import { CgSmartHomeCooker } from 'react-icons/cg';
import { RiPagesLine } from 'react-icons/ri';
import { PiBagSimpleThin, PiShoppingBagOpenBold } from 'react-icons/pi';

const Layout = () => {
    // State to control sidebar visibility
    const [clickCount, setClickCount] = useState(0);
    const [sidebar1Visible, setSidebar1Visible] = useState(true);
    const [sidebar2Visible, setSidebar2Visible] = useState(true);
    const [firstSidebarContent, setFirstSidebarContent] = useState('');
    const [secondSidebarContent, setSecondSidebarContent] = useState('');

    const toggleSidebar = () => {
        const newClickCount = clickCount + 1;
        setClickCount(newClickCount);

        // Logic for closing and opening sidebars based on click count
        switch (newClickCount) {
            case 1:
                // First click: Close the second sidebar
                setSidebar2Visible(false);
                break;
            case 2:
                // Second click: Close the first sidebar
                setSidebar1Visible(false);
                break;
            case 3:
                // Third click: Open the first sidebar
                setSidebar1Visible(true);
                break;
            case 4:
                // Fourth click: Open the second sidebar
                setSidebar2Visible(true);
                // Reset the click count after the 4th click to loop the cycle
                setClickCount(0);
                break;
            default:
                break;
        }
    };

    // Function to handle click on first sidebar content
    const handleFirstSidebarClick = (content) => {
        setFirstSidebarContent(content);
        setSidebar2Visible(true); // Open the second sidebar when content is clicked
    };

    // Function to handle click on second sidebar content
    const handleSecondSidebarClick = (content) => {
        setSecondSidebarContent(content);
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Top Navbar */}
            <Navbar toggleSidebar={toggleSidebar} />

            <div className="flex h-screen">
                {/* Sidebar 1 */}
                <div
                    className={`bg-white shadow-xl border-r z-30 w-[140px]  transition-transform duration-300 ${sidebar1Visible ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >

                    <ul>
                        <li
                            className="h-[110px] flex flex-col justify-center items-center "
                            onClick={() => handleFirstSidebarClick('Content 1')}
                        >
                            <CgSmartHomeCooker className="w-[25px] font-thin h-[25px] mx-auto" />
                            <p className='font-normal'>Dashboards</p>
                        </li>
                        <hr />
                        <li
                            className="h-[110px] flex flex-col justify-center items-center "
                            onClick={() => handleFirstSidebarClick('Content 2')}
                        >
                            <RiPagesLine className="w-[25px] font-thin h-[25px] mx-auto" />
                            <p className='font-normal'>Pages</p>
                        </li>
                        <hr />
                    </ul>

                </div>

                {/* Sidebar 2 */}
                <div
                    className={`bg-white w-[220px] z-20 shadow-2xl rounded-r-md p-4 transition-transform duration-500 ${sidebar2Visible ? 'translate-x-0' : '-translate-x-[600px]'
                        }`}
                >

                    <ul>
                        {firstSidebarContent ? (
                            <li
                                className="cursor-pointer hover:bg-gray-400 p-2"
                                onClick={() => handleSecondSidebarClick(firstSidebarContent)}
                            >
                                import {useState} from 'react';
                                import Navbar from '../Components/Navbar';
                                import {Link} from 'react-router-dom';
                                import {HiUserGroup} from 'react-icons/hi';
                                import {CgSmartHomeCooker} from 'react-icons/cg';
                                import {RiPagesLine} from 'react-icons/ri';

const Layout = () => {
    // State to control sidebar visibility
    const [clickCount, setClickCount] = useState(0);
                                const [sidebar1Visible, setSidebar1Visible] = useState(true);
                                const [sidebar2Visible, setSidebar2Visible] = useState(true);
                                const [firstSidebarContent, setFirstSidebarContent] = useState('');
                                const [secondSidebarContent, setSecondSidebarContent] = useState('');

    const toggleSidebar = () => {
        const newClickCount = clickCount + 1;
                                setClickCount(newClickCount);

                                // Logic for closing and opening sidebars based on click count
                                switch (newClickCount) {
            case 1:
                                // First click: Close the second sidebar
                                setSidebar2Visible(false);
                                break;
                                case 2:
                                // Second click: Close the first sidebar
                                setSidebar1Visible(false);
                                break;
                                case 3:
                                // Third click: Open the first sidebar
                                setSidebar1Visible(true);
                                break;
                                case 4:
                                // Fourth click: Open the second sidebar
                                setSidebar2Visible(true);
                                // Reset the click count after the 4th click to loop the cycle
                                setClickCount(0);
                                break;
                                default:
                                break;
        }
    };

    // Function to handle click on first sidebar content
    const handleFirstSidebarClick = (content) => {
                                    setFirstSidebarContent(content);
                                setSidebar2Visible(true); // Open the second sidebar when content is clicked
    };

    // Function to handle click on second sidebar content
    const handleSecondSidebarClick = (content) => {
                                    setSecondSidebarContent(content);
    };

                                return (
                                <div className="flex flex-col h-screen">
                                    {/* Top Navbar */}
                                    <Navbar toggleSidebar={toggleSidebar} />

                                    <div className="flex h-full">
                                        {/* Sidebar 1 */}
                                        <div
                                            className={`bg-white shadow-xl border-r z-30 w-[140px]  transition-transform duration-300 ${sidebar1Visible ? 'translate-x-0' : '-translate-x-full'
                                                }`}
                                        >

                                            <ul>
                                                <li
                                                    className="h-[110px] flex flex-col justify-center items-center "
                                                    onClick={() => handleFirstSidebarClick('Content 1')}
                                                >
                                                    <CgSmartHomeCooker className="w-[25px] font-thin h-[25px] mx-auto" />
                                                    <p className='font-normal'>Dashboards</p>
                                                </li>
                                                <hr />
                                                <li
                                                    className="h-[110px] flex flex-col justify-center items-center "
                                                    onClick={() => handleFirstSidebarClick('Content 2')}
                                                >
                                                    <RiPagesLine className="w-[25px] font-thin h-[25px] mx-auto" />
                                                    <p className='font-normal'>Pages</p>
                                                </li>
                                                <hr />
                                            </ul>

                                            <ul className="overflow-hidden transition-all duration-500 ease-in-out font_sans">
                                                {/* <li className="border-b py-4">
                            <Link  className={`h-[90px] flex flex-col justify-center items-center text-[13px] font-normal ${selected === '/default' ? 'text-[#145388] border-l-4 border-[#145388]' : 'text-black border-l-4 border-white'}`} onClick={() => handleClick('/default')}>
                                <span className="w-[25px] h-[25px] mx-auto">
                                    <HiUserGroup className="w-full h-full" />
                                </span>
                                <span className="text-[13px]"></span>
                            </Link>
                        </li> */}



                                            </ul>
                                        </div>

                                        {/* Sidebar 2 */}
                                        <div
                                            className={`bg-white w-[220px] z-20 shadow-2xl rounded-r-md p-4 transition-transform duration-500 ${sidebar2Visible ? 'translate-x-0' : '-translate-x-[600px]'
                                                }`}
                                        >

                                            <ul>
                                                {firstSidebarContent ? (
                                                    <li
                                                        className="cursor-pointer hover:bg-gray-400 p-2"
                                                        onClick={() => handleSecondSidebarClick(firstSidebarContent)}
                                                    >
                                                        Open {firstSidebarContent} in Main Outlet
                                                    </li>
                                                ) : (
                                                    <li
                                                        className="cursor-pointer hover:bg-gray-400 p-2"
                                                        onClick={() => handleSecondSidebarClick(firstSidebarContent)}
                                                    >
                                                        Open {firstSidebarContent} in Main Outlet
                                                    </li>
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

                        ) : (
                            <li
                                className="cursor-pointer hover:bg-gray-400 p-2"
                                onClick={() => handleSecondSidebarClick(firstSidebarContent)}
                            >
                                Open {firstSidebarContent} in Main Outlet
                            </li>
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
