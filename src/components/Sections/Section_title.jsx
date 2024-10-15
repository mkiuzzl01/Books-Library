import React from "react";

const Section_title = ({ heading, subHeading }) => {
  return (
    <div className="py-10 px-5 text-center bg-[#EDDFE0]">
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <hr className="w-3/4 m-auto " />
      <p>{subHeading}</p>
    </div>
  );
};

export default Section_title;
