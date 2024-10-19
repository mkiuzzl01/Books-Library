import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Book_Card from "../Shared/Book_Card";
import Loading from "../Shared/Loading";
import Empty from "../Shared/Empty";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Books = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [page, setPage] = useState(1);

  const [items,forFilter] = useQueries({
    queries: [
      {
        queryKey: ["books", search, select, page],
        queryFn: async () => {
          const { data } = await axios.get(
            `https://gutendex.com/books?page=${page}&search=${search}&topic=${select}`
          );
          return data.results;
        },
        enabled: !!search || !!select || !!page,
      },
      {
        queryKey: ["forFilter"],
        queryFn: async () => {
          const { data } = await axios.get("https://gutendex.com/books");
          return data.results;
        },
      }
    ],
  });

  // console.log(page);
  //for filtering
  const filtering = forFilter.data || [];
  const books = items.data || [];

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around p-5">
        {/* for searching */}
        <div>
          <input
            type="text"
            className="border-2 w-96 p-2 rounded-lg"
            placeholder="Search Here"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        {/* //for select filter */}
        <div>
          <select
            value={select}
            onChange={(event) => setSelect(event.target.value)}
            className="w-96 border-2 p-2 rounded-lg"
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
      {/* //for for status */}
      <div className="flex justify-center">
        {items.isLoading && <Loading></Loading>}
        {books.length === 0 && !items.isLoading && <Empty></Empty>}
      </div>
      {/* //for each books */}
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
      {/* for pagination */}
      <div>
        <div className="flex justify-center my-10">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="flex items-center py-1 px-6 bg-green-400 mx-2 hover:bg-green-600"
          >
            <span>
              <FaArrowLeftLong></FaArrowLeftLong>
            </span>
            <span className="ms-1">Prev</span>{" "}
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="flex items-center py-1 px-6 bg-green-400 mx-2 hover:bg-green-600"
          >
            <span> Next </span>{" "}
            <span className="ms-1">
              <FaArrowRightLong></FaArrowRightLong>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
