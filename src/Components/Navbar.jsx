/* eslint-disable react/prop-types */
import React from 'react';

const Navbar = ({toggleSidebar}) => {
    return (
        <div className="w-full h-16 bg-white shadow-md flex items-center justify-between px-4 border">
            {/* Left Side: Menu Icon and Search Bar */}
            <div className="flex items-center space-x-4">
                {/* Menu Icon */}
                <button
                    className="p-2 bg-gray-600 rounded-md"
                    onClick={toggleSidebar}
                >
                    <i className="material-icons">menu</i> {/* mdmenu icon */}


                </button>

                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <i className="material-icons">search</i>
                    </button>
                </div>

                {/* Language Dropdown */}
                <div className="relative">
                    <button className="flex items-center bg-gray-100 border border-gray-300 px-3 py-2 rounded-full hover:bg-gray-200 focus:outline-none">
                        <span>EN</span>
                        <i className="material-icons ml-1">arrow_drop_down</i>
                    </button>
                </div>

                {/* Buy Button */}
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 focus:outline-none">
                    BUY
                </button>
            </div>

            {/* Center: Logo */}
            <div className="flex items-center">
                <img
                    src="https://via.placeholder.com/50" // Replace with your actual logo source
                    alt="logo"
                    className="h-8 mr-2"
                />
                <span className="font-bold text-xl">VIEN</span>
            </div>

            {/* Right Side: Icons and Profile */}
            <div className="flex items-center space-x-4">
                {/* Toggle */}
                <button className="bg-gray-200 p-2 rounded-full focus:outline-none">
                    <i className="material-icons">toggle_on</i>
                </button>

                {/* Icons */}
                <button className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                    <i className="material-icons">apps</i>
                </button>
                <button className="relative p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                    <i className="material-icons">notifications</i>
                    <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-1 text-xs">
                        5
                    </span>
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                    <i className="material-icons">fullscreen</i>
                </button>

                {/* Profile Picture */}
                <img
                    src="https://via.placeholder.com/40" // Replace with actual profile image source
                    alt="profile"
                    className="rounded-full h-10 w-10 object-cover"
                />
            </div>
        </div>
    );
};

export default Navbar;
