import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export const theme = {
	color: {
		primary: '#ba55d3',
		dark: '#0b132a',
		lightDark: '#4f5665',
	},

	screen: {
		tablet: '768px',
	},
};

export const Title = styled.h1`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '3.5rem')};
	font-family: cursive;
	font-weight: bold;
	padding: 1rem;
	margin: 0.5rem;

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		font-size: 2rem;
		padding: 0.5rem;
	}
`;

export const Text = styled.p`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
	font-weight: ${({ isBold }) => isBold && 'bold'};
	padding: 0.75rem;
	margin: 0.35rem;

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		font-size: 1rem;
		padding: 0.5rem;
	}
`;

export const CustomLink = styled(Link)`
	text-decoration: none;
	color: ${({ color, theme }) => (color ? color : theme.color.lightDark)};
	display: inline-block;
`;
