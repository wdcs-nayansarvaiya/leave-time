// components/Navbar.js

import React from 'react';

const Navbar = ({ userName }) => {
    const updateName = () => {
        localStorage.removeItem("name"),
            window.location.reload(true)
    }

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'black', padding: '1rem', borderBottom: "2px solid #00ff00",
            boxShadow: "0px 15px 10px -15px #00ff00"
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 className="text3">Leave Now</h1>
                <div style={{ display: 'flex', alignItems: 'center', textTransform: "capitalize" }}>
                    <h3 className="text4">{userName}</h3>
                    {userName !== null && userName !== "" && <img img src='/images/edit.png' style={{
                        height: "30px",
                        width: "30px",
                        marginLeft: "10px",
                        cursor: "pointer"
                    }}
                        onClick={() => updateName()}
                    ></img>}
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
