// import React from 'react';

// function StickyBar() {
//     return (
//         <div className='fixed w-[797px] text-gray-700 py-[1rem] px-[4rem] rounded-full top-[8rem] left-1/2 transform -translate-x-1/2 bg-[#e6f0fc]'>
//             <ul className='flex justify-between text-[25px] gap-2'>
//                 <li className='text-black '>Refer</li>
//                 <li className='text-black '>Refer</li>
//                 <li className='text-black '>Refer</li>
//                 <li className='text-black'>Refer</li>
//             </ul>
//         </div>
//     );
// }

// export default StickyBar;


import { useState, useEffect } from 'react';

function StickyBar() {
    const [active, setActive] = useState(0);
    const [isSticky, setIsSticky] = useState(false);

    const handleClick = (index) => {
        setActive(index);
    };

    const navLinks = [
        { name: 'Refer', href: '#refer' },
        { name: 'Benefits', href: '#pricing' },
        { name: 'FAQs', href: '#faq' },
        { name: 'Support', href: '#footer' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            if (offset > 100) { // Adjust the offset value as needed
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log('isSticky:', isSticky); // Debugging: Log isSticky state

    return (
        <div className={`fixed z-50  left-1/2 transform -translate-x-1/2 w-[350px] sm:w-[700px] text-gray-700 sm:py-[1rem] sm:px-[4rem] px-[2rem] py-[.7rem] rounded-full bg-[#a0c3ee]  sm:bg-[#e6f0fc] ${isSticky ? 'top-[2rem]' : 'top-[6rem]'}`}>
            <ul className='flex pt-1 justify-between text-[13px] sm:text-[15px] md:text-[23px] gap-2'>
                {navLinks.map((link, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer flex flex-col items-center ${active === index ? 'text-blue-500' : 'text-black'}`}
                        onClick={() => handleClick(index)}
                    >
                        <a href={link.href}>
                            {link.name}
                        </a>
                        {active === index && <span className='w-1 h-1 lg:w-2 lg:h-2 bg-blue-500 rounded-full'></span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StickyBar;