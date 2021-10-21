// jshint ignore:start
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) =>
		flexDirection ? flexDirection : 'row'};
	justify-content: ${({ justifyContent }) =>
		justifyContent ? justifyContent : 'space-between'};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : 'flex-start')};
	margin: ${({ margin }) => (margin ? margin + 'px' : '1rem')};
	padding: ${({ padding }) => (padding ? padding + 'px' : '1rem')};

	@media (max-width: ${({ theme }) => theme.screen && theme.screen.tablet}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const ItemWrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default ItemWrapper;
