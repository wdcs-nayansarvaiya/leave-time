"use client";

import React from "react";
import TimeInputForm from "./component/timeInputForm";

const HomePage = () => {
  return (
    <div>
      {/* <h1>Time Input Form</h1> */}
      <TimeInputForm />
      <p style={{
        textAlign: "center",
        position: "relative",
      }}>©2024 Nayan-Sarvaiya. All Rights Reserved</p>
    </div>
  );
};

export default HomePage;
