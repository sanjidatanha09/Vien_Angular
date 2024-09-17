
import { useContext, useState } from 'react';
import { FiHome, FiFileText, FiGrid, FiMenu, FiFile, FiClipboard, FiBookOpen } from 'react-icons/fi';
import { BasicContext } from '../ContextApis/BasicProvider';
import { Link } from 'react-router-dom';
import { IoCubeOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Sidebar() {

    const [openDropdown, setOpenDropdown] = useState(null);
    const { sidebarOpen } = useContext(BasicContext);

    const handleOpen = (id) => {
        setOpenDropdown((prevIdx) => (prevIdx === id ? null : id));
    };

    return (
        <div className=''>
            <div>
                <div className="flex flex-col _gap justify-between padding_top padding_left padding_right">
                    <ul className=" space-y-[2px] w-full">
                        <li className=" px-p_md py-p_xs group hover:cursor-pointer hover:bg-slate-500 duration-200">
                            <Link to="/" className="font-semibold text-text_md">
                                <p className="group-hover:translate-x-2 duration-200">
                                    {sidebarOpen ? <IoCubeOutline /> : "Home"}
                                </p>
                            </Link>
                        </li>
                        <li className=" group hover:cursor-pointer duration-200">
                            <div
                                onClick={() => handleOpen(1)}
                                className="flex items-center justify-between px-p_md py-p_xs hover:bg-slate-500 duration-200"
                            >
                                <p className="group-hover:translate-x-2 duration-200">
                                    {sidebarOpen ? <IoCubeOutline /> : "Getting Started"}
                                </p>
                                <MdKeyboardArrowDown
                                    className={`${openDropdown === 1 ? "rotate-90" : ""
                                        } transition-all duration-500`}
                                />
                            </div>
                            <ul
                                className={` ${openDropdown === 1 ? "max-h-96" : "max-h-0"
                                    } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                            >

                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/featureOverview' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Feature Overview
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/tutorial' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Tutorial
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/examples' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Examples
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/faqs' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        FAQs
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/mainConcepts' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Main Concepts
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/changeLog' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Changelog
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" group hover:cursor-pointer duration-200 max-w-96">
                            <div
                                onClick={() => handleOpen(2)}
                                className="flex items-center justify-between px-p_md py-p_xs hover:bg-slate-500 duration-200"
                            >
                                <p className="group-hover:translate-x-2 duration-200">
                                    {sidebarOpen ? <IoCubeOutline /> : "Upgrading"}
                                </p>
                                <MdKeyboardArrowDown
                                    className={`${openDropdown === 2 ? "rotate-90" : ""
                                        } transition-all duration-500`}
                                />
                            </div>
                            <ul
                                className={` ${openDropdown === 2 ? "max-h-96" : "max-h-0"
                                    } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                            >
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/migrate' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Migrating to RouterProvider
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/upgrade' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Upgrading from v5
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/migrateRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Migrating from @reach/router
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" group hover:cursor-pointer duration-200 max-w-96">
                            <div
                                onClick={() => handleOpen(3)}
                                className="flex items-center justify-between px-p_md py-p_xs hover:bg-slate-500 duration-200"
                            >
                                <p className="group-hover:translate-x-2 duration-200">
                                    {sidebarOpen ? <IoCubeOutline /> : "Routers"}
                                </p>
                                <MdKeyboardArrowDown
                                    className={`${openDropdown === 3 ? "rotate-90" : ""
                                        } transition-all duration-500`}
                                />
                            </div>
                            <ul
                                className={` ${openDropdown === 3 ? "max-h-96" : "max-h-0"
                                    } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                            >
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/pickRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Picking a Router
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/createRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        createBrowserRouter
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/hashRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        createHashRouter
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/memoryRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        createMemoryRouter
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/staticHandler' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        createStaticHandler
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/staticRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        createStaticRouter
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/routerProvider' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        RouterProvider
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/staticRouterProvider' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        StaticRouterProvider
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" group hover:cursor-pointer duration-200 max-w-96">
                            <div
                                onClick={() => handleOpen(4)}
                                className="flex items-center justify-between px-p_md py-p_xs hover:bg-slate-500 duration-200"
                            >
                                <p className="group-hover:translate-x-2 duration-200">
                                    {sidebarOpen ? <IoCubeOutline /> : "Router Components"}
                                </p>
                                <MdKeyboardArrowDown
                                    className={`${openDropdown === 4 ? "rotate-90" : ""
                                        } transition-all duration-500`}
                                />
                            </div>
                            <ul
                                className={` ${openDropdown === 4 ? "max-h-96" : "max-h-0"
                                    } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                            >
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/browserRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        BrowserRouter
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/routerHash' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        HashRouter
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/componentMemoryRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        memoryRouter
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/nativeRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        NativeRouter
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/componentRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Router
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/staticRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        staticRouter
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* route start */}
                        <li className=" group hover:cursor-pointer duration-200 max-w-96">
                            <div
                                onClick={() => handleOpen(5)}
                                className="flex items-center justify-between px-p_md py-p_xs hover:bg-slate-500 duration-200"
                            >
                                <p className="group-hover:translate-x-2 duration-200">
                                    {sidebarOpen ? <IoCubeOutline /> : "Route "}
                                </p>
                                <MdKeyboardArrowDown
                                    className={`${openDropdown === 5 ? "rotate-90" : ""
                                        } transition-all duration-500`}
                                />
                            </div>
                            <ul
                                className={` ${openDropdown === 5 ? "max-h-96" : "max-h-0"
                                    } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                            >
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/route' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Route
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/routerHash' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        HashRouter
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/componentMemoryRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        memoryRouter
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/nativeRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        NativeRouter
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/componentRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Router
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/staticRouter' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        staticRouter
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* components start */}
                        <li className=" group hover:cursor-pointer duration-200 max-w-96">
                            <div
                                onClick={() => handleOpen(6)}
                                className="flex items-center justify-between px-p_md py-p_xs hover:bg-slate-500 duration-200"
                            >
                                <p className="group-hover:translate-x-2 duration-200">
                                    {sidebarOpen ? <IoCubeOutline /> : "Components"}
                                </p>
                                <MdKeyboardArrowDown
                                    className={`${openDropdown === 6 ? "rotate-90" : ""
                                        } transition-all duration-500`}
                                />
                            </div>
                            <ul
                                className={` ${openDropdown === 6 ? "max-h-96" : "max-h-0"
                                    } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                            >
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/route' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Route
                                    </Link>
                                </li>
                                
                               
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/revaliDate' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        shouldRevalidate
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* Hooks start */}
                        <li className=" group hover:cursor-pointer duration-200 max-w-96">
                            <div
                                onClick={() => handleOpen(7)}
                                className="flex items-center justify-between px-p_md py-p_xs hover:bg-slate-500 duration-200"
                            >
                                <p className="group-hover:translate-x-2 duration-200">
                                    {sidebarOpen ? <IoCubeOutline /> : "Hooks"}
                                </p>
                                <MdKeyboardArrowDown
                                    className={`${openDropdown === 7 ? "rotate-90" : ""
                                        } transition-all duration-500`}
                                />
                            </div>
                            <ul
                                className={` ${openDropdown === 7 ? "max-h-96" : "max-h-0"
                                    } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                            >
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/route' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Route
                                    </Link>
                                </li>
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/action' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Action
                                    </Link>
                                </li>
                               
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/loader' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        loader
                                    </Link>
                                </li>
                              
                            </ul>
                        </li>
                        {/* Fetch Utilities start */}
                        <li className="bg-violet-500 group hover:cursor-pointer duration-200 max-w-96">
                            <div
                                onClick={() => handleOpen(8)}
                                className="flex items-center justify-between px-p_md py-p_xs hover:bg-slate-500 duration-200"
                            >
                                <p className="group-hover:translate-x-2 duration-200">
                                    {sidebarOpen ? <IoCubeOutline /> : "Fetch Utilities"}
                                </p>
                                <MdKeyboardArrowDown
                                    className={`${openDropdown === 8 ? "rotate-90" : ""
                                        } transition-all duration-500`}
                                />
                            </div>
                            <ul
                                className={` ${openDropdown === 8 ? "max-h-96" : "max-h-0"
                                    } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                            >
                                <li className=" px-p_md py-p_xs hover:cursor-pointer hover:bg-slate-500 duration-200 ">
                                    <Link to='/route' className="flex items-center gap-g_xs">
                                        <IoCubeOutline />
                                        Route
                                    </Link>
                                </li>
                                
                            </ul>
                        </li>
                      
                       


                    </ul>
                </div>
            </div>
            
        </div>
        
    );
}

export default Sidebar;
