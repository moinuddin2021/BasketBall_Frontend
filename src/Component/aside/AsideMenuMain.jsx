import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import DropDownmenu from "./DropDownmenu";
import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";

function AsideMenuMain() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full relative">
      <div className="py-3 bg-black  px-5 lg:px-9 flex sticky top-0 items-center justify-between w-full z-[9999]">
        <div className="w-[18%] sm:w-[10%] md:w-[8%] xl:w-[6%] 2xl:w-[4%] ">
          <img
            src="/CBL_Images/logo.png"
            alt=""
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="hidden md:block">
          <ul className="items-center flex flex-col md:flex-row justify-start lg:justify-center md:space-x-5 lg:space-x-8">
            <li className="nav-item">
              <Link className="Link" to={"/"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                  Home
                </h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="Link" to={"/team/list"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                  Teams
                </h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="Link" to={"/tournaments"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                  Tournaments
                </h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="Link" to={"/news"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                  News
                </h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="Link" to={"/gallery"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-4 md:my-0">
                  Gallery
                </h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="Link" to={"/registration"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-4 md:my-0">
                  Registration
                </h1>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={` font-semibold text-gray-800 pb-10 lg:pb-0 lg:space-y-10 fixed
                     z-50  pl-9 md:pl-0 right-0 w-full md:w-72 md:h-screen bg-black lg:pr-0  flex flex-col justify-start items-start lg:justify-start md:items-center
                     duration-500 ease-in ${
                       open
                         ? "top-[60px] opacity-100"
                         : " top-14  right-[-500px] lg:opacity-100 opacity-0"
                     }`}
        >
          <ul className="items-start flex flex-col justify-start lg:justify-center md:items-center lg:space-y-10 md:pt-5 ">
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <Link className="Link" to={"/"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] md:my-6 lg:my-0">
                  Home
                </h1>
              </Link>
            </li>
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <Link className="Link" to={"/team/profile"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Teams
                </h1>
              </Link>
            </li>
            <li
              className="nav-item hidden md:block"
              onClick={() => setOpen(!open)}
            >
              <Link className="Link" to={"/About"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  About
                </h1>
              </Link>
            </li>
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <Link className="Link" to={"/tournaments"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Tournament
                </h1>
              </Link>
            </li>
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <Link className="Link" to={"/news"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  News
                </h1>
              </Link>
            </li>
            <li className="nav-item " onClick={() => setOpen(!open)}>
              <Link className="Link" to={""}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Highlight
                </h1>
              </Link>
            </li>
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <Link className="Link" to={"/gallery"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Gallery
                </h1>
              </Link>
            </li>
            <li className="nav-item" onClick={() => setOpen(!open)}>
              <Link className="Link" to={"/contact"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Contact
                </h1>
              </Link>
            </li>
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <Link className="Link" to={"/About"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  About
                </h1>
              </Link>
            </li>
            <li className="nav-item md:hidden " onClick={() => setOpen(!open)}>
              <Link className="Link" to={"/role"}>
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Registration
                </h1>
              </Link>
            </li>
          </ul>
          <div className="flex justify-center space-x-7 pt-10">
            <AiFillInstagram className=" rounded-full hover:text-white hover:bg-[#ee6730] text-[26px] bg-white text-[#ee6730] h-10 w-10 p-2 duration-200 hover:scale-110 cursor-pointer" />
            <FaFacebookSquare className=" rounded-full hover:text-white hover:bg-[#ee6730] text-[26px] bg-white text-[#ee6730] h-10 w-10 p-2 duration-200 hover:scale-110 cursor-pointer" />
            <AiOutlineTwitter className=" rounded-full hover:text-white hover:bg-[#ee6730] text-[26px] bg-white text-[#ee6730] h-10 w-10 p-2 duration-200 hover:scale-110 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-5">
          <div className="">
            <DropDownmenu />
          </div>
          <div
            className=" px-1 py-[2px]  rounded-md"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <RxCross1 className="text-slate-400 hover:text-white  cursor-pointer text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-slate-400 hover:text-white  cursor-pointer text-2xl" />
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F7] w-full  -z-50  ">
        <Outlet />
      </div>
    </div>
  );
}
export default AsideMenuMain;
