// components/TimeInputForm.js
import React, { useState } from "react";

const TimeInputForm = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [leaveTime, setLeaveTime] = useState("");

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const defaultStartTime = "08:30";
    const defaultEndTime = "17:00"; // Assuming a standard 8-hour work day

    const startTimeValue = startTime
      ? new Date(`2000-01-01T${startTime}`)
      : new Date(`2000-01-01T${defaultStartTime}`);
    const endTimeValue = endTime
      ? new Date(`2000-01-01T${endTime}`)
      : new Date(`2000-01-01T${defaultEndTime}`);

    const diffTime = endTimeValue - startTimeValue;
    const leaveTime = new Date(2000, 0, 1, 8, 30);
    leaveTime.setMilliseconds(leaveTime.getMilliseconds() + diffTime);

    const startTimeString = startTimeValue.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const endTimeString = endTimeValue.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const leaveTimeString = leaveTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setLeaveTime(leaveTimeString);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container">
        <h1 className="header">Time Checker</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputField">
            <label
              htmlFor="startTime"
              className="block text-sm font-medium text-gray-700"
            >
              Effective Hours:
            </label>
            <input
              id="startTime"
              type="time"
              value={startTime}
              onChange={handleStartTimeChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-blue-300 rounded-md bg-blue-50"
            />
          </div>
          <div className="inputField">
            <label
              htmlFor="endTime"
              className="block text-sm font-medium text-gray-700"
            >
              Last In Time of Office:
            </label>
            <input
              id="endTime"
              type="time"
              value={endTime}
              onChange={handleEndTimeChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-blue-300 rounded-md bg-blue-50"
            />
          </div>
          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
        <div className="mt-4">
          <h4
            id="leaveTime"
            className="mt-1 text-lg font-semibold text-gray-900"
          >
            Leave Time: {leaveTime}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TimeInputForm;
