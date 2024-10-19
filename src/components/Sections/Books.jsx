import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Book_Card from "../Cards/Book_Card";
import Loading from "../Shared/Loading";

const Books = () => {
  const [search,setSearch] = useState("");
  const [select,setSelect] = useState("");
  const { data: Books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await axios.get("https://gutendex.com/books");
      return data.results;
    },
  });

  console.log(Books);
  return (
    <div>
      <div>
        <div>
        <input type="text" className="border-2 w-full p-2" />
        </div>
        <div>
          <select>
            <option></option>
          </select>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
        {isLoading && <Loading></Loading>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
          {Books.map((book, idx) => (
            <Book_Card key={idx} book={book}></Book_Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
