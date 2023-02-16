import React from 'react'
import {MdDateRange} from "react-icons/md"
import  {FaLocationArrow} from "react-icons/fa"
import "./style.css"
import Headinng from "../Heading";

const index = () => {
  return (
    <>
    <section className='min-h-screen-fit'>
        <div className='mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32'>
        <Headinng text="Live matches"/>
        <div id="carouselExampleCaptions" className="carousel slide relative mx-auto w-full" data-bs-ride="carousel">
            <div className='carousel-inner relative w-full overflow-hidden'>
                <div className='carousel-item active relative float-left w-full'>
                    
                        <div className='card-bg-img transition-all duration-300 ease-in-out cursor-pointer h-full p-20 bg-gray-400 shadow-lg rounded-lg overflow-hidden'>
                            <div className='grid grid-cols-12'>
                                <div className='left-content flex justify-center items-center col-span-5 lg:ml-auto'>
                                    <h1 className='m-5 capitalize font-normal text-white lg:text-4xl sm:text-xl text-ellipsis overflow-hidden line-clamp-1'>Real Soccer</h1>
                                    <img src="/CBL_Images/tournament_logo_1.webp" alt="team_logo" className='lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-16 sm:w-16 h-10 w-10 rounded-full'/>
                                </div>
                                    <span className='lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold text-[#ee6730] flex items-center justify-center col-span-2'>VS</span>
                                <div className='right-content flex justify-center items-center col-span-5 lg:mr-auto'>
                                    <img src="/CBL_Images/tournament_logo_2.webp" alt="team_logo" className='lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-16 sm:w-16 h-10 w-10 rounded-full'/>
                                    <h1 className='m-5 capitalize font-normal text-white lg:text-4xl sm:text-xl text-ellipsis overflow-hidden line-clamp-1'>Valencia</h1>
                                </div>
                            </div>
                            <div className='details lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center text-center text-white lg:m-10'>
                                <h1 className='flex justify-center items-center font-normal m-2'><MdDateRange className='m-2'/> November 12,2023</h1>
                                <h1 className='flex justify-center items-center font-normal m-2'><FaLocationArrow className='m-2'/> Santiago Bernabéu Stadium</h1>
                            </div>
                            <div class="flex space-x-2 justify-center">
                                <div>
                                    <button type="button" class="inline-block px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 bg-transparent border-2 border-[#ee6730] text-white hover:text-[#ee6730] font-medium text-xs leading-tight uppercase rounded-full shadow-md  transition duration-150 ease-in-out">Matche Info</button>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    </section>
    </>
  )
}

export default index