import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Movies from "../../Pages/Movies";
import Series from "../../Pages/Series";
import MoviesDetails from "../../Pages/Details/MoviesDetails";
import SeriesDetails from "../../Pages/Details/SeriesDetails"

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filmes" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/details-filmes/:id" element={<MoviesDetails />} />
      <Route path="/details-series/:id" element={<SeriesDetails/>}/>
    </Routes>
  );
}
