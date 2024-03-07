import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [Role, setRole] = useState("");

  const handleProfileDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserName(userData.name);
      setRole(userData.role);
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
          className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out gap-6 mr-4"
        >
          <img
            src="https://res.cloudinary.com/dus0ln30w/image/upload/s--yOqaT5qk--/f_auto,q_auto/v1/Pictures/fnn41soyd3gn9uzsxxsc"
            alt=""
            className="rounded-full w-10 h-10 mx-auto"
          />
          <div className="">
          <h4 className="ml-2">{userName}</h4>
          <span className="ml-2 text-s font-light">{Role}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <div
          className={`absolute top-10 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10 ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
          <div className="py-1">
            <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Profile
            </NavLink>
            <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
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
