interface ContentHeaderProps {
  title: string;
};

export function ContentHeader({ title }: ContentHeaderProps) {
  // Componente a mais criado *__*
  return (
    <header>
      <span className="category">
        Categoria:<span> {title}</span>
      </span>
    </header>
  );
};
