// components/ConfettiButton.js
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";

const ConfettiButton = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let celkeyGet = localStorage.getItem("celkey");

      if (celkeyGet == null) {
        localStorage.setItem("celkey", 0);
      } else if (celkeyGet == 0) {
        const button = document.querySelector(".js-confetti");

        // Function to handle the confetti explosion
        const fireConfetti = () => {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        };

        const handleButtonClick = () => {
          fireConfetti();
          if (sound) {
            sound.currentTime = 0;
            sound.play();
          }
          // Show the modal when the button is clicked
        };

        // Add the click event listener to the button
        button.addEventListener("click", handleButtonClick);

        // Trigger the click event once after component mounts
        button.click();

        // Cleanup event listener on component unmount
        setShowModal(true);
        return () => {
          button.removeEventListener("click", handleButtonClick);
        };
      } else {
        setShowModal(false);
      }
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal when close button is clicked
    localStorage.setItem("celkey", 1);
  };

  return (
    <>
      <button className="btn js-confetti"></button>
      <audio
        src="https://assets.codepen.io/1256430/whistle.mp3"
        id="sound"
        preload="auto"
        hidden
      />

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 max-w-md mx-auto h-auto w-3/4 overflow-y-auto">
            <div className="mt-4">
              <h3 className="font-semibold">Hello everyone! 🎉</h3>
              <p className="contentset">
                Exciting news our "Leave Now" feature is now available on the
                Chrome extension!{" "}
                <Link
                  style={{ color: "blue" }}
                  onClick={handleCloseModal}
                  href="https://chromewebstore.google.com/detail/leave-now/kggajnngbeidnchjibidcebolhhkifak"
                  target="_blank"
                >
                  Click here
                </Link>
                <br />
                <br />
                No need to visit the website for your leave logs anymore. With
                just a simple click on the extension, the magic happens it
                auto-calculates your leave time and provides a convenient web
                view form. Enjoy the ease!
              </p>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfettiButton;
