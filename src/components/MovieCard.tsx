import { memo } from "react";
import loadash from "lodash";
import { Star, Clock } from "react-feather";

import "../styles/movie-card.scss";

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

function MovieCardComponent({
  title,
  poster,
  rating,
  runtime,
}: MovieCardProps) {
  return (
    <div className="movie-card animate-appear">
      <img src={poster} alt={title} />

      <div>
        <div className="movie-info">
          <span>{title}</span>
          <div className="meta">
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MovieCard = memo(MovieCardComponent, (prevProps, nextProps) =>
  loadash.isEqual(prevProps, nextProps)
);
