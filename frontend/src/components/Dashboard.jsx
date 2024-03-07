import React from "react";
import DateRangePicker from "rsuite/DateRangePicker";
import "rsuite/DateRangePicker/styles/index.css";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 justify-center">
      <div className="h-auto rounded-lg flex justify-start custom-shadow container">
        <div className="fixed top 0">
          <DateRangePicker
            appearance="subtle"
            placeholder="Select Date Range"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="h-auto rounded-lg flex justify-start custom-shadow">
        <h1 style={{fontSize:"100px"}}>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
