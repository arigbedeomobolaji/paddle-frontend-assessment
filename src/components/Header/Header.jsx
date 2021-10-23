// jshint ignore:start
import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import Button from '../helpers/Button';
import { Logo } from '../../style';
import Link from '../helpers/Link';
import ItemWrapper from '../helpers/ItemWrapper';

const PageWrapper = styled(ItemWrapper)``;

const Navbar = styled(ItemWrapper)``;

const RightNavbar = styled(ItemWrapper)``;

const Hamburger = styled.h1`
	font-size: 3rem;
`;
const ResponsiveNavbarWrapper = styled.div`
	position: absolute;
	max-width: 400px;
	right: 0;
	background: #fff;
	display: none;

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
	}
`;

const ResponsiveNavbar = styled(ItemWrapper)`
	width: 100%;
	flex-direction: column;
	padding: 1rem;
`;

const Header = ({ theme }) => {
	const [isClosed, setIsClosed] = useState(true);
	return (
		<>
			<PageWrapper justifyContent='space-around' flexWrap>
				<Logo>PEDDLE</Logo>
				{isClosed && (
					<>
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
					</>
				)}

				<Hamburger onClick={setIsClosed(!isClosed)}>=</Hamburger>
			</PageWrapper>

			{!isClosed && (
				<ResponsiveNavbarWrapper>
					<ResponsiveNavbar>
						<Link to='#'>About</Link>
						<Link to='#'>FAQS</Link>
						<Link to='#'>Pricing</Link>
						<Link to='#'>Testimonials</Link>
						<Link to='#' bold color={theme.color.dark}>
							Signin
						</Link>
						<Button>Sign Up</Button>
					</ResponsiveNavbar>
				</ResponsiveNavbarWrapper>
			)}
		</>
	);
};

export default withTheme(Header);
