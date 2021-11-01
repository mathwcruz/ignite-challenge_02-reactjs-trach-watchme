import { memo } from "react";
import loadash from "lodash";

interface ContentHeaderProps {
  title: string;
}

function ContentHeaderComponent({ title }: ContentHeaderProps) {
  // Componente a mais criado *__*
  return (
    <header>
      <span className="category">
        Categoria:<span> {title}</span>
      </span>
    </header>
  );
}

export const ContentHeader = memo(
  ContentHeaderComponent,
  (prevProps, nextProps) => loadash.isEqual(prevProps.title, nextProps.title)
);
