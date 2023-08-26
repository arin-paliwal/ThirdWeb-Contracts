import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";
const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setisActive] = useState("dashboard");
  const [toggleDraweer, settoggleDraweer] = useState(false);
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] pl-6 h-[52px] hover:bg-[#bec3c7] cursor-pointer transition duration-200 bg-[#e5e5e5] rounded-[100px]">
        <input
          type="text"
          placeholder="Search..."
          className="flex w-full text-[14px] font-normal placeholder:text-[#4b5264] placeholder:text-[1rem] justify-center items-center bg-transparent outline-none text-white"
        />
        <div className="flex px-5 rounded-full bg-[#2c2f32] justify-center items-center cursor-pointer">
          <img
            src={search}
            alt="search"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
