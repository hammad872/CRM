import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Remove the item from localStorage
        localStorage.removeItem("userData");
        navigate("/");
      };
    
      return (
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleClick}
        >
          Logout
        </button>
      );
    };

export default Dashboard;
