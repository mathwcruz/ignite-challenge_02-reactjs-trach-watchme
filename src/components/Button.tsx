import { memo, ButtonHTMLAttributes } from "react";
import loadash from "lodash";

import { Icon } from "./Icon";

import "../styles/button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
}

function ButtonComponent({ iconName, title, selected, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...(selected && { className: "selected" })}
      {...rest}
    >
      {" "}
      {/* se o botão estiver selecionado, irá setar a classe 'selected' */}
      <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />{" "}
      {/* se o botão estiver selecionado, irá setar outra cor ao ícone */}
      {title}
    </button>
  );
}

export const Button = memo(ButtonComponent, (prevProps, nextProps) =>
  loadash.isEqual(prevProps.title, nextProps.title)
);
