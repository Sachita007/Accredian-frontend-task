import React from 'react'

function FAQ() {
    return (
        <div id='faq'>
            <div className='flex flex-col mt-[5rem] mb-[5rem] justify-center items-center'>
                <div className='text-[2.5rem]  font-medium'>Frequently Asked <span className='text-[#1A73E8]'>Questions </span></div>
                <div className='flex md:flex-row flex-col justify-center gap-[3rem] items-center mt-[3rem]'>
                    <div className='flex flex-col '>
                        <button type="button" className="py-2.5 text-[#1A73E8] px-7 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Eligibility</button>
                        <button type="button" className="py-2.5 px-7 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">How to Use?</button>
                        <button type="button" className="py-2.5 px-7 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Terms & Conditions</button></div>
                    <div className='w-[50%] flex  flex-col gap-[1rem]'>
                        <div className='text-[#1A73E8]'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</div>
                        <div className=' text-gray-600'>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                            suitable for individuals from any field of work.</div>
                        <div className='text-black'>What is the minimum system configuration required?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ