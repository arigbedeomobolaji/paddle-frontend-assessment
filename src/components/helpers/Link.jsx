// jshint ignore:start
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink = styled(RouterLink)`
	text-decoration: none;
	color: ${({ color, theme }) => (color ? color : theme.color.lightDark)};
	display: inline-block;
	padding: ${({ padding }) => (padding ? padding + 'px' : '1rem')};
	font-weight: ${({ bold }) => !!bold && 'bold'};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};

	&:hover {
		cursor: pointer;
		color: ${({ color, theme }) => (color ? color : theme.color.dark)};
	}

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		padding: 0.75rem;
		font-size: 0.95rem;
	}
`;

const Link = ({ children, ...rest }) => {
	return (
		<>
			<CustomLink {...rest}>{children}</CustomLink>
		</>
	);
};

export default Link;
