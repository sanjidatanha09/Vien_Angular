import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { PiBagSimpleThin } from 'react-icons/pi';
import { CgSmartHomeCooker } from 'react-icons/cg';
import { RiPagesLine } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    // State to control sidebar visibility
    const [clickCount, setClickCount] = useState(0);
    const [sidebar1Visible, setSidebar1Visible] = useState(true);
    const [sidebar2Visible, setSidebar2Visible] = useState(true);

    // State to manage content for both sidebars
    const [firstSidebarContent, setFirstSidebarContent] = useState('Content 1');
    const [secondSidebarContent, setSecondSidebarContent] = useState([]);

    useEffect(() => {
        if (firstSidebarContent === 'Content 1') {
            setSecondSidebarContent([
                { id: 1, name: 'Menu ', icon: PiBagSimpleThin },
                { id: 2, name: 'rita', icon: PiBagSimpleThin }
            ]);
        } else if (firstSidebarContent === 'Content 2') {
            setSecondSidebarContent([
                { id: 3, name: 'Default', icon: PiBagSimpleThin },
                { id: 4, name: 'Default', icon: PiBagSimpleThin },
                { id: 5, name: 'Default', icon: PiBagSimpleThin },
                { id: 6, name: 'Default', icon: PiBagSimpleThin }
            ]);
        } else if (firstSidebarContent === 'Content 3') {
            setSecondSidebarContent([
                { id: 7, name: 'User 1', icon: PiBagSimpleThin },
                { id: 8, name: 'User 2', icon: PiBagSimpleThin },
                { id: 9, name: 'User 3', icon: PiBagSimpleThin },
                { id: 10, name: 'User 4', icon: PiBagSimpleThin }
            ]);
        } else {
            setSecondSidebarContent([]);
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

    // Function to handle click on first sidebar content
    const handleFirstSidebarClick = (content) => {
        setFirstSidebarContent(content);
        setSidebar2Visible(true);
    };

    // Function to handle click on second sidebar content
    const handleSecondSidebarClick = (item) => {
        switch (item.name) {
            case 'Menu ':
                navigate('/menu');
                break;
            case 'rita':
                navigate('/rita');
                break;
            case 'User 1':
                navigate('/user1');
                break;
            case 'User 2':
                navigate('/user2');
                break;
            case 'User 3':
                navigate('/user3');
                break;
            case 'User 4':
                navigate('/user4');
                break;
            default:
                navigate('/');
        }
    };

    return (
        <div className="flex flex-col bg-body_color">
            {/* Top Navbar */}
            <Navbar toggleSidebar={toggleSidebar} />

            <div className="flex">
                <div className="flex min-h-screen">
                    {/* Sidebar 1 */}
                    <div
                        className={`bg-white   transition-all z-20 duration-300 ${sidebar1Visible ? 'w-[140px] border-r  ' : 'w-0 overflow-hidden '
                            }`}
                    >
                        <ul className='bg-white '>
                            <li
                                className="h-[110px]  flex flex-col justify-center items-center"
                                onClick={() => handleFirstSidebarClick('Content 1')}
                            >
                                <CgSmartHomeCooker className="w-[32px] font-thin h-[32px] mx-auto" />
                                <p className='font-normal text-text_standard'>Dashboards</p>
                            </li>
                            <hr />
                            <li
                                className="h-[110px] flex flex-col justify-center items-center"
                                onClick={() => handleFirstSidebarClick('Content 2')}
                            >
                                <RiPagesLine className="w-[32px] font-thin h-[32px] mx-auto" />
                                <p className='font-normal text-text_standard'>Pages</p>
                            </li>
                            <hr />
                            <li
                                className="h-[110px] flex flex-col justify-center items-center"
                                onClick={() => handleFirstSidebarClick('Content 3')}
                            >
                                <HiUserGroup className="w-[32px] font-thin h-[32px] mx-auto" />
                                <p className='font-normal text-text_standard'>User</p>
                            </li>
                            <hr />
                        </ul>
                    </div>

                    {/* Sidebar 2 */}
                    <div
                        className={`bg-white   transition-all duration-500 ${sidebar2Visible ? 'w-[230px] p-4 border-r shadow-2xl  rounded-r-2xl' : 'w-0 p-0 border-none overflow-hidden'
                            }`}
                    >
                        <ul>
                            {secondSidebarContent.map((item) => (
                                <li
                                    key={item.id}
                                    className="cursor-pointer hover:bg-gray-400 p-2 flex items-center gap-1"
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
                    className={`flex-grow  pt-4 pl-10 transition-all duration-500 ${!sidebar1Visible && !sidebar2Visible ? 'w-full' : 'w-[calc(100%-140px-230px)]'
                        }`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;


