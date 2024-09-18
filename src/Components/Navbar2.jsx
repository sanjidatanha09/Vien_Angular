/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { FaRegUserCircle, FaToggleOn } from 'react-icons/fa';
import { IoIosExpand, IoMdNotifications } from 'react-icons/io';
import { LuTriangle } from 'react-icons/lu';
import { MdArrowDropDown, MdOutlineDashboard } from 'react-icons/md';

const Navbar2 = ({ toggleSidebar2 }) => {
    console.log(toggleSidebar2)
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageSelect = (language) => {
        console.log(`Selected language: ${language}`);
        setIsDropdownVisible(false);
    };
    return (
        <div style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }} className="fixed w-full py-p_12px z-40 bg-white flex items-center justify-between px-p_16px h-[80px] border">

            <div className="flex items-center space-x-4">
                {/* Menu Icon */}
                <button
                    className=""
                    onClick={toggleSidebar2}
                >
                    <AiOutlineMenuFold className='text-text_30px' />


                </button>

                {/* Search Bar */}
                <div className="relative hidden md:flex">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-p_8px lg:pr-6 py-p_8px rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 w-[100px]"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">

                    </button>
                </div>

                <div className="relative" ref={dropdownRef}>
                    {/* Button to toggle the dropdown */}
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center bg-gray-100 border z-50 border-gray-300 px-p_12px py-p_8px rounded-full hover:bg-gray-200 focus:outline-none"
                    >
                        <span>EN</span> {/* Default selected language */}
                        <MdArrowDropDown />
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownVisible && (
                        <ul className="absolute mt-m_4px transition-transform duration-300 bg-white border border-gray-300 rounded-md shadow-lg 
                        w-40">
                            <li
                                onClick={() => handleLanguageSelect('EN')}
                                className="cursor-pointer px-p_16px py-p_8px hover:bg-gray-100"
                            >
                                EN
                            </li>
                            <li
                                onClick={() => handleLanguageSelect('FR')}
                                className="cursor-pointer px-p_16px py-p_8px hover:bg-gray-100"
                            >
                                FR
                            </li>

                        </ul>
                    )}
                </div>

                {/* Buy Button */}
                <button className="border hidden lg:flex border-blue-500 text-blue-500 px-p_16px py-p_8px rounded-full hover:bg-blue-100 focus:outline-none">
                    BUY
                </button>
            </div>

            <div className="flex items-center gap-1 ">
                <LuTriangle className='text-text_large  w-full' />
                <span className="font-bold text-text_large">VIEN</span>
            </div>

            <div className="flex items-center space-x-4">
                {/* Toggle */}
                <button className="bg-gray-200 hidden md:flex rounded-lg py-p_4px px-p_8px focus:outline-none">
                    <FaToggleOn className='text-text_xl' />
                </button>

                {/* Icons */}
                <button className=" text-gray-600 hidden md:flex hover:text-gray-800 focus:outline-none">
                    <MdOutlineDashboard className='text-text_xl' />
                </button>
                <button className="hidden md:flex relative p-p_4px text-gray-600 hover:text-gray-800 focus:outline-none">
                    <IoMdNotifications className='text-text_xl' />
                    <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-p_4px text-text_small">
                        5
                    </span>
                </button>
                <button className="hidden md:flex text-gray-600 hover:text-gray-800 focus:outline-none">
                    <IoIosExpand className='text-text_large' />
                </button>
                <div>
                    <FaRegUserCircle className='text-text_40px' />
                </div>


            </div>
        </div>
    );
};

export default Navbar2;
