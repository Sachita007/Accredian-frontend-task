import React from 'react';
import phone from "./../assets/phone.png";
import ReferBtn from './ReferBtn';

import circle from "./../assets/circle.png"
import icon1 from "./../assets/icon1.png"

function ReferSection() {
    return (
        <>
            <div id='refer' className='flex justify-center'>
                <div className=' overflow-hidden rounded-3xl bg-[#e6f0fc] w-[80%] lg:w-[75%] md:h-[450px] lg:h-[480px]  xl:h-[650px]  justify-center mt-20 md:mt-40 px-[2rem] '>
                    <div className='flex  flex-col justify-center items-center md:flex-row'>
                        <div className='text-center p-[3rem]   mb-[3rem] mt-[2rem] md:text-left md:mr-12'>
                            <div className=' text-[2.5rem] font-extrabold lg:text-[3.5rem] mb-4'>Let’s Learn & Earn</div>
                            <div className='text-[2rem] mb-2 md:mb-1'>Get a chance to win up-to <span className='text-[#1A73E8] text-[3rem] font-bold'> Rs. 15,000 </span></div>
                            <div className=''>{<ReferBtn />}</div>
                        </div>
                        <div className=''>
                            <img src={phone} alt="phone" width="900px" className='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-20 mb-20 w-full py-[3rem]  bg-[#e6f0fc] justify-center items-center'>
                <div className='mb-10'> How Do I Refer?</div>
                <div className='flex flex-col mt-20 mb-20 w-full py-[3rem] md:h-[500px] xl:h-[700px] bg-[#e6f0fc] flex justify-center items-center relative'>

                    {/* Background Image Container with Color */}
                    <div className='absolute inset-0 bg-[#e6f0fc] bg-cover bg-center    xl:h-[90%] z-0 hidden md:block' style={{ backgroundImage: `url(${circle})` }}></div>

                    {/* Content Container */}
                    <div className='z-10 flex  flex-col md:flex-row justify-center items-center gap-10 md:gap-[12rem] lg:gap-[14rem] xl:gap-[17rem]'>
                        {/* Content Blocks */}
                        <div className='z-50'>
                            <div className='flex justify-center items-center'>
                                <img src={icon1} alt="icon1" />
                            </div>
                            <div className='w-[200px] mt-5 text-center'>
                                Submit referrals easily via our website’s referral section.
                            </div>
                        </div>
                        <div className='z-50'>
                            <div className='flex justify-center items-center'>
                                <img src={icon1} alt="icon1" />
                            </div>
                            <div className='w-[200px] mt-5 text-center'>
                                Submit referrals easily via our website’s referral section.
                            </div>
                        </div>
                        <div className='z-50'>
                            <div className='flex justify-center items-center'>
                                <img src={icon1} alt="icon1" />
                            </div>
                            <div className='w-[200px] mt-5 text-center'>
                                Submit referrals easily via our website’s referral section.
                            </div>
                        </div>
                    </div>

                </div>
                <div>{<ReferBtn />}</div>
            </div>
        </>
    );
}

export default ReferSection;
