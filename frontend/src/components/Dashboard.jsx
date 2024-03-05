import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Remove the item from localStorage
        localStorage.removeItem("userData");
        navigate("/");
      };
    
      return (
        <Header />
              );
    };

export default Dashboard;
