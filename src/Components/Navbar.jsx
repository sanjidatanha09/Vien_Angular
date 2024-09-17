/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { FaRegUserCircle, FaToggleOn } from 'react-icons/fa';
import { IoIosExpand, IoMdNotifications } from 'react-icons/io';
import { LuTriangle } from 'react-icons/lu';
import { MdArrowDropDown, MdOutlineDashboard } from 'react-icons/md';

const Navbar = ({toggleSidebar}) => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null); // Create a reference to the dropdown

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        // Add event listener to detect clicks outside
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Clean up the event listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageSelect = (language) => {
        console.log(`Selected language: ${language}`);
        setIsDropdownVisible(false); // Close the dropdown after selection
    };
    return (
        <div className="w-full py-6 z-40 bg-white shadow-md flex items-center justify-between px-4 border">
            {/* Left Side: Menu Icon and Search Bar */}
            <div className="flex items-center space-x-4">
                {/* Menu Icon */}
                <button
                    className=""
                    onClick={toggleSidebar}
                >
                    <AiOutlineMenuFold className='text-text_30px' />


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

                <div className="relative" ref={dropdownRef}>
                    {/* Button to toggle the dropdown */}
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center bg-gray-100 border z-50 border-gray-300 px-3 py-2 rounded-full hover:bg-gray-200 focus:outline-none"
                    >
                        <span>EN</span> {/* Default selected language */}
                        <MdArrowDropDown />
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownVisible && (
                        <ul className="absolute mt-1 transition-transform duration-300 bg-white border border-gray-300 rounded-md shadow-lg 
                        w-40">
                            <li
                                onClick={() => handleLanguageSelect('EN')}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                            >
                                EN
                            </li>
                            <li
                                onClick={() => handleLanguageSelect('FR')}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                            >
                                FR
                            </li>
                            
                        </ul>
                    )}
                </div>

                {/* Buy Button */}
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 focus:outline-none">
                    BUY
                </button>
            </div>

            {/* Center: Logo */}
            <div className="flex items-center gap-1 ">
                <LuTriangle className='text-text_large  w-full' />
                <span className="font-bold text-text_large">VIEN</span>
            </div>

            {/* Right Side: Icons and Profile */}
            <div className="flex items-center space-x-4">
                {/* Toggle */}
                <button className="bg-gray-200  rounded-lg py-1 px-2 focus:outline-none">
                    <FaToggleOn className='text-text_xl' />
                </button>

                {/* Icons */}
                <button className=" text-gray-600 hover:text-gray-800 focus:outline-none">
                    <MdOutlineDashboard className='text-text_xl' />
                </button>
                <button className="relative p-1 text-gray-600 hover:text-gray-800 focus:outline-none">
                    <IoMdNotifications className='text-text_xl' />
                    <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-1 text-xs">
                        5
                    </span>
                </button>
                <button className=" text-gray-600 hover:text-gray-800 focus:outline-none">
                    <IoIosExpand className='text-text_large' />
                </button>
                <div>
                    <FaRegUserCircle className='text-text_40px' />
                </div>

               
            </div>
        </div>
    );
};

export default Navbar;
