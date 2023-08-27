import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";
const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setisActive] = useState("dashboard");
  const [toggleDraweer, settoggleDraweer] = useState(true);
  const address = "0X89dr6";
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] pl-6 h-[52px] bg-[#1c1c24] cursor-pointer transition duration-200  rounded-[100px]">
        <input
          type="text"
          placeholder="Search..."
          className="flex w-full text-[14px] font-normal placeholder:text-[#4b5264] placeholder:text-[1rem] justify-center items-center bg-transparent outline-none text-white"
        />
        <div className="flex px-5 rounded-full bg-[#2c2f32] justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="object-contain" />
        </div>
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <Button
          btnType="button"
          title={address ? "Create a Campaign" : "Connect"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) navigate("/create-campaign");
            else "connect()";
          }}
        />
        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img
              src={thirdweb}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
      </div>
      {/* Small Screen */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img
            src={thirdweb}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] cursor-pointer object-contain"
          onClick={() => settoggleDraweer(!toggleDraweer)}
        />
        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${toggleDraweer ?"-translate-y-[100vh]":"translate-y-0"} transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${
                  isActive === link.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setisActive(link.name);
                  settoggleDraweer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${isActive===link.name?"grayscale-0":"grayscale"}`}
                />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex mx-4">
          <Button
          btnType="button"
          title={address ? "Create a Campaign" : "Connect"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) navigate("/create-campaign");
            else "connect()";
          }}
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
