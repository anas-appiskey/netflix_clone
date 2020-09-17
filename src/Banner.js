// import Axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "./urlPath/axios";
import request from "./request";
import "./Banner.css";
function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setMovies(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <button className="banner__button">Play </button>
        <button className="banner__button">My List</button>
        <h1 className="banner__description">
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </div>
  );
}

export default Banner;
