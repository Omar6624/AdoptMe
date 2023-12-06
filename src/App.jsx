import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDom from "react-dom/client";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt me</Link>
      </header>
      <Routes>
        <Route path="/detail/:id " element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(React.createElement(App));
