import React from 'react';
import { Title, Text, ImageWrapper, Image } from '../../style';
import { GettingStartedWrapper, Sponsors } from './style';
import Button from '../../components/helpers/Button';
import amazon from '../../images/partners/amazon.png';
import discord from '../../images/partners/discord.png';
import netflix from '../../images/partners/netflix.png';
import reddit from '../../images/partners/reddit.png';
import spotify from '../../images/partners/spotify.png';

const sponsorsImage = [
	{ src: amazon, alt: 'Amazon' },
	{ src: discord, alt: 'Discord' },
	{ src: netflix, alt: 'Netflix' },
	{ src: reddit, alt: 'Reddit' },
	{ src: spotify, alt: 'Spotify' },
];

const GettingStarted = () => {
	return (
		<>
			<GettingStartedWrapper
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				width='100%'
				md
			>
				<Title
					fontSize='2.1rem'
					textAlign
					width='30%'
					margin='auto'
					lineHeight='1.5'
					bold='500'
				>
					Get Started With Paddle Today
				</Title>
				<Text fontSize='1rem' textAlign width='40%' padding='1.5rem'>
					Praesent mollis lobortis nisi nec laoreet. Duis euismod nisi nec ante
					egestas ullamcorper
				</Text>
				<Button width='50%' isLarge primary>
					Start Today
				</Button>
				<Sponsors width='80%' margin='auto' justifyContent='space-between'>
					{sponsorsImage.map(({ src, alt }) => (
						<ImageWrapper key={src} width='15%'>
							<Image src={src} alt={alt} />
						</ImageWrapper>
					))}
				</Sponsors>
			</GettingStartedWrapper>
		</>
	);
};

export default GettingStarted;
