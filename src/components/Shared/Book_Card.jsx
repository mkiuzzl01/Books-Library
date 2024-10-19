import React from "react";
import AddToWishList from "../../lib/AddToWishList";
import { Link } from "react-router-dom";

const Book_Card = ({ book }) => {
  const { title, authors, formats, id, bookshelves } = book;

  // console.log(book);
  return (
    <div className="flex border-2 p-4 w-full h-80 rounded-md">
      {/* the image section of the card */}
      <div className="w-2/5 h-full flex items-center justify-center relative">
        <img
          src={formats["image/jpeg"]}
          alt={title}
          loading="lazy"
          className="w-full h-full object-center rounded-md"
        />
        <div className="absolute bottom-0 left-0 bg-gray-300 p-2 rounded-bl-md">
          {" "}
          <span>ID:</span>
          {id}
        </div>
      </div>

      {/* the content section of the card */}
      <div className="w-3/5 px-4 flex flex-col justify-around">
        <div className="text-sm">
          <h1 className="text-lg font-semibold truncate">{title}</h1>
          {authors.map((auth, idx) => (
            <div key={idx} className="">
              <span>
                <span className="font-bold text-yellow-800">Author: </span>
                {auth.name}
              </span>
              <br />
              <span>
                <span className="font-bold text-yellow-700">Birth Year: </span>
                {auth.birth_year}
              </span>
              <br />
              <span>
                <span className="font-bold text-yellow-700">Death Year: </span>
                {auth.death_year}
              </span>
            </div>
          ))}
        </div>
        <div>
          <span className="font-bold text-yellow-700">Genre:</span>
          <div className="text-sm">
            {bookshelves.map((genre, idx) => (
              <span key={idx}>{genre.replace("Browsing:", "")}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <AddToWishList book={book}></AddToWishList>
        </div>
      </div>
    </div>
  );
};

export default Book_Card;
