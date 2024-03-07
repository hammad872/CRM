import React from "react";
import DateRangePicker from "rsuite/DateRangePicker";
import "rsuite/DateRangePicker/styles/index.css";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 flex justify-center">
        <div className="h-auto rounded-lg flex justify-start custom-shadow">
          <div className="top-0">
            <DateRangePicker
              appearance="subtle"
              placeholder="Select Date Range"
              style={{ width: 230 }}
            />
          </div>
        </div>
        <div className="h-auto rounded-lg flex justify-start custom-shadow">
          <h1 style={{fontSize:"100px"}}>Dashboard</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
