import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[40rem]">
      <img
        src="https://i.ibb.co.com/tM1BN3Z/morgan-harper-nichols-OMXPr-CAhxr-E-unsplash.jpg"
        alt=""
        className="w-full h-full object-center"
      />

      <div className="absolute inset-0 flex items-center px-10 bg-white bg-opacity-30">
        <div className="text-black space-y-4">
          <h1 className="text-5xl font-bold text-[#433878]">Unleash Your Imagination</h1>
          <p className="text-xl font-semibold">
            Discover a world of stories, knowledge, and inspiration.
            <br /> From timeless classics to the latest bestsellers, your next
            great read is just a page away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
