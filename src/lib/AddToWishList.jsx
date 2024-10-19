import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";

const AddToWishList = ({ book }) => {
  const handleAddToWishlist = (book) => {
    const info = book;
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const check = wishlist.find((wishlist) => wishlist.id == book.id);
    if (check) {
      return alert("Already Have");
    } else {
      wishlist.push(info);
      alert("Added the card")
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };

  return (
    <div>
      <button
        title="Add to Wishlist"
        onClick={() => handleAddToWishlist(book)}
        className="p-2 text-2xl hover:text-red-600"
      >
        <IoIosHeartEmpty></IoIosHeartEmpty>
      </button>
    </div>
  );
};

export default AddToWishList;
