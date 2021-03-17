import React from "react";

import { SideBarHeader } from "./SideBarHeader";
import { Button } from "./Button";

interface SideBarProps {
  genres: Array<{ // "genres" é um Array de objeto
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }>;
  selectedGenreId: number;
  handleClickButton(id: number): void; //estrutura de uma função - (caso retorno seja uma string, por exemplo, no lugar do void, setar o tipo String)
};

export function SideBar({ genres, handleClickButton, selectedGenreId }: SideBarProps) {
  // Complete aqui
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
};
