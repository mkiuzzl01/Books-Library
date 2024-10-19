import { useState } from "react";
import Empty from "../Shared/Empty";
import WishListedCard from "../Shared/WishListed_Card";

const Wishlist = () => {
  const books = localStorage.getItem("wishlist");
  const [wishListed, setWishListed] = useState(JSON.parse(books) || []);

  const handleRemove = (id) => {
    const items = wishListed.filter((book) => book.id !== id);

    localStorage.setItem("wishlist", JSON.stringify(items));
    setWishListed(items);
  };

  return (
    <div>
      {wishListed.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {wishListed.map((book, idx) => (
            <WishListedCard
              book={book}
              key={idx}
              handleRemove={handleRemove}
            ></WishListedCard>
          ))}
        </div>
      ) : (
        <Empty></Empty>
      )}
    </div>
  );
};

export default Wishlist;
