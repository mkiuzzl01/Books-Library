import React from "react";

const Section_title = ({ heading, subHeading }) => {
  return (
    <div className="py-10 px-5 flex flex-col items-center text-center bg-[#FAF7F0]">
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <div className='border-b-2 border-[#433878] w-4/5 my-5'></div>
      <p>{subHeading}</p>
    </div>
  );
};

export default Section_title;
