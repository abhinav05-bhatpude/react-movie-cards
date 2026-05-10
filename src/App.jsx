import React from "react";
import Mc from "./components/Mc";

const App = () => {

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

  return (
    <div className="min-h-screen bg-slate-900 p-10">

      <h1 className="text-white text-5xl mb-10 text-center">
        🎬 Movie Recommendations
      </h1>

      <div className="flex gap-6 flex-wrap justify-center">

        {movies.map((movie) => (
          <Mc
            title={movie.title}
            rating={movie.rating}
            genre={movie.genre}
            image={movie.image}
          />
        ))}

      </div>

    </div>
  );
};

export default App;