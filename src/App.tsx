import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import store from 'store';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App: React.FC = () => (
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

export default App;
