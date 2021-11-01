import { memo } from "react";
import loadash from "lodash";

import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: Array<{
    Title: string;
    Poster: string;
    Ratings: Array<{
      // "Ratings" é um Array de objeto
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
}

function ContentComponent({ movies }: ContentProps) {
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
}

export const Content = memo(ContentComponent, (prevProps, nextProps) =>
  loadash.isEqual(prevProps.movies, nextProps.movies)
);
