"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";

const Feature = () => {
  return (
    <>
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-6 md:px-10 2xl:px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20 cursor-pointer">

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
