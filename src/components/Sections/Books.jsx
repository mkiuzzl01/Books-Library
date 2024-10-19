import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Book_Card from "../Cards/Book_Card";
import Loading from "../Shared/Loading";
import Empty from "../Shared/Empty";

const Books = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const [forFilter, items] = useQueries({
    queries: [
      {
        queryKey: ["forFilter"],
        queryFn: async () => {
          const { data } = await axios.get("https://gutendex.com/books");
          return data.results;
        },
      },
      {
        queryKey: ["books", search, select],
        queryFn: async () => {
          const { data } = await axios.get(
            `https://gutendex.com/books?search=${search}&topic=${select}`
          );
          return data.results;
        },
      },
    ],
  });

  //for filtering
  const filtering = forFilter.data || [];
  const books = items.data || [];

  return (
    <div>
      <div className="flex justify-around py-4">
        <div>
          <input
            type="text"
            className="border-2 w-full p-2"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div>
          <select
            value={select}
            onChange={(event) => setSelect(event.target.value)}
            className="w-full p-2"
          >
            <option defaultValue="">Default</option>
            {filtering?.map((book) =>
              book?.bookshelves?.map((genre, idx) => (
                <option key={idx}>{genre.replace("Browsing:", "")}</option>
              ))
            )}
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        {items.isLoading && <Loading></Loading>}
        {books.length === 0 && !items.isLoading && <Empty></Empty>}
      </div>
      <div>
        <div className="flex justify-center">
          {books.isLoading && <Loading></Loading>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
          {books.map((book, idx) => (
            <Book_Card key={idx} book={book}></Book_Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
