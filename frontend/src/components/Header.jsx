import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState(""); 


  const handleProfileDropdown = () => {

    setIsDropdownOpen(!isDropdownOpen);
  };



  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserName(userData.name);
    }
  }, []);

  const navigate = useNavigate();



  const logout = () => {
    localStorage.clear();
    navigate("/");
  };


  return (
    <div className="flex items-center h-16 px-4 bg-white shadow grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">
      <div className="h-16 rounded-lg"></div>
      <div className="h-16 rounded-lg flex justify-start"></div>
      <div className="h-16 rounded-lg"></div>
      <div className="h-16 rounded-lg flex justify-end">
        <button className="flex items-center">
          <div class="notification ">
            <div class="bell-container">
              <div class="bell"></div>
            </div>
          </div>
        </button>
      </div>
      <div className="h-16 rounded-lg flex justify-start">
        <button
          onClick={handleProfileDropdown}
          className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <span className="ml-2">{userName}</span> 
        </button>
        <div
          className={`absolute top-10 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10 ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
          <div className="py-1">
            <NavLink
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Profile
            </NavLink>
            <NavLink
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Settings
            </NavLink>
            <button
              onClick={logout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
