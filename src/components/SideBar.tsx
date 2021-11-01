import { memo } from "react";
import loadash from "lodash";

import { SideBarHeader } from "./SideBarHeader";
import { Button } from "./Button";

interface SideBarProps {
  genres: Array<{
    // "genres" é um Array de objeto
    id: number;
    title: string;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  }>;
  selectedGenreId: number;
  handleClickButton(id: number): void; //estrutura de uma função - (caso retorno seja uma string, por exemplo, no lugar do void, setar o tipo String)
}

function SideBarComponent({
  genres,
  handleClickButton,
  selectedGenreId,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <SideBarHeader />

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            className="animate-ToptoBottom btn"
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

export const SideBar = memo(SideBarComponent, (prevProps, nextProps) =>
  loadash.isEqual(prevProps.genres, nextProps.genres)
);
