"use client";
import React, { useState } from "react";
import Title from "../micro/Title";
import AppInput from "../micro/AppInput";
import Button from "../micro/Button";

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const [errors, setErrors] = useState({});

  return (
    <div className="w-[60%] flex flex-col gap-x-5 justify-between">
      <Title text="How Can I Help You?" width={200} />
      <div className="flex flex-wrap gap-x-5 mt-5">
        <div className="w-[40%] flex flex-col gap-y-5">
          <AppInput
            name="name"
            placeholder="Full Name"
            type=""
            errors={errors}
          />
          <AppInput
            name="email"
            placeholder="Email Address"
            type=""
            errors={errors}
          />
          <AppInput
            name="subject"
            placeholder="Subject"
            type=""
            errors={errors}
          />
        </div>
        <AppInput
          name="msg"
          inputClassName="text-start"
          placeholder="Message"
          height={190}
          type="textarea"
          errors={errors}
        />
      </div>
      <Button text="Send message" className={"mt-4"} />
    </div>
  );
};

export default Form;
