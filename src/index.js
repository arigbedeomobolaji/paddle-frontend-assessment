// jshint ignore:start

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter';
import { GlobalStyle, theme } from './style';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppRouter />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
