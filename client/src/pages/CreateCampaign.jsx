import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { money } from "../assets";
import Button from "../components/Button";
import { checkIfImage } from "./../utils/index";
import { ethers } from "ethers";
import FormField from "../components/FormField";
const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    image: "",
    deadline: "",
  });
  const handleSubmit = () => {};
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 gap-4">
      {isLoading && "Loader"}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold text-[18px] text-white leading-[38px] sm:text-[25px]">
          Create Campaign
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Name*"
            placeholder="Enter your cool name"
            inputType="text"
            value={form.name}
            handleChange={() => {}}
          />
          <FormField
            labelName="Campaign Title*"
            placeholder="Enter a suitable title"
            inputType="text"
            value={form.title}
            handleChange={() => {}}
          />
        </div>
        <FormField
          labelName="Story"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={() => {}}
        />
      </form>
      <div className="w-full flex items-center justify-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
        <img
          src={money}
          alt="money"
          className="w-[40px] h-[40px] object-contain"
        />
        <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
          You will get 100% of the amount raised
        </h4>
      </div>
    </div>
  );
};

export default CreateCampaign;
