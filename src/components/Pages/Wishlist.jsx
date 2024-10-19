import Book_Card from "../Shared/Book_Card";
import Empty from "../Shared/Empty";
import WishListedCard from "../Shared/WishListed_Card";

const Wishlist = () => {
  const books = localStorage.getItem("wishlist");
  const wishListed = JSON.parse(books);

  console.log(wishListed);

  return (
    <div>
      {wishListed.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {wishListed.map((book, idx) => (
            <WishListedCard book={book} key={idx}></WishListedCard>
          ))}
        </div>
      ) : (
        <Empty></Empty>
      )}
    </div>
  );
};

export default Wishlist;
