import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ size = 'large', toggleTheme }: HeaderProps) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavLink to="/" exact activeClassName="active">
            Listagem
          </NavLink>
          <NavLink to="/import" activeClassName="active">
            Importar
          </NavLink>
        </nav>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />
      </header>
    </Container>
  );
};

export default Header;
