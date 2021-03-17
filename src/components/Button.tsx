import { Icon } from './Icon';

import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
};

export function Button({ iconName, title, selected, ...rest }: ButtonProps) {
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest}> {/* se o botão estiver selecionado, irá setar a classe 'selected' */}
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} /> {/* se o botão estiver selecionado, irá setar outra cor ao ícone */}
      {title}
    </button>
  );
};