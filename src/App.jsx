import React from "react";
import Mc from "./components/Mc";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const movies = [
    {
      title: "Interstellar",
      rating: "8.7",
      genre: "Sci-Fi",
      image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },

    {
      title: "Inception",
      rating: "8.8",
      genre: "Action",
      image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },

    {
      title: "Batman",
      rating: "8.4",
      genre: "Action",
      image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
    {
      title: "Joker",
      rating: "8.4",
      genre: "Crime",
      image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },

    {
      title: "Avengers Endgame",
      rating: "8.4",
      genre: "Action",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },

    {
      title: "The Dark Knight",
      rating: "9.0",
      genre: "Action",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },

    {
      title: "Fight Club",
      rating: "8.8",
      genre: "Drama",
      image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    },

    {
      title: "John Wick",
      rating: "7.4",
      genre: "Action",
      image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    },

    {
      title: "Oppenheimer",
      rating: "8.5",
      genre: "Biography",
      image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    },

    {
      title: "The Matrix",
      rating: "8.7",
      genre: "Sci-Fi",
      image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },

    {
      title: "Spider-Man",
      rating: "8.2",
      genre: "Superhero",
      image: "https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
    },

    {
      title: "Parasite",
      rating: "8.5",
      genre: "Thriller",
      image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    },

    {
      title: "Whiplash",
      rating: "8.5",
      genre: "Drama",
      image: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    },
  ];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-slate-900 p-10">
      <nav className="flex justify-between items-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-red-500">
MovieZone 🎬
        </h1>
        <button className="bg-red-500 px-4 py-2 rounded-lg text-white">
          Login</button> 
      </nav>
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl mb-6 text-center leading-tight">
        🎬 Movie Recommendations
      </h1>

      <p className="text-slate-400 text-center mb-10 text-lg">
        Explore some recommended movies built with React components ⚛️
      </p>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search movies..."
          className="px-4 py-3 rounded-lg w-full bg-slate-800 text-white outline-none focus:ring-2 focus:ring-red-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button
          onClick={() => setSelectedGenre("All")}
          className="bg-red-500 px-4 py-2 rounded-lg text-white"
        >
          All
        </button>

        <button
        onClick={() => setSelectedGenre("Action")}
        className="bg-slate-700 hover:bg-red-500 transition duration-300 px-4 py-2 rounded-lg text-white"

        >Action</button>

         <button
        onClick={() => setSelectedGenre("Sci-Fi")}
        className="bg-slate-700 hover:bg-red-500 transition duration-300 px-4 py-2 rounded-lg text-white"

        >Sci-Fi</button>

         <button
        onClick={() => setSelectedGenre("Drama")}
        className="bg-slate-700 hover:bg-red-500 transition duration-300 px-4 py-2 rounded-lg text-white"

        >Drama</button>
      </div>

      <div className="flex gap-6 flex-wrap justify-center">
        {filteredMovies.map((movie, index) => (
          <Mc
            key={index}
            title={movie.title}
            rating={movie.rating}
            genre={movie.genre}
            image={movie.image}
          />
        ))}
      </div>
      {filteredMovies.length === 0 && (
        <p className="text-center text-red-400 mt-10">No movies found ❌</p>
      )}

      <footer className="text-center text-slate-500 mt-20">
         Built with React & Tailwind CSS 🚀
      </footer>
    </div>
  );
};
export default App;
