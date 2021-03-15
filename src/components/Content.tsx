import React from "react";

import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: Array<{
    Title: string;
    Poster: string;
    Ratings: Array<{ // "Ratings" é um Array de objeto
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
};

export function Content({ movies } : ContentProps) {
  // Complete aqui
  return (
    <main>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
};
