import React from 'react';
import {
	FooterWrapper,
	FooterContent,
	FooterInfo,
	Copyright,
	CompanyInfo,
	Navbar,
} from './style';
import { Logo, Text, Title } from '../../style';
import Link from '../helpers/Link';

const Footer = () => {
	return (
		<>
			<FooterWrapper flexDirection='column' width='100%'>
				<FooterContent
					flexDirection='column'
					width='90%'
					alignItems='flex-start'
					justifyContent='flex-start'
					md
				>
					<FooterInfo
						width='100%'
						justifyContent='flex-start'
						alignItems='space-between'
						md
					>
						<CompanyInfo
							flexDirection='column'
							alignItems='flex-start'
							justifyContent='flex-start'
							md
						>
							<Logo>PEDDLE</Logo>
							<Text fontSize='1.1rem' width='80%'>
								Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
								ante egestas ullamcorper. Duis id mauris consequat, ultrices
								ligula at, laoreet mag.
							</Text>
						</CompanyInfo>
						<Navbar
							flexDirection='column'
							justifyContent='flex-start'
							alignItems='flex-start'
							md
						>
							<Title fontSize='1.1rem'>Product</Title>
							<Link to='#'>Praesent</Link>
							<Link to='#'>Server</Link>
							<Link to='#'>Laoreet</Link>
							<Link to='#'>Laoreet</Link>
						</Navbar>
						<Navbar
							flexDirection='column'
							justifyContent='flex-start'
							alignItems='flex-start'
						>
							<Title fontSize='1.1rem'>Engage</Title>
							<Link to='#'>euismod</Link>
							<Link to='#'>egestas</Link>
							<Link to='#'>ullamcorper</Link>
							<Link to='#'>mauris</Link>
						</Navbar>
						<Navbar
							flexDirection='column'
							justifyContent='flex-start'
							alignItems='flex-start'
						>
							<Title fontSize='1.1rem'>Earn Money</Title>
							<Link to='#'>ligula</Link>
							<Link to='#'>ultrices</Link>
						</Navbar>
					</FooterInfo>
					<Copyright>
						<Text fontSize='1.1rem'>&copy;2020PADDLE</Text>
					</Copyright>
				</FooterContent>
			</FooterWrapper>
		</>
	);
};

export default Footer;
