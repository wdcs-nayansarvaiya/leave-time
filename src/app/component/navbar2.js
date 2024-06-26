import { useEffect, useState } from 'react';
import TheamNewComp from './theamNew';
import { designImageConst, themeObjects } from '../utils/constant'

const Navbar = () => {

    const [selectedImage, setSelectedImage] = useState('/images/1.png');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownVisibleTheme, setDropdownVisibleTheme] = useState(false);
    const [isDark, setIsDark] = useState(true)
    const [gradientClass, setGradientClass] = useState('bg-gradient-to-r from-blue-500 to-indigo-900');


    useEffect(() => {
        let designTheme = localStorage.getItem("design")
        let colorTheme = localStorage.getItem("colorName")
        let isDarkTheme = localStorage.getItem("is_dark")

        if (designTheme !== null) {
            setSelectedImage(designTheme)
        }

        if (colorTheme !== null) {
            setGradientClass(colorTheme)
        }

        if (isDarkTheme !== null) {
            setIsDark(isDarkTheme)
        }

    }, [])


    const handleImageSelect = (image, name) => {
        setSelectedImage(image);
        setDropdownVisible(false);
        localStorage.setItem("design", image)
        setDropdownVisible(!dropdownVisible);
    };

    const colorThemeFun = (items) => {
        setGradientClass(items.color_theme),
            setIsDark(items.isDark)
        localStorage.setItem("is_dark", items.isDark)
        localStorage.setItem("colorName", items.color_theme),
            setDropdownVisibleTheme(!dropdownVisibleTheme);
    }


    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const toggleDropdownTheme = () => {
        setDropdownVisibleTheme(!dropdownVisibleTheme);
    };


    return (
        <>
            <div className="h-screen flex flex-col">
                <nav className="bg-white shadow-lg p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="text-xl font-bold">Leave Now</div>
                        <div className="flex space-x-4">
                            {/* Dropdown for selecting round-shaped images */}
                            <div className="relative inline-block">
                                <button
                                    className="bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow flex items-center leading-tight focus:outline-none focus:shadow-outline"
                                    onClick={toggleDropdown}
                                >
                                    <img src={selectedImage} alt={selectedImage} className="rounded-full w-8 h-8 mr-2" />
                                    <span className="truncate">Select Image</span>
                                </button>
                                {dropdownVisible && (
                                    <div className="absolute bg-white min-w-max shadow-lg z-10">
                                        {designImageConst.length > 0 && designImageConst.map((items) => (
                                            <div
                                                key={items.id}
                                                data-value={items.image}
                                                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                                                onClick={() => handleImageSelect(items.image, items.name)}
                                            >
                                                <img src={items.image} alt={items.name} className="rounded-full w-8 h-8 mr-2" />
                                                {items.name}

                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Dropdown for selecting theme colors */}
                            <div className="relative inline-block">
                                <button
                                    className="bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow flex items-center leading-tight focus:outline-none focus:shadow-outline"
                                    onClick={toggleDropdownTheme}
                                >
                                    <span class={`mr-2 inline-block rounded-full ${gradientClass} px-4 py-4 text-white`}> </span>
                                    <span className="truncate">Select Color</span>
                                </button>
                                {dropdownVisibleTheme && (
                                    <div className="absolute bg-white min-w-max shadow-lg z-10">
                                        {themeObjects.length > 0 && themeObjects.map((items) => (
                                            <div
                                                key={items.id}
                                                data-value={items.color_theme}
                                                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                                                onClick={() => {
                                                    colorThemeFun(items)
                                                }}
                                            >
                                                <span class={`mr-2 inline-block rounded-full ${items.color_theme} px-4 py-4 text-white`}> </span>
                                                {items.name}

                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav >
                <div className="flex justify-between items-center h-screen">
                    <TheamNewComp color={gradientClass} colTheme={isDark} />
                    <div className={`w-[700px] h-[350px] mt-2 mr-[80] ${gradientClass}`} style={{
                        // WebkitMaskImage: `url('/images/7.png')`,
                        maskImage: `url(${selectedImage})`,
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskComposite: 'source-in',
                    }}>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Navbar;
