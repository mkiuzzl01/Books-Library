import { IoIosHeartEmpty } from "react-icons/io";
import Toast from "../components/Shared/Toast";

const AddToWishList = ({ book }) => {
  const handleAddToWishlist = (book) => {
    const info = book;
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const check = wishlist.find((wishlist) => wishlist.id == book.id);
    if (check) {
      return Toast(
        "warning",
        "Already Exist",
        "The Card Already Exist Wishlist"
      );
    } else {
      wishlist.push(info);
      Toast("success", "Added", "The Card Added Wishlist");
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
