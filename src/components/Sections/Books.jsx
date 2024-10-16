import React, { useEffect, useState } from "react";
import Book_Card from "../Cards/Book_Card";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const getData = async () => {
    setLoading(true);
    const data = await fetch("https://gutendex.com/books");
    const { results } = await data.json();
    setBooks(results);
    return setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(search);
  console.log(select);

  return (
    <div>
      {/* this is filtering section for books */}
      <div className="my-10 flex justify-around">
        <div>
          <input
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            className="w-96 h-10 border-2 p-2"
            placeholder="Please Search Your Books"
          />
        </div>
        <div className="flex items-center justify-center absolute">
          {/* {
            loading && <h1>Loading....</h1>
          } */}
        </div>
        <div>
          <select
            onChange={(event) => setSelect(event.target.value)}
            value={select}
            className="border-2 h-10 p-2"
          >
            <option value="" disabled defaultChecked>
              Default
            </option>
            {books?.map((book) =>
              book?.bookshelves?.map((genre, idx) => (
                <option key={idx}>{genre.replace("Browsing:", "")}</option>
              ))
            )}
          </select>
        </div>
      </div>

      {/* this is books section */}
      <div>
        <div className="grid items-center gap-4 justify-items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-5">
          {books.map((book, idx) => (
            <Book_Card key={idx} book={book}></Book_Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
