import React from "react";
import Title from "../micro/Title";
import { certificates, resume_skills } from "@/utils/constants/constants";
import CertificateCard from "../cards/CertificateCard";
import Determinate from "../progressbars/Determinate";

const Certificates = () => {
  return (
    <div className="flex flex-col items-start mt-16">
      <Title text="Certificates" />
      <div className="w-full grid grid-cols-1 mt-7 gap-10 lg:grid-cols-2">
        {certificates?.map((item) => {
          return (
            <CertificateCard
              key={item}
              image={item?.image}
              title={item?.title}
              conducted_by={item?.conducted_by}
              project_name={item?.project_name}
              date={item?.date}
            />
          );
        })}
      </div>
      <div className="w-full grid grid-cols-1 gap-10 mt-16 lg:grid-cols-2">
        {resume_skills?.map((item2) => {
          return (
            <div key={item2} className="w-full flex flex-col items-start">
              <Title text={item2?.title} />
              <div className="w-full flex flex-col items-start gap-y-4 mt-5">
                {item2?.content?.map((item3) => {
                  return (
                    <Determinate
                      key={item3}
                      title={item3?.title}
                      percentage={item3?.percentage}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
