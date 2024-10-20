import React from "react";
import Banner from "../Sections/banner";
import Section_title from "../Sections/section_title";
import Books from "../Sections/Books";

const Home = () => {
  return (
    <div>
      {/* this is banner section */}
      <Banner></Banner>
      {/* this section title */}
      <Section_title
        heading={"Explore Our Curated Collection"}
        subHeading={
          <>
            Dive into a diverse selection of books spanning every genre.
            <br></br>Whether you're seeking knowledge, adventure, or
            inspiration, we have something for every reader
          </>
        }
      ></Section_title>
      {/* the books section */}
     <Books></Books>
    </div>
  );
};

export default Home;
