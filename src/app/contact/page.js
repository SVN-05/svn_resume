import React from "react";
import AppContainer from "@/components/container/AppContainer";
import InPageNavBar from "@/components/layouts/InPageNavBar/InPageNavBar";
import Map from "@/components/micro/Map";
import { contactDetails } from "@/utils/constants/constants";
import ContactleftContent from "@/components/contact/ContactleftContent";
import Form from "@/components/contact/Form";

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <InPageNavBar title="Contact" rightSideText="Get In Touch" />
      <AppContainer className={"flex flex-col pb-20 mt-20"}>
        <Map url={contactDetails?.mapLink} height={200} />
        <div className="flex flex-wrap items-start gap-x-5 mt-10 justify-between">
          <ContactleftContent />
          <Form />
        </div>
      </AppContainer>
    </div>
  );
};

export default Contact;
