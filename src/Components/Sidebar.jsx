
import { FiHome, FiFileText, FiGrid, FiMenu, FiFile, FiClipboard, FiBookOpen } from 'react-icons/fi';

function Sidebar() {
    return (
        <div className='flex'>
            {/* first side bar */}
            <div className="h-screen w-[30%] bg-white shadow-lg border">
                <ul className="flex flex-col space-y-6 p-4">
                    {/* Dashboard */}
                    <li className="flex flex-col items-center space-x-4 group">
                        <FiHome className="text-xl text-gray-600 group-hover:text-blue-600" />

                        <span className="text-gray-600 group-hover:text-blue-600">Dashboards</span>
                    </li>

                    {/* Pages */}
                    <li className="flex flex-col items-center space-x-4 group">
                        <FiFileText className="text-xl text-gray-600 group-hover:text-blue-600" />
                        <span className="text-gray-600 group-hover:text-blue-600">Pages</span>
                    </li>

                    {/* Applications */}
                    <li className="flex flex-col items-center space-x-4 group">
                        <FiGrid className="text-xl text-gray-600 group-hover:text-blue-600" />
                        <span className="text-gray-600 group-hover:text-blue-600">Applications</span>
                    </li>

                    {/* UI */}
                    <li className="flex flex-col items-center space-x-4 group">
                        <FiClipboard className="text-xl text-gray-600 group-hover:text-blue-600" />
                        <span className="text-gray-600 group-hover:text-blue-600">UI</span>
                    </li>

                    {/* Menu */}
                    <li className="flex flex-col items-center space-x-4 group">
                        <FiMenu className="text-xl text-gray-600 group-hover:text-blue-600" />
                        <span className="text-gray-600 group-hover:text-blue-600">Menu</span>
                    </li>

                    {/* Blank Page */}
                    <li className="flex flex-col items-center space-x-4 group">
                        <FiFile className="text-xl text-gray-600 group-hover:text-blue-600" />
                        <span className="text-gray-600 group-hover:text-blue-600">Blank Page</span>
                    </li>

                    {/* Docs */}
                    <li className="flex flex-col items-center space-x-4 group">
                        <FiBookOpen className="text-xl text-gray-600 group-hover:text-blue-600" />
                        <span className="text-gray-600 group-hover:text-blue-600">Docs</span>
                    </li>
                </ul>
            </div>

            {/* second side bar */}
            <div className='w-[70%] h-screen  bg-white shadow-lg ">'>
                kdjfdf
            </div>
            
        </div>
        
    );
}

export default Sidebar;
