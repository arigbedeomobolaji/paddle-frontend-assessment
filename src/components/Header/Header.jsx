// jshint ignore:start
import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import Button from '../helpers/Button';
import { Logo } from '../../style';
import Link from '../helpers/Link';
import ItemWrapper from '../helpers/ItemWrapper';

const PageWrapper = styled(ItemWrapper)`
	@media (max-width: 840px) {
		justify-content: space-between;
	}
`;

const Navbar = styled(ItemWrapper)`
	@media (max-width: 840px) {
		display: none;
	}
	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		display: none;
	}
`;

const RightNavbar = styled(ItemWrapper)`
	@media (max-width: 840px) {
		display: none;
	}
	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		display: none;
	}
`;

const Hamburger = styled.h1`
	font-size: 3rem;
	color: ${({ theme }) => theme.color.primary};
	cursor: pointer;
	display: none;

	@media (max-width: 840px) {
		display: block;
	}
`;
const ResponsiveNavbarWrapper = styled.div`
	position: absolute;
	width: 300px;
	max-width: 300px;
	right: 0;
	background: #fff;

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
	}
`;

const ResponsiveNavbar = styled(ItemWrapper)`
	width: 100%;
	flex-direction: column;
	padding: 1rem;

	& > * {
		width: 100%;
		transition: background-color 0.35s ease-in;
	}
	& *:hover {
		background-color: ${({ theme }) => theme.color.secondary};
	}
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
							<Link to='#' bold='700' color={theme.color.dark}>
								Signin
							</Link>
							<Button>Sign Up</Button>
						</RightNavbar>
					</>
				)}

				<Hamburger onClick={() => setIsClosed(!isClosed)}>
					{isClosed ? '=' : 'x'}
				</Hamburger>
			</PageWrapper>

			{!isClosed && (
				<ResponsiveNavbarWrapper>
					<ResponsiveNavbar>
						<Link to='#'>About</Link>
						<Link to='#'>FAQS</Link>
						<Link to='#'>Pricing</Link>
						<Link to='#'>Testimonials</Link>
						<Link to='#' bold='700' color={theme.color.dark}>
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
