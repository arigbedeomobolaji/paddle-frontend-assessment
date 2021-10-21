// jshint ignore:start

import React from 'react';
import { Text, ImageWrapper, Image } from '../../style';
import { ShowcaseWrapper, ShowcaseContent, ShowcaseTitle } from './style';
import Button from '../../components/helpers/Button';
import web_developer from '../../images/illustration/web_developer.png';

const Showcase = () => {
	return (
		<ShowcaseWrapper justifyContent='space-around' md margin='auto' width='90%'>
			<ShowcaseContent
				flexDirection='column'
				justifyContent='center'
				alignItems='flex-start'
				md
			>
				<ShowcaseTitle width='95%'>
					We Are Everything We Aspire To BE
				</ShowcaseTitle>
				<Text width='95%'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci
					condimentum lectus efficitur tempor vel eu massa. Sed molestie turpis
					eget ipsum malesuada dignissim
				</Text>
				<Button fontSize='1.1' primary isLarge>
					Get Started
				</Button>
			</ShowcaseContent>
			<ImageWrapper>
				<Image src={web_developer} alt='Web Developer' />
			</ImageWrapper>
		</ShowcaseWrapper>
	);
};

export default Showcase;
