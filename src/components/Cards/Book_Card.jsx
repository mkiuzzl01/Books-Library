import React from "react";

const Book_Card = ({ title, author, image }) => {
  console.log();

  return (
    <div className="flex  border-2 p-4 w-full h-56 rounded-md">
      <div className="w-2/5 h-full flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-center rounded-md" />
      </div>
      <div className="w-3/5 px-4 flex flex-col justify-between">
        <h1 className="text-lg font-semibold truncate">
          {title}
        </h1>
        <div className="text-sm">
          {author.map((auth, idx) => (
            <div key={idx} className="">
              <span><span className="font-bold text-yellow-800">Author: </span>{auth.name}</span>
            <br />
              <span><span className="font-bold text-yellow-700">Birth Year: </span>{auth.birth_year}</span>
              <br />
              <span><span className="font-bold text-yellow-700">Death Year: </span>{auth.death_year}</span>
            </div>
          ))}
        </div>
        <h5></h5>
      </div>
    </div>
  );
};

export default Book_Card;
