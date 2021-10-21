import React from 'react';
import styled from 'styled-components';
import ItemWrapper from '../components/helpers/ItemWrapper';
import { Title } from '../style';
// import Button from '../components/helpers/Button';
// import Link from '../components/helpers/Link';

export const sttt = styled.div``;

const HomePage = () => {
	return (
		<ItemWrapper justifyContent='space-around' md>
			<ItemWrapper
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
			>
				<Title>We Are Everything We Aspire To BE</Title>
			</ItemWrapper>
		</ItemWrapper>
	);
};

export default HomePage;
