import React, { useContext } from "react";
import Title from "../micro/Title";
import { certificates, resume_skills } from "@/utils/constants/constants";
import CertificateCard from "../cards/CertificateCard";
import Determinate from "../progressbars/Determinate";
import SkeletonCertificateCard from "../skeletons/cards/SkeletonCertificateCard";
import { PageContext } from "@/context/context.provider";
import SkeletonDeterminate from "../skeletons/progressbars/SkeletonDeterminate";

const Certificates = () => {
  const { isResumeLoaded } = useContext(PageContext);

  return (
    <div className="flex flex-col items-start mt-16">
      <Title text="Certificates" />
      <div className="w-full grid grid-cols-1 mt-7 gap-10 lg:grid-cols-2">
        {isResumeLoaded
          ? certificates?.map((item) => {
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
            })
          : [1, 2]?.map((item2) => {
              return <SkeletonCertificateCard key={item2} />;
            })}
      </div>
      <div className="w-full grid grid-cols-1 gap-10 mt-16 lg:grid-cols-2">
        {isResumeLoaded
          ? resume_skills?.map((item2) => {
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
            })
          : resume_skills?.map((item4) => {
              return (
                <div key={item4} className="w-full flex flex-col items-start">
                  <Title text={item4?.title} />
                  <div className="w-full flex flex-col items-start gap-y-8 mt-5">
                    {item4?.content?.slice(0, 3)?.map((item5) => {
                      return <SkeletonDeterminate key={item5} />;
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
