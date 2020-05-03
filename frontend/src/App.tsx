import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import usePersistedState from './utils/usePersistedState';

import Routes from './routes';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes toggleTheme={toggleTheme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
