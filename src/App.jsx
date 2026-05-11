import React from "react";
import Mc from "./components/Mc";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const movies = [
    {
      title: "Interstellar",
      rating: "8.7",
      genre: "Sci-Fi",
      image:
        "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },

    {
      title: "Inception",
      rating: "8.8",
      genre: "Action",
      image:
        "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },

    {
      title: "Batman",
      rating: "8.4",
      genre: "Action",
      image:
        "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 p-10">

      <h1 className="text-white text-5xl mb-10 text-center">
        🎬 Movie Recommendations
      </h1>

      <p className="text-slate-400 text-center mb-10 text-lg">
        Explore some recommended movies built with React components ⚛️
      </p>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search movies..."
          className="px-4 py-3 rounded-lg w-80 bg-slate-800 text-white outline-none"

          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-6 flex-wrap justify-center">

        {filteredMovies.map((movie) => (
          <Mc
            title={movie.title}
            rating={movie.rating}
            genre={movie.genre}
            image={movie.image}
          />
        ))}

      </div>
      {filteredMovies.length === 0 && (
        <p className="text-center text-red-400 mt-10">
          No movies found ❌
        </p>
      )}

    </div>
  );
};

export default App;