// jshint ignore: start

import React from 'react';
import { FeatureWrapper, FeaturesContent, PageWrapper } from './style';
import {
	ImageWrapper,
	Image,
	Title,
	Text,
	Bullet,
	List,
	ListItem,
	ListText,
} from '../../style';
import piano_music from '../../images/illustration/piano_music.png';

const features = [
	'Curabitur tempor justo',
	'Curabitur tempor justo',
	'Curabitur tempor justo',
	'Curabitur tempor justo',
];
const Features = () => {
	return (
		<PageWrapper width='100%'>
			<FeatureWrapper
				md
				justifyContent='space-around'
				alignItems='center'
				width='95%'
				margin='auto'
			>
				<ImageWrapper width='70%'>
					<Image src={piano_music} alt='Piano_Music' />
				</ImageWrapper>
				<FeaturesContent flexDirection='column' alignItems='flex-start' md>
					<Title fontSize='2rem' padding='0.95rem' bold='500'>
						Features We Provide For You
					</Title>
					<Text padding='0.35rem'>
						Curabitur tempor justo non turpis malesuada cursus.
					</Text>
					<Text padding='0.35rem'>
						Mauris ac libero eu sem finibus lacinia nec pulvinar.
					</Text>
					<List flexDirection='column' alignItems='flex-start' width="100%" md>
						{features.map((feature) => {
							return (
								<ListItem
									key={feature}
									justifyContent='flex-start'
									alignItems='flex-start'
								>
									<Bullet />
									<ListText>{feature}</ListText>
								</ListItem>
							);
						})}
					</List>
				</FeaturesContent>
			</FeatureWrapper>
		</PageWrapper>
	);
};

export default Features;
