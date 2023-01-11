import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import { logo } from "../assets";

const Searchbar = () => (
  <form autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
    <label htmlFor="search-field" className="sr-only">
      Search all songs
    </label>
    <div className="flex flex-row justify-start items-center">
      <img src={logo} className="w-20 h-20 p-4"/>
      <p className="font-bold text-4xl text-white text-left flex-1 bg-transparent border-none outline-none"> 
      Crescendo 
      </p>
    </div>
  </form>
);

export default Searchbar;
