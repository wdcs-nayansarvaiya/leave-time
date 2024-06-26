import React, { useState } from 'react'

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
        if (timeStr.includes('AM')) {
            // Remove 'AM' and return as is
            return timeStr.replace(' AM', '');
        } else if (timeStr.includes('PM')) {
            // Convert PM to 24-hour format and remove 'PM'
            let timeParts = timeStr.replace(' PM', '').split(':');
            let hour = parseInt(timeParts[0]) + 12;
            if (hour === 24) {
                hour = 12; // Special case for 12 PM
            }
            return hour + ':' + timeParts[1];
        }
        // If no AM/PM found, return the original string (though it shouldn't happen in this context)
        return timeStr;
    }

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
        // <div className="flex items-center justify-center h-screen">
        <div className="ml-[150px] bg-white p-8 rounded-lg shadow-lg w-[500px] h-[370px]">
            <h3 className="text-xl font-bold mb-4">Time Checker</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="input1" className="block text-gray-700"> Effective Hours:</label>
                    <input id="startTime"
                        type="time"
                        value={startTime}
                        onChange={handleStartTimeChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="input2" className="block text-gray-700">Last In Time of Office:</label>
                    <input id="endTime"
                        type="time"
                        value={endTime}
                        onChange={handleEndTimeChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <button type="submit" className={`w-full ${gradientClass.colTheme == true || gradientClass.colTheme == 'true' ? `text-white` : `text-black`} py-2 rounded-md  ${gradientClass.color}`}>Submit</button>

            </form>
            <div style={{
                fontSize: "20px",
                marginTop: "10px",
                textAlign: "center",
                fontWeight: "bold"
            }}> {leaveTime !== "" ? `Leave Time: ${convertTimeFormat(leaveTime)}` : null}
            </div>
        </div>
        // </div>
    )
}

export default TheamNewComp