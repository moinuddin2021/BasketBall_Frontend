import React from "react"
import image from "../../../public/CBL_Images/main-img-1.webp"
import { Link, Outlet } from 'react-router-dom'
import { RxArrowRight } from "react-icons/rx"


function LandingPage() {
    return (
        <div className="bg-gray-50 h-screen xl:px-10 py-5 md:py-10 lg:py-0 xl:py-0 flex xl:items-center justify-between ">
            <div className=" flex flex-col xl:flex-row justify-center xl:justify-between items-center  md:items-start   ">
                <div className=" z-40 space-y-2 sm:space-y-3 2xl:space-y-6 text-white font-sans mx-10 h-[100%] || pt-5 sm:mt-0 md:pt-5 lg:pt-14 xl:pt-16 2xl:pt-0 || 
                flex flex-col justify-start items-center sm:items-start md:items-start lg:items-start  ">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black xl:text-8xl font-semibold 2xl:text-[115px] font-serif uppercase">Corporate</h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-5xl 2xl:text-6xl font-semibold font-serif  text-[#ea592e]  uppercase ">BasketBall</h1>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-black 2xl:text-[115px] font-semibold font-serif uppercase ">League</h1>
                    <p className="text-center sm:text-start || sm:mr-80 md:w-[300px] lg:w-[350px] text-black xl:w-[500px] || text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-base  ||
                     py-2 ">Use in khelo India, khel mahakumb, state level tournament, district level tournament, inter university, any professional league.</p>
                    <Link className='Link' to={"/register"} >
                        <button type="submit" className="bg-[#ee6730]  relative inline-flex items-center border hover:border-[#ea592e] justify-center w-full px-4 py-1.5 sm:px-8 sm:py-[10px] 2xl:px-20 2xl:py-2 overflow-hidden font-medium tracking-tighter text-white hover:text-[#ee6730] rounded-lg cursor-pointer group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-lg group-hover:w-full group-hover:h-56"></span>
                            <span className="relative flex justify-center items-center flex-row">
                            Register
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="img absolute bottom-0 sm:bottom-0 md:bottom-0 right-5 xl:top-32 2xl:top-24 2xl:right-10  h-[280px] w-[400px] sm:h-[400px] sm:w-[380px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px] xl:h-[550px] xl:w-[550px] 2xl:h-[500px] 2xl:w-[500px]  ">
                    <img src={image} alt="landing" className="" />
                </div>
            </div>


        </div>
     
    );
}

export default LandingPage;