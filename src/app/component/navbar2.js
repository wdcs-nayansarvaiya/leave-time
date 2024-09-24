import { useEffect, useState } from "react";
import TheamNewComp from "./theamNew";
import { designImageConst, themeObjects } from "../utils/constant";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [selectedImage, setSelectedImage] = useState("/images/1.png");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisibleTheme, setDropdownVisibleTheme] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);
  const [gradientClass, setGradientClass] = useState(
    "bg-gradient-to-r from-blue-500 to-indigo-900"
  );
  const router = useRouter()

  useEffect(() => {
    let designTheme = localStorage.getItem("design");
    let colorTheme = localStorage.getItem("colorName");
    let isDarkTheme = localStorage.getItem("is_dark");

    if (designTheme !== null) {
      setSelectedImage(designTheme);
    }

    if (colorTheme !== null) {
      setGradientClass(colorTheme);
    }

    if (isDarkTheme !== null) {
      setIsDark(isDarkTheme);
    }
  }, []);

  const handleImageSelect = (image, name) => {
    setSelectedImage(image);
    setDropdownVisible(false);
    localStorage.setItem("design", image);
    setDropdownVisible(!dropdownVisible);
  };

  const colorThemeFun = (items) => {
    setGradientClass(items.color_theme), setIsDark(items.isDark);
    localStorage.setItem("is_dark", items.isDark);
    localStorage.setItem("colorName", items.color_theme),
      setDropdownVisibleTheme(!dropdownVisibleTheme);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleDropdownTheme = () => {
    setDropdownVisibleTheme(!dropdownVisibleTheme);
  };

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <>
      <div className="h-screen flex flex-col">
        <nav className="bg-white shadow-lg p-4">
          <div className="container mx-auto flex flex-wrap justify-between items-center">
            <div className="text-xl font-bold ml-4 md:ml-8">Leave Now</div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="relative inline-block">
                <button
                  className="bg-white border border-gray-300 animated-border px-4 py-2 rounded shadow flex items-center leading-tight focus:outline-none focus:shadow-outline"
                  onClick={() => togglePopup()}
                >
                  <img
                    src="/images/leave-now.png"
                    alt={selectedImage}
                    className="rounded-full w-8 h-8 mr-2"
                  />
                  <span className="truncate">Get Extension</span>
                </button>
                <span className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs px-2 py-1 rounded-full transform transition-transform duration-300 ease-in-out translate-x-1 -translate-y-1 animate-bounce">
                  New
                </span>
              </div>


              <div className="relative inline-block">
                <button
                  className="bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow flex items-center leading-tight focus:outline-none focus:shadow-outline"
                  onClick={toggleDropdown}
                >
                  <img
                    src={selectedImage}
                    alt={selectedImage}
                    className="rounded-full w-8 h-8 mr-2"
                  />
                  <span className="truncate">Select Image</span>
                </button>
                {dropdownVisible && (
                  <div className="absolute bg-white min-w-max shadow-lg z-10">
                    {designImageConst.length > 0 &&
                      designImageConst.map((items) => (
                        <div
                          key={items.id}
                          data-value={items.image}
                          className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() =>
                            handleImageSelect(items.image, items.name)
                          }
                        >
                          <img
                            src={items.image}
                            alt={items.name}
                            className="rounded-full w-8 h-8 mr-2"
                          />
                          {items.name}
                        </div>
                      ))}
                  </div>
                )}
              </div>

              <div className="relative inline-block">
                <button
                  className="bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow flex items-center leading-tight focus:outline-none focus:shadow-outline"
                  onClick={toggleDropdownTheme}
                >
                  <span
                    className={`mr-2 inline-block rounded-full ${gradientClass} px-4 py-4 text-white`}
                  >
                    {" "}
                  </span>
                  <span className="truncate">Select Color</span>
                </button>
                {dropdownVisibleTheme && (
                  <div className="absolute bg-white min-w-max shadow-lg z-10">
                    {themeObjects.length > 0 &&
                      themeObjects.map((items) => (
                        <div
                          key={items.id}
                          data-value={items.color_theme}
                          className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            colorThemeFun(items);
                          }}
                        >
                          <span
                            className={`mr-2 inline-block rounded-full ${items.color_theme} px-4 py-4 text-white`}
                          >
                            {" "}
                          </span>
                          {items.name}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div className="flex flex-col md:flex-row justify-between items-center flex-grow px-4 md:px-8">
          <TheamNewComp color={gradientClass} colTheme={isDark} />
          <div
            className={`w-full md:w-[700px] h-[350px] mt-4 md:mt-0 md:mr-[80px] ${gradientClass}`}
            style={{
              maskImage: `url(${selectedImage})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskComposite: "source-in",
            }}
          ></div>
        </div>
        {/* Footer Section */}
        <footer className="from-gray-100 via-gray-200 to-gray-300 text-center py-4  opacity-0 animate-slowFadeIn">
          <p className="text-black-600 font-semibold transition-colors duration-3000 ease-in-out hover:text-gray-900">
            Created by{" "}
            <span className="text-blue-700 transition-colors duration-3000 ease-in-out hover:text-blue-600">
              Nayan Sarvaiya
            </span>
          </p>
        </footer>
      </div>

      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 max-w-md mx-auto h-3/4 w-3/4 overflow-y-auto">
            <h2 className="text-lg font-bold">Extension Details</h2>
            <p className="mt-2">Here are the details about the extension.</p>

            <div className="mt-4">
              <h3 className="font-semibold">Why was this tool created?</h3>
              <p className="contentset">
                During office hours, users often face a number of punch-ins or punch-outs. Amidst this, they lose track of when it's time to leave the office. To address this issue, we developed this tool. Initially, we created a webpage-based tool where users had to manually check the time on another sheet, remember it, enter it here, and then click a button to display the time they could leave the office.<br /><br />

                We have simplified that process by introducing a solution in the form of a browser extension called "Leave Now." This extension provides employees with the facility of "auto calculate time," making it easier for them.<br /><br />

                The steps to use this tool are outlined below.

              </p>

              <h3 className="font-semibold mt-4">Steps to Get the Extension</h3>
              <div className="contentset">
                <ol className="list-decimal ml-6">
                  <li>Click on the "Get Extension" button.</li>
                  <li>Open the Chrome Web Store and click on "Add to Chrome" for the extension.</li>
                  <li>Pin the "Leave Now" extension to your browser toolbar.</li>
                </ol>
              </div>

              <h3 className="font-semibold mt-4">How to Use</h3>
              <div className="contentset">
                <ol className="list-decimal ml-6">
                  <li>Open the Kaka website.</li>
                  <li>Click on the "Me" menu and click on the "attendance".</li>
                  <li>Click on the "Leave Now" extension.</li>
                  <li>Get Auto Calculated Leave Time</li>
                </ol>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button onClick={togglePopup} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">
                Close
              </button>
              <Link href="https://chromewebstore.google.com/detail/leave-now/kggajnngbeidnchjibidcebolhhkifak" target="_blank">
                <button onClick={togglePopup} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Get Extension
                </button>
              </Link>
            </div>
          </div>
        </div >

      )}
    </>
  );
};

export default Navbar;
