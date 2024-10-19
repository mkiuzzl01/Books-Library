import React from "react";

const AddToWishList = ({ book }) => {
  const handleAddToWishlist = (book) => {
    const info = book;
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push(info);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  return (
    <div>
      <button
        onClick={() => handleAddToWishlist(book)}
        className="p-2 bg-yellow-300 hover:bg-yellow-400"
      >
        Add to wishlist
      </button>
    </div>
  );
};

export default AddToWishList;
