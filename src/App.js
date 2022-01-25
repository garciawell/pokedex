import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
            <GlobalStyle />
          </Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
