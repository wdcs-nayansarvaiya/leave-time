import React, { useState } from "react";

function TheamNewComp(gradientClass) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [leaveTime, setLeaveTime] = useState("");

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  // remove AM PM
  const convertTimeFormat = (timeStr) => {
    if (timeStr.includes("AM")) {
      // Remove 'AM' and return as is
      return timeStr.replace(" AM", "");
    } else if (timeStr.includes("PM")) {
      // Convert PM to 24-hour format and remove 'PM'
      let timeParts = timeStr.replace(" PM", "").split(":");
      let hour = parseInt(timeParts[0]) + 12;
      if (hour === 24) {
        hour = 12; // Special case for 12 PM
      }
      return hour + ":" + timeParts[1];
    }
    // If no AM/PM found, return the original string (though it shouldn't happen in this context)
    return timeStr;
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
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mx-4 sm:mx-6 md:mx-auto w-full max-w-md md:max-w-lg">
      <h3 className="text-xl font-bold mb-4">Time Checker</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="startTime" className="block text-gray-700">
            Effective Hours:
          </label>
          <input
            id="startTime"
            type="time"
            value={startTime}
            onChange={handleStartTimeChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endTime" className="block text-gray-700">
            Last In Time of Office:
          </label>
          <input
            id="endTime"
            type="time"
            value={endTime}
            onChange={handleEndTimeChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className={`w-full ${
            gradientClass.colTheme ? "text-white" : "text-black"
          } py-2 rounded-md ${gradientClass.color}`}
        >
          Submit
        </button>
      </form>
      <div className="mt-4 text-center text-lg font-bold">
        {leaveTime !== ""
          ? `Leave Time: ${convertTimeFormat(leaveTime)}`
          : null}
      </div>
    </div>
  );
}

export default TheamNewComp;
