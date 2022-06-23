import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../../utilies/usePersistedState';

import light from '../../pritties/themes/light';
import dark from '../../pritties/themes/dark'

import { Box } from './styles';

import GlobalStyle from '../../pritties/styles/global';
import Header from '../layout/header';
import Footer from '../layout/footer';

const Website = () => {
  const [theme, setTheme] = usePersistedState <DefaultTheme> ('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return(
    <ThemeProvider theme={theme}>
      <Box>
        <GlobalStyle />
        <Box className='Box'>
          <Header toggleTheme={toggleTheme}/>
          <Box className='BoxContainer'>
            <Footer />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Website;
