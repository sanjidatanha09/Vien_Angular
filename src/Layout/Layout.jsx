import { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import { PiBagSimpleThin } from 'react-icons/pi';
import { CgSmartHomeCooker } from 'react-icons/cg';
import { RiPagesLine } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';

const Layout = () => {
    const navigate = useNavigate();

    // State to control sidebar visibility
    const [clickCount, setClickCount] = useState(0);
    const [clickCount2, setClickCount2] = useState(0);
    const [sidebar1Visible, setSidebar1Visible] = useState(false); // Initially hidden on small screens
    const [sidebar2Visible, setSidebar2Visible] = useState(false); // Initially hidden on small screens

    // State to manage content for both sidebars
    const [firstSidebarContent, setFirstSidebarContent] = useState('Content 1');
    const [secondSidebarContent, setSecondSidebarContent] = useState([]);
    const [selectedItem, setSelectedItem] = useState('Dashboards'); // Selected item for sidebar 1
    const [selectedSecondItem, setSelectedSecondItem] = useState(null); // Selected item for sidebar 2
    const sidebar1Ref = useRef(null); // Ref for Sidebar 1
    const sidebar2Ref = useRef(null); // Ref for Sidebar 2
    const containerRef = useRef(null);
    // Detect screen size and set initial sidebar visibility
    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia('(min-width: 1024px)').matches) {
                // Large screens (>= 1024px)
                setSidebar1Visible(true);
                setSidebar2Visible(true);
            } else {
                // Small screens (< 1024px)
                setSidebar1Visible(false);
                setSidebar2Visible(false);
            }
        };

        // Call handleResize on component mount
        handleResize();

        // Add event listener to monitor window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Update second sidebar content based on first sidebar selection
    useEffect(() => {
        if (firstSidebarContent === 'Content 1') {
            setSecondSidebarContent([
                { id: 1, name: 'Default', icon: PiBagSimpleThin },
                { id: 2, name: 'Analytics', icon: PiBagSimpleThin },
                { id: 3, name: 'Ecommerce', icon: PiBagSimpleThin },
                { id: 4, name: 'Content', icon: PiBagSimpleThin }
            ]);
            setSelectedSecondItem(1); // Set default selected item for second sidebar
        } else if (firstSidebarContent === 'Content 2') {
            setSecondSidebarContent([
                { id: 5, name: 'Data List', icon: PiBagSimpleThin },
                { id: 6, name: 'Thumb List', icon: PiBagSimpleThin },
            ]);
            setSelectedSecondItem(5); // Set default selected item for second sidebar
        } else if (firstSidebarContent === 'Content 3') {
            setSecondSidebarContent([
                { id: 7, name: 'To do List', icon: PiBagSimpleThin },
                { id: 8, name: 'Survey', icon: PiBagSimpleThin },
                { id: 9, name: 'Chat', icon: PiBagSimpleThin },
            ]);
            setSelectedSecondItem(7); // Set default selected item for second sidebar
        } else {
            setSecondSidebarContent([]);
            setSelectedSecondItem(null); // Reset if no content
        }
    }, [firstSidebarContent]);





    const toggleSidebar = () => {
        const newClickCount = clickCount + 1;
        setClickCount(newClickCount);

        switch (newClickCount) {
            case 1:
                setSidebar2Visible(false);
                break;
            case 2:
                setSidebar1Visible(false);
                break;
            case 3:
                setSidebar1Visible(true);
                break;
            case 4:
                setSidebar2Visible(true);
                setClickCount(0);
                break;
            default:
                break;
        }
    };

    const toggleSidebar2 = () => {
        console.log('yes clic')
        const newClickCount2 = clickCount2 + 1;
        setClickCount2(newClickCount2);

        switch (newClickCount2) {
            case 1:
                setSidebar1Visible(true);
                setSidebar2Visible(false);
                break;
            case 2:
                setSidebar2Visible(false);
                setSidebar1Visible(false);
                setClickCount2(0);
                break;
            default:
                break;
        }
    };

   const handleClickOutside = (event) => {
     if (window.matchMedia("(min-width: 1024px)").matches) return;

     if (
       sidebar1Ref.current &&
       !sidebar1Ref.current.contains(event.target) &&
       sidebar2Ref.current &&
       !sidebar2Ref.current.contains(event.target)
     ) {
       setSidebar1Visible(false);
       setSidebar2Visible(false);
     }
   };

   useEffect(() => {
     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

    // Handle first sidebar content click
    const handleFirstSidebarClick = (content, item) => {
        setFirstSidebarContent(content);
        setSelectedItem(item); // Set the clicked item as selected
        setSidebar2Visible(true);
    };

    // Handle second sidebar content click
    const handleSecondSidebarClick = (item) => {
        setSelectedSecondItem(item.id); // Set selected item for sidebar 2

        // Navigate based on selected item
        switch (item.name) {
            case 'Default':
                navigate('/menu');
                break;
            case 'Analytics':
                navigate('/analytics');
                break;
            case 'Ecommerce':
                navigate('/ecommerce');
                break;
            case 'Content':
                navigate('/content');
                break;
            default:
                navigate('/');
        }
    };

    return (
        <div className="flex flex-col bg-body_color">
            {/* Top Navbar */}
            <div className='hidden lg:flex'>
                <Navbar toggleSidebar={toggleSidebar} />
            </div>
            <div className='lg:hidden'>
                <Navbar2 toggleSidebar2={toggleSidebar2} />
            </div>


            <div className="flex">
                {/* Sidebars for large screens */}
                <div className="min-h-screen hidden lg:flex mt-m_100px">
                    {/* Sidebar 1 */}
                    <div
                        className={`bg-white transition-all z-20 duration-300 ${sidebar1Visible ? 'w-[130px] border-r' : 'w-0 overflow-hidden'}`}
                    >
                        <ul className='bg-white'>
                            <li
                                className={`h-[90px] flex flex-col justify-center items-center cursor-pointer ${selectedItem === 'Dashboards' ? 'text-blue-500 border-l-4 my-m_16px border-blue-500' : 'border-l-4 my-m_16px border-white'}`}
                                onClick={() => handleFirstSidebarClick('Content 1', 'Dashboards')}
                            >
                                <CgSmartHomeCooker className="w-[32px] font-thin h-[32px] mx-auto" />
                                <p className="font-normal text-text_standard">Dashboards</p>
                            </li>
                            <hr />
                            <li
                                className={`h-[90px] flex flex-col justify-center items-center cursor-pointer ${selectedItem === 'Pages' ? 'text-blue-500 border-l-4 my-m_16px border-blue-500' : 'border-l-4 my-m_16px border-white'}`}
                                onClick={() => handleFirstSidebarClick('Content 2', 'Pages')}
                            >
                                <RiPagesLine className="w-[32px] font-thin h-[32px] mx-auto" />
                                <p className="font-normal text-text_standard">Pages</p>
                            </li>
                            <hr />
                            <li
                                className={`h-[90px] flex flex-col justify-center items-center cursor-pointer ${selectedItem === 'Applications' ? 'text-blue-500 border-l-4 my-m_16px border-blue-500' : 'border-l-4 my-m_16px border-white'}`}
                                onClick={() => handleFirstSidebarClick('Content 3', 'Applications')}
                            >
                                <HiUserGroup className="w-[32px] font-thin h-[32px] mx-auto" />
                                <p className="font-normal text-text_standard">Applications</p>
                            </li>
                            <hr />-+
                            
                        </ul>
                    </div>

                    {/* Sidebar 2 */}
                    <div
                        className={`bg-white transition-all duration-500 ${sidebar2Visible ? 'w-[230px] p-p_16px border-r shadow-2xl rounded-r-2xl' : 'w-0 p-0 border-none overflow-hidden'}`}
                    >
                        <ul>
                            {secondSidebarContent.map((item) => (
                                <li
                                    key={item.id}
                                    className={`cursor-pointer p-p_8px flex items-center gap-1 ${selectedSecondItem === item.id ? 'text-blue-500' : ''}`}
                                    onClick={() => handleSecondSidebarClick(item)}
                                >
                                    <item.icon className="text-text_large" />
                                    <p className="font-normal">{item.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebars for small screens */}
                <div className="lg:hidden">
                    {/* Sidebar 1 - Sliding in from left */}
                    <div
                        ref={sidebar1Ref}
                        className={`mt-m_80px fixed inset-y-0 left-0 z-30 bg-white transition-transform duration-300 ${sidebar1Visible ? 'translate-x-0' : '-translate-x-full'} w-[90px] border-r`}
                    >
                        <ul>
                            <li
                                className={`h-[70px] flex flex-col justify-center items-center cursor-pointer ${selectedItem === 'Dashboards' ? 'text-blue-500 border-l-4 my-m_16px border-blue-500' : 'border-l-4 my-m_16px border-white'}`}
                                onClick={() => handleFirstSidebarClick('Content 1', 'Dashboards')}
                            >
                                <CgSmartHomeCooker className="w-[32px] font-thin h-[32px] mx-auto" />
                                <p className="font-normal text-text_standard">Dashboards</p>
                            </li>
                            <hr />
                            <li
                                className={`h-[90px] flex flex-col justify-center items-center cursor-pointer ${selectedItem === 'Pages' ? 'text-blue-500 border-l-4 my-m_16px border-blue-500' : 'border-l-4 my-m_16px border-white'}`}
                                onClick={() => handleFirstSidebarClick('Content 2', 'Pages')}
                            >
                                <RiPagesLine className="w-[32px] font-thin h-[32px] mx-auto" />
                                <p className="font-normal text-text_standard">Pages</p>
                            </li>
                            <hr />
                            <li
                                className={`h-[90px] flex flex-col justify-center items-center cursor-pointer ${selectedItem === 'Applications' ? 'text-blue-500 border-l-4 my-m_16px border-blue-500' : 'border-l-4 my-m_16px border-white'}`}
                                onClick={() => handleFirstSidebarClick('Content 3', 'Applications')}
                            >
                                <HiUserGroup className="w-[32px] font-thin h-[32px] mx-auto" />
                                <p className="font-normal text-text_standard">Applications</p>
                            </li>
                            <hr />
                        </ul>
                    </div>

                    {/* Sidebar 2 - Sliding in from right */}
                    <div
                        ref={sidebar2Ref}
                        className={`fixed inset-y-0 mt-m_80px left-20 z-20 bg-white transition-all duration-500 ${sidebar2Visible ? 'w-[230px] p-p_16px border-r shadow-2xl rounded-r-2xl' : 'w-0 p-0 border-none overflow-hidden'}`}
                    >
                        <ul>
                            {secondSidebarContent.map((item) => (
                                <li
                                    key={item.id}
                                    className={`cursor-pointer p-p_16px flex items-center gap-1 ${selectedSecondItem === item.id ? 'text-blue-500' : ''}`}
                                    onClick={() => handleSecondSidebarClick(item)}
                                >
                                    <item.icon className="text-text_large" />
                                    <p className="font-normal">{item.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Main Content Area */}
                <div
                    className={`mt-m_100px flex-grow pt-p_16px pl-p_40px transition-all duration-500 ${!sidebar1Visible && !sidebar2Visible ? 'w-full' : 'w-[calc(100%-140px-230px)]'}`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
