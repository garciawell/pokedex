import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider } from 'styled-components'
import centered from '@storybook/addon-centered/react';;
import { MemoryRouter } from 'react-router-dom';
import defaultTheme from '../src/styles/theme'
import GlobalStyle from '../src/styles/global';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import jsonMockStore from './jsonMockStore';

const mockStore = configureStore();

const store = mockStore(jsonMockStore);

const withGlobal = Story => (
  <StylesProvider injectFirst>
     <MuiThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
      <GlobalStyle />
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

// addParameters({
//   options: { theme },
// });
addDecorator(withInfo);
addDecorator(centered);
addDecorator(withGlobal);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
