import React, { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import logo from "./../assets/logo.png"

const navLinks = [
    { title: 'Refer & Earn', url: '/' },
    { title: 'Resources', url: '/about' },
    { title: 'About us', url: '/services' },

];



const bgColor = 'bg-gray-800';
const modalColor = 'bg-gray-900';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleBarsIconClick = () => {
        toggleModal();
    };
    return (
        <>
            {!isMobile ? (
                // Laptop Navbar Code Here
                <nav className={``}>
                    <div className="flex justify-between mx-auto items-center py-4 px-[4rem] md:px-[8rem] lg:px-[15rem]">
                        <div className="flex gap-6 test-black font-bold text-xl"><img width={"120px"} src={logo}></img>
                            <button type="button" className="text-white bg-[#1A73E8] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Courses</button>
                        </div>

                        <ul className="flex gap-3 md:gap-9 items-center justify-center text-center cursor-pointer">
                            {navLinks.map((link, index) => (
                                <li key={index} className="test-black text-sm">{link.title}</li>
                            ))}
                            <div className='flex'>
                                <button type="button" className="text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Login</button>
                                <button type="button" className="text-white bg-[#1A73E8] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Try for free</button>
                            </div>
                        </ul>

                    </div>
                </nav>
            ) : (
                // Mobile Navbar Code Here
                <nav className={`py-4 px-4`}>
                    <div className="mx-auto flex justify-between items-center ">
                        <div className="test-black font-bold text-xl"><img width={"120px"} src={logo}></img></div>
                        <div className="flex mr-[20px] justify-end items-center gap-6 test-black cursor-pointer">
                            <button type="button" className="text-white sm:h-[2rem]   bg-[#1A73E8] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Courses</button>

                            {!showModal ? <FaBars onClick={handleBarsIconClick} className="test-black cursor-pointer" /> : <FaTimes
                                className="absolute top-6 right-4 test-black cursor-pointer"
                                onClick={toggleModal}
                                style={{ fontSize: '16px' }}
                            />}
                        </div>
                    </div>
                    {showModal && (
                        <div className=" z-50 fixed w-full flex justify-center items-center">



                            <div className="relative bg-white w-full">
                                <div className="flex flex-col gap-8 items-center justify-center h-full">
                                    {navLinks.map((link, index) => (
                                        <span key={index} className="test-black font-light text-2xl cursor-pointer">{link.title}</span>
                                    ))}
                                    <div className='flex'>
                                        <button type="button" className="text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Login</button>
                                        <button type="button" className="text-white bg-[#1A73E8] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Try for free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
}

export default Navbar;