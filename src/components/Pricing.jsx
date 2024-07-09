import ReferBtn from "./ReferBtn"

function Pricing() {
    return (
        <section id="pricing" className="text-black body-font">
            <div className="container px-5  mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">What Are <span className="text-[#1A73E8]"> The Referral Benefits? </span></h1>

                </div>
                <div className="flex justify-center  sm:pl-0  pb-[4rem] sm-pr-0 gap-5 w-full lg:w-[100%] mx-auto overflow-x-auto ">
                    <table className="table-auto w-[25%] md:w-[18%] text-left shadow-2xl ">
                        <thead>
                            <tr className="border-b-2 bg-[#1A73E8] border-gray-200 rounded-2xl">
                                <th className="px-4 py-6 title-font bg-[#1A73E8] tracking-wider font-medium text-white text-sm rounded-tl-lg rounded-tr-lg">Programs & Referral Bonus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="px-4 py-3">Professional Certificate</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="px-4 py-3">Advanced Program in</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="px-4 py-3">Data Science and Machine</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="px-4 py-3">Full Stack Web Development</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 rounded-bl-2xl rounded-br-2xl">Additional Program</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table-auto w-[80%] sm:w-[70%] md:w-[60%] text-left whitespace-no-wrap shadow-2xl rounded-2xl">
                        <thead>
                            <tr className="border-b-2 border-gray-200">
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-black text-sm bg-[#afcef7] rounded-tl-2xl">Programs</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-black text-sm bg-[#afcef7]">Referral Bonus</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-black text-sm bg-[#afcef7] rounded-tr-2xl">Referral Bonus</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className="border-b border-gray-200">
                                <td className="px-4 py-3 bg-[#f8fbff]">Professional Certificate Program in Product Management</td>
                                <td className="px-4 py-3 bg-[#f8fbff]">₹ 7,000</td>
                                <td className="px-4 py-3 bg-[#f8fbff]">₹ 7,000</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="px-4 py-3 bg-[#f8fbff]">Professional Certificate Program in Product Management</td>
                                <td className="px-4 py-3 bg-[#f8fbff]">₹ 7,000</td>
                                <td className="px-4 py-3 bg-[#f8fbff]">₹ 7,000</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="px-4 py-3 bg-[#f8fbff]">Professional Certificate Program in Product Management</td>
                                <td className="px-4 py-3 bg-[#f8fbff]">₹ 7,000</td>
                                <td className="px-4 py-3 bg-[#f8fbff]">₹ 7,000</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="px-4 py-3 bg-[#f8fbff] rounded-bl-2xl">Professional Certificate Program in Product Management</td>
                                <td className="px-4 py-3 bg-[#f8fbff]">₹ 7,000</td>
                                <td className="px-4 py-3 bg-[#f8fbff] rounded-br-2xl">₹ 7,000</td>
                            </tr>
                        </tbody>

                    </table>


                </div>

                <div className="flex justify-around">

                    <button type="button" className="text-gray-900  md:ml-[49rem] bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Show More ᴠ</button>


                </div>
                <div className="flex justify-center"><ReferBtn /></div>
            </div>

        </section>

    )
}

export default Pricing