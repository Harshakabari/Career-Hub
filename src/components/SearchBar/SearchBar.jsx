import { Input, Button } from "reactstrap";
import { IoLocationOutline, IoSearchSharp } from "react-icons/io5";
import React, { useState } from 'react';

export default function Searchbar({ onSearch }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(title, location);
  };

  return (
    <div className="grid grid-cols-3 mb-8 gap-5 overflow-x-hidden">
      <div className="relative flex items-center">
        <IoSearchSharp className="absolute ml-2 p-1 w-7 h-7 rounded-md bg-zinc-200" />
        <Input
          type="search"
          placeholder="Search..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="pl-11 w-full py-2 rounded-md border border-gray-200 focus:border-gray-400 focus:ring-0"
        />
      </div>
      <div className="relative flex items-center">
        <IoLocationOutline className="absolute ml-2 p-1 w-7 h-7 rounded-md bg-zinc-200" />
        <Input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="pl-11 w-full py-2 rounded-md border border-gray-200 focus:border-gray-400 focus:ring-0"
        />
      </div>
      <Button onClick={handleSearch} className="bg-blue-500 rounded-lg text-white w-60">
        Search
      </Button>
    </div>
  );
}
