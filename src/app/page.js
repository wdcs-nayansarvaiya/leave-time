"use client";
import React, { useEffect } from "react";
import TimeInputForm from "./component/timeInputForm";
import NavbarPage from "./component/navbarPage";
import TheamNewComp from "./component/theamNew";
import Navbar from "./component/navbar2";
import { logEvent } from "firebase/analytics";
import { analytics } from "../app/utils/firebase";
import ConfettiButton from "./component/celebration";

const HomePage = () => {
  useEffect(() => {
    if (analytics) {
      // Example of logging an event
      logEvent(analytics, "page_view");
    }
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <ConfettiButton />
      </div>
    </>
  );
};

export default HomePage;
