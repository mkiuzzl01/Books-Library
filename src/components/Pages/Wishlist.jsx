import { useState } from "react";
import Empty from "../Shared/Empty";
import WishListedCard from "../Shared/WishListed_Card";
import Toast from "../Shared/Toast";

const Wishlist = () => {
  const books = localStorage.getItem("wishlist");
  const [wishListed, setWishListed] = useState(JSON.parse(books) || []);

  const handleRemove = (id) => {
    const items = wishListed.filter((book) => book.id !== id);

    localStorage.setItem("wishlist", JSON.stringify(items));
    Toast("warning",'Removed',"the card removed from wishlist");
    setWishListed(items);
  };


  return (
    <div className="p-5">
      {wishListed.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {wishListed.map((book, idx) => (
            <WishListedCard
              book={book}
              key={idx}
              handleRemove={handleRemove}
            ></WishListedCard>
          ))}
        </div>
      ) : (
        <div className="pt-24">
          <Empty></Empty>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
