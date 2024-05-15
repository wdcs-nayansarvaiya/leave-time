// pages/index.js

import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import HeackerForm from './heackerForm';


const NavbarPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [navName, setNavName] = useState("")
    const [isNameReq, setIsNameReq] = useState(false)
    let userName = ""

    useEffect(() => {
        const name = localStorage.getItem("name")
        if (name == null || name == "") {
            setIsOpen(true)
        } else {
            setIsOpen(false)
            setNavName(name)
        }

        // setUsername(name)
    }, [])



    const addusername = () => {
        localStorage.setItem("name", username)
        if (username == "") {
            setIsNameReq(true)
        } else {
            setIsOpen(false)
            setIsNameReq(false)
            window, location.reload(true)
        }


    }


    return (
        <div>
            <Navbar userName={navName} />

            <div style={{ marginTop: '80px', padding: '1rem' }}> {/* Adjust marginTop to accommodate the navbar height */}
                {!isOpen && <HeackerForm />}

            </div>

            {isOpen && !isNameReq && <div className="dialog">
                <form >
                    <div className="inputField">
                        <label
                            htmlFor="endTime"
                            className="labelClass"
                        >
                            Enter Your Name:
                        </label>
                        <input
                            style={{
                                marginTop: "10px",
                                padding: "0.5rem",
                                width: "95%",
                                borderRadius: "0.25rem",
                                borderBottom: "1px solid #4f514f",
                                background: "#4f514f",
                                active: 'none',
                                color: "white",
                                fontFamily: 'Bungee',
                                fontSize: "12px",
                                letterSpacing: "1px"

                            }}
                            placeholder="Enter name"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)
                            }
                            required
                        />
                    </div>

                    <button style={{
                        marginTop: "10px",
                        marginLeft: "210px",
                        width: '80px',
                        padding: "5px"
                    }} onClick={() => addusername()} type="submit">Submit</button>
                </form>

            </div>}


            {isNameReq && <div className="dialog">

                <div className="inputField">
                    <label
                        htmlFor="endTime"
                        style={{
                            marginTop: "10px",
                            marginLeft: "180px",
                            padding: "0.5rem",
                            // width: "85%",
                            borderRadius: "0.25rem",
                            borderBottom: "1px solid #4f514f",
                            background: "red",
                            active: 'none',
                            color: "white",
                            fontSize: "12px",
                            letterSpacing: "1px"

                        }}
                    >
                        Name is required
                    </label>

                </div>

                <button style={{
                    marginTop: "10px",
                    marginLeft: "210px",
                    width: '80px',
                    padding: "5px"
                }} onClick={() => { setIsNameReq(false), setIsOpen(true) }} type="button">Ok</button>


            </div>}

        </div>
    );
};

export default NavbarPage;
