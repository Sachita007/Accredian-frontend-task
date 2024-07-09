import React from 'react'
import mic from "../assets/mic.png"

function GetInTouch() {
    return (
        <div id="getInTouch" className='flex justify-center mb-[5rem] items-center '>

            <div className='flex w-[80%] flex-col md:flex-row md:w-[70%] px-[2rem] md:px-[4rem] py-[3rem] justify-between rounded-3xl bg-[#1A73E8]'>
                <div className='flex gap-[2rem]'>
                    <img src={mic} width={"50px"}></img>
                    <div className='text-white '>
                        <div className='text-[1/5rem] font-semibold'>Want to delve deeper into the program?
                        </div>
                        <div>Share your details to receive expert insights from our program team!</div>

                    </div>
                </div>

                <div className='mt-[2rem] md:mt-0'> <button type="button" className="py-2.5 text-[#1A73E8] px-7 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Get In Touch ≻</button></div>
            </div>

        </div>
    )
}

export default GetInTouch