// jshint ignore:start

import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
	display: inline-block;
	font-family: 'Rubik', sans-serif;
	padding: ${({ isLarge }) => (isLarge ? '1rem 3.85rem' : '0.95rem 2.5rem')};
	margin: ${({ margin }) => (margin ? margin + ' 0' : '0.55rem 0')};
	outline: none;
	border: ${({ primary, theme }) =>
		primary ? 'none' : '3px solid ' + theme.color.primary};
	border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '5px')};
	color: ${({ primary, theme }) => (primary ? '#fff' : theme.color.primary)};
	background-color: ${({ primary, theme }) =>
		primary ? theme.color.primary : '#fff'};
	font-size: ${({ fontSize }) => (fontSize ? fontSize + 'rem' : '1rem')};
	width: ${({ width }) => width && width};
	transition: all 2s ease-in;
	/* #b025d3 */
	&:hover {
		cursor: pointer;
		background-color: ${({ primary }) => (primary ? '#b025d3' : '#f0f0f0')};
	}
	@media (max-width: ${({ theme }) =>
			theme.screen.tablet && theme.screen.tablet}) {
		padding: ${({ isLarge }) => (isLarge ? '0.5rem 1.5rem' : '0.5rem 0.95rem')};
		margin: 0.1rem;
	}
`;

const Button = ({ children, ...rest }) => {
	return <Btn {...rest}>{children}</Btn>;
};

export default Button;
