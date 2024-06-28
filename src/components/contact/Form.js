"use client";
import React from "react";
import Title from "../micro/Title";
import AppInput from "../container/AppInput";

const Form = () => {
  return (
    <div className="w-[60%] flex flex-wrap gap-x-5 justify-between">
      <Title text="How Can I Help You?" width={200} />
      <div className="flex flex-wrap gap-x-5">
        <div className="flex flex-col gap-y-3"></div>
        <AppInput type="" />
      </div>
    </div>
  );
};

export default Form;
