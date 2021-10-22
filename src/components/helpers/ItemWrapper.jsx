// jshint ignore:start

import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: ${({ flexWrap }) => !!flexWrap && 'wrap'};
	flex-direction: ${({ flexDirection }) =>
		flexDirection ? flexDirection : 'row'};
	justify-content: ${({ justifyContent }) =>
		justifyContent ? justifyContent : 'space-between'};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
	padding: ${({ padding }) => (padding ? padding + 'px' : '1rem')};
	margin: ${({ margin }) =>
		margin && margin !== 'auto'
			? margin + 'px'
			: margin === 'auto'
			? margin
			: '0'};
	width: ${({ width }) => (width ? width : 'auto')};

	@media (max-width: ${({ theme }) => theme.screen && theme.screen.tablet}) {
		flex-direction: ${({ md }) => (md ? 'column' : 'row')};
		justify-content: ${({ md }) => md && 'center'};
		align-items: ${({ md }) => md && 'center'};
	}
`;

const ItemWrapper = ({ children, ...rest }) => {
	return <Wrapper {...rest}>{children}</Wrapper>;
};

export default ItemWrapper;
