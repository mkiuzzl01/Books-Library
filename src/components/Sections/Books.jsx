import React, { useEffect, useState } from "react";
import Book_Card from "../Cards/Book_Card";

const Books = () => {
  const [books, setBooks] = useState([]);

  const getData = async () => {
    const data = await fetch("https://gutendex.com/books");
    const { results } = await data.json();
    setBooks(results);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(books);

  return (
    <div>
      <div>
        <div className="grid items-center gap-4 justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 m-5">
          {books.map((book, idx) => (
            <Book_Card key={idx} title={book?.title} formats={book?.formats} author={book?.authors} image={book?.formats?.['image/jpeg']}></Book_Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
