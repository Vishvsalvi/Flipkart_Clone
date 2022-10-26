import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TaskContext } from "../App";

const NewNav = ({ count }) => {
  const { state } = useContext(TaskContext);
  const logOut = ()=>{
    
  }

  return (
    <div className="fixed flex z-50 2xl:px-[27em] top-0  bg-[#2874F4] justify-around py-2 md:px-11  sm:py-2 lg:px-[21em] px-[2rem] w-[100%]">
      <NavLink
        to="/"
        className=" lg:pt-0 lg:pl-0 items-center shrink-0 lg:shrink-0  lg:w-20 mr-3 flex"
      >
        <img
          className="w-20 xl:w-20  lg:mr-4 lg:w-[29em] pt-2 pl-2 "
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
        />
      </NavLink>
      <div className="flex drop-shadow-lg">
        {/* SEARCH  */}
        <div className=" w-[7em] sm:w-[20em] md:w-80  lg:w-[29em] text-center  ">
          <form>
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className=" w-full font-medium text-sm sm:text-sm px-5 py-2 focus:outline-none focus:ring border-white border rounded-l-sm placeholder-gray-500 placeholder:bold "
            />
          </form>
        </div>
        <div>
          <div className="bg-white pr-1 sm:px-1 pt-1 hover:cursor-pointer text-[#2874F4] font-medium text-2xl border-white border rounded-r-sm ">
            <ion-icon name="search"></ion-icon>
          </div>
        </div>
      </div>
      {/* <p className="px-2 sm:px-4 py-1 text-white font-medium  rounded-sm mx-2 drop-shadow-lg" >Hello,vishvsalvi</p> */}

        {state.user ? (
          <button onClick={logOut} className="bg-white px-2 sm:px-8 py-1 text-[#2874F4] font-medium border rounded-sm mx-2 drop-shadow-lg">
            Logout
          </button>
        ) : (
          <NavLink to="/login">
          <button className="bg-white px-2 sm:px-8 py-1 text-[#2874F4] font-medium border rounded-sm mx-2 drop-shadow-lg">
            Login
          </button>
            </NavLink>
        )}
      <NavLink
        to="/cart"
        className="text-white font-medium text-md flex pt-1 hover:cursor-pointer"
      >
        <span className="text-xl ">
          <ion-icon size="medium" color="white" name="cart"></ion-icon>
        </span>
        {/* add count logic here */}
        <span className="">
          Cart
          {state.items.length ? (
            <sup className="text-[#2874F4] bg-white rounded-lg ml-1 px-1">
              {state.items.length}
            </sup>
          ) : (
            ""
          )}
        </span>
      </NavLink>
    </div>
  );
};

export default NewNav;
