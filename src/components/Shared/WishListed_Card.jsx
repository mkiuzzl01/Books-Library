import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";

const WishListedCard = ({ book,handleRemove }) => {

  const { title, authors, formats, id, bookshelves } = book;

  return (
    <div className="flex flex-col md:flex-row border-2 p-4 h-auto  rounded-md">
      {/* the image section of the card */}
      <div className="flex items-center justify-center relative mb-4 md:mb-0 md:w-1/3">
        <img
          src={formats["image/jpeg"]}
          alt={title}
          loading="lazy"
          className="object-cover  md:w-full rounded-md"
        />
        <div className="absolute bottom-0 left-0 bg-gray-300 p-2 rounded-bl-md">
          {" "}
          <span>ID:</span>
          {id}
        </div>
      </div>

      {/* the content section of the card */}
      <div className="px-4 flex flex-col justify-between md:w-2/3">
        <div className="text-sm">
          <Link to={`/Book_Details/${id}`}><h1 title="View Details" className="py-2 text-lg font-semibold hover:text-blue-600">{title}</h1></Link>
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
        <div className="flex justify-end pt-5 md:mt-0">
          <button title="Remove" onClick={() => handleRemove(id)} className="text-2xl px-2 hover:text-yellow-500">
            <BiSolidLike></BiSolidLike>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListedCard;
