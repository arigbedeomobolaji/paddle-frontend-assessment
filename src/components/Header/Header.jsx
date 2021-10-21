import React from 'react';
// import styled from 'styled-components';
import Button from '../Button/Button';
import { CustomLink } from '../../style';
// import ItemWrapper from '../PageWrapper/PageWrapper';

// const PageWrapper = styled(ItemWrapper)``;

const Header = () => {
	return (
		<div>
			<Button isLarge>Sign Up</Button>
			<CustomLink to='#'>Welcome</CustomLink>
		</div>
	);
};

export default Header;
