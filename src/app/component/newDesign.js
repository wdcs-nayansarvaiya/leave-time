"use client"

import React, { useState, useEffect } from 'react';

const NewDesignPage = () => {
    const imagesArray = [
        { id: 1, imageUrl: 'https://images.pexels.com/photos/3906333/pexels-photo-3906333.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 2, imageUrl: 'https://images.pexels.com/photos/11059847/pexels-photo-11059847.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 3, imageUrl: 'https://images.pexels.com/photos/11347125/pexels-photo-11347125.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 4, imageUrl: 'https://images.pexels.com/photos/7289051/pexels-photo-7289051.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [leaveTime, setLeaveTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagesArray.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

  
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
          hour12: true, // Ensure 12-hour format with AM/PM indicator
        });
        const endTimeString = endTimeValue.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true, // Ensure 12-hour format with AM/PM indicator
        });
        const leaveTimeString = leaveTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true, // Ensure 12-hour format with AM/PM indicator
        });
        setLeaveTime(leaveTimeString);
      };

    return (
        <div style={{ width: '100%', height: '100vh', backgroundColor: 'black' }}>
            <img
                src={imagesArray[currentImageIndex].imageUrl}
                alt={`Image ${currentImageIndex + 1}`}
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>HAPPY HOLI</h1>
                <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '20px', border: '2px solid black', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="startTime" style={{ marginRight: '10px' }}>Effective Hours:</label>
                        <input
                             id="startTime"
                             type="time"
                             value={startTime}
                             onChange={handleStartTimeChange}
                             required
                            style={{ padding: '5px', border: '1px solid black' }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="endTime" style={{ marginRight: '10px' }}>Last In Time of Office:</label>
                        <input
                            id="endTime"
                            type="time"
                            value={endTime}
                            onChange={handleEndTimeChange}
                            required
                            style={{ padding: '5px', border: '1px solid black' }}
                        />
                    </div>

                    <button type="submit" style={{ padding: '10px', backgroundColor: 'black', color: 'white', border: '2px solid black', borderRadius: '5px' }}>Submit</button>
                    {leaveTime !== "" ?<div style={{ color: 'red', marginTop: '20px' }}>Leave Time: {leaveTime}</div>:null}
                </form>


            </div>
        </div>
    );
};

export default NewDesignPage;
