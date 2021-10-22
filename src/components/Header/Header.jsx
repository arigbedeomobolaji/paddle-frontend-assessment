// jshint ignore:start
import React from 'react';
import styled, { withTheme } from 'styled-components';
import Button from '../helpers/Button';
import { Logo } from '../../style';
import Link from '../helpers/Link';
import ItemWrapper from '../helpers/ItemWrapper';

const PageWrapper = styled(ItemWrapper)``;

const Navbar = styled(ItemWrapper)``;

const RightNavbar = styled(ItemWrapper)``;

const Header = ({ theme }) => {
	return (
		<>
			<PageWrapper justifyContent='space-around' flexWrap>
				<Logo>PEDDLE</Logo>
				<Navbar justifyContent='flex-start' alignItems='center'>
					<Link to='#'>About</Link>
					<Link to='#'>FAQS</Link>
					<Link to='#'>Pricing</Link>
					<Link to='#'>Testimonials</Link>
				</Navbar>
				<RightNavbar justifyContent='flex-start' alignItems='center'>
					<Link to='#' bold color={theme.color.dark}>
						Signin
					</Link>
					<Button>Sign Up</Button>
				</RightNavbar>
			</PageWrapper>
		</>
	);
};

export default withTheme(Header);
