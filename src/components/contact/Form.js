"use client";
import React, { useState } from "react";
import Title from "../micro/Title";
import AppInput from "../micro/AppInput";
import AppButton from "../micro/AppButton";
import { sendContactForm } from "@/lib/api";
import { toastFunction } from "@/utils/helpers/methods";

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = ({ target }) => {
    setFormValue({ ...formValue, [target?.name]: target?.value });
    if (target?.value?.length > 0) {
      const { [target?.name]: removedProperty, ...updatedErrors } = errors;
      setErrors(updatedErrors);
    } else {
      const err = errors;
      const isSubject = target?.name === "subject";
      err[target?.name] = `Please enter ${isSubject ? "the" : "your"} ${
        target?.name
      }`;
      setErrors(err);
    }
  };

  const validateForm = () => {
    const err = {};

    if (!formValue.name) {
      err.name = "Please enter your name";
    }

    if (!formValue.email) {
      err.email = "Please enter your email";
    }

    if (!formValue.subject) {
      err.subject = "Please enter the subject";
    }

    if (!formValue.msg) {
      err.msg = "Please enter your message";
    }

    if (Object.keys(err)?.length) {
      setErrors(err);
      toastFunction("Form is Incomplete!!!", "error");
      setIsLoading(false);
      return false;
    }

    setErrors(err);
    return true;
  };

  const onFormSubmit = async () => {
    setIsLoading(true);
    if (validateForm()) {
      const res = await sendContactForm(formValue);
      setFormValue({ ...prev, name: "", email: "", subject: "", msg: "" });
      toastFunction("Form Successfully Submitted!!!");
      toastFunction("Will contact u soon");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-x-5 mt-5 lg:mt-0">
      <Title text="How Can I Help You?" width={200} />
      <div className="flex flex-wrap relative gap-x-5 mt-5">
        <div className="w-full flex flex-col gap-y-5 lg:flex-1">
          <AppInput
            name="name"
            label="Name"
            placeholder="Full Name"
            type="text"
            isRequired
            isReadOnly={isLoading}
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
            isReadOnly={isLoading}
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
            isReadOnly={isLoading}
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
          containerClassName="mt-5 lg:flex-1 lg:mt-0"
          isRequired
          isReadOnly={isLoading}
          values={formValue}
          errors={errors}
          handleInputChange={handleInputChange}
        />
      </div>
      <AppButton
        text="Send message"
        isLoading={isLoading}
        className={"mt-6"}
        onClick={onFormSubmit}
      />
    </div>
  );
};

export default Form;
