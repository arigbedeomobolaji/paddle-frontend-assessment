import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Ranchers&family=Rubik:ital,wght@0,300;0,400;0,500;1,400&display=swap');
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html, body {
		font-size: 100%;
	}

  body {
  font-family: 'Rubik', sans-serif;
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
	font-weight: ${({ isBold }) => !!isBold && 'bold'};
	padding: 0.75rem;
	margin: 0.35rem;

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		font-size: 1rem;
		padding: 0.5rem;
	}
`;
