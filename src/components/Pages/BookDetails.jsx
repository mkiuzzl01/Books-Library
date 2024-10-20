import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import Empty from "../Shared/Empty";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    const books = localStorage.getItem("wishlist");
    const items = JSON.parse(books);

    const item = items.find((itm) => itm.id == id);
    setBook(item || null);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [id]);

  // console.log(book);
  if (loading) return <Loading></Loading>;
  if (!book) return <Empty></Empty>;

  return (
    <div className="md:py-5 flex justify-center items-center">
      <div className=" w-full lg:w-4/6 flex flex-col md:flex-row justify-evenly items-center lg:border-2  p-5 rounded-lg">
        <div className="md:w-72">
          <img
            src={book.formats?.["image/jpeg"]}
            alt={book.title}
            className="w-full h-full object-center"
          />
        </div>
        <div className="mt-3 md:mt-0">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
            {book?.title}
          </h1>
          <div className="my-2 flex">
            {/* for each subject */}
            <span className="text-xl font-normal me-4">Subjects</span>
            <ul className="list-decimal list-inside">
              {book.subjects.map((subject) => (
                <li>{subject}</li>
              ))}
            </ul>
          </div>
          <div>
            {/* for is author */}
            <span className="text-xl font-normal me-4">Author</span>
            <ul className="list-disc list-inside">
              {book.authors.map((author) => (
                <li>{author.name}</li>
              ))}
            </ul>
          </div>
          <div className="my-1">
            <p>
              <span className="text-xl font-normal">Total Download :</span>{" "}
              {book.download_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
