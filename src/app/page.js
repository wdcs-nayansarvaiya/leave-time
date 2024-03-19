"use client";
import React from 'react';
import TimeInputForm from './component/timeInputForm';
import NewDesignPage from './component/newDesign';


const HomePage = () => {
  // Get the current date
  const currentDate = new Date();
  // Set the target date (25-03-2024)
  const targetDate = new Date('2024-03-25');

  // Check if the current date is greater than the target date
  if (currentDate > targetDate) {
    // Render TimeInputForm if the condition is true
    return (
      <div>
        <TimeInputForm />
        <p style={{
          textAlign: "center",
          position: "relative",
        }}>©2024 Nayan-Sarvaiya. All Rights Reserved</p>
      </div>
    );
  } else {
    // Render NewDesign if the condition is false
    return (
      <div>
        <NewDesignPage />
        <p style={{
          textAlign: "center",
          position: "relative",
        }}>©2024 Nayan-Sarvaiya. All Rights Reserved</p>
      </div>
    );
  }
};

export default HomePage;
