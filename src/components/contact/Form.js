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

  const handleInputChange = ({ e }) => {
    setFormValue({ ...formValue, [e?.target?.name]: e?.target?.value });
  };

  const validateForm = () => {
    const err = {};

    if (!formValue.name) {
      err.name = "Please enter your name";
    }

    if (!formValue.email) {
      err.name = "Please enter your email";
    }

    if (!formValue.subject) {
      err.name = "Please enter the subject";
    }

    if (!formValue.msg) {
      err.name = "Please enter your message";
    }

    if (Object.keys(err)?.length) {
      setErrors(err);
      return false;
    }

    setErrors(err);
    return true;
  };

  const onFormSubmit = () => {
    if (validateForm()) {
    }
  };

  return (
    <div className="w-[60%] flex flex-col gap-x-5 justify-between">
      <Title text="How Can I Help You?" width={200} />
      <div className="flex flex-wrap gap-x-5 mt-5">
        <div className="w-[40%] flex flex-col gap-y-5">
          <AppInput
            name="name"
            label="Name"
            placeholder="Full Name"
            type="text"
            isRequired
            values={formValue}
            errors={errors}
            handleInputChange={handleInputChange}
          />
          <AppInput
            name="email"
            label="Email"
            placeholder="Email Address"
            type="email"
            isRequired
            values={formValue}
            errors={errors}
            handleInputChange={handleInputChange}
          />
          <AppInput
            name="subject"
            label="Subject"
            placeholder="Subject"
            type="text"
            isRequired
            values={formValue}
            errors={errors}
            handleInputChange={handleInputChange}
          />
        </div>
        <AppInput
          name="msg"
          label="Message"
          placeholder="Message"
          type="textarea"
          height={190}
          isRequired
          values={formValue}
          errors={errors}
          handleInputChange={handleInputChange}
        />
      </div>
      <Button text="Send message" className={"mt-4"} onClick={onFormSubmit} />
    </div>
  );
};

export default Form;
