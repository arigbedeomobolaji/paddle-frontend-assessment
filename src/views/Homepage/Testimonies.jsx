import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { TestimoniesWrapper, PlanText, Cards } from './style';
import CarouselButtonWrapper from '../../components/helpers/ItemWrapper';
import { Title, CarouselButton } from '../../style';
import Testimony from '../../components/Card/Testimony';
import robert from '../../images/testimony/robert.png';
import christy from '../../images/testimony/christy.png';
import young from '../../images/testimony/young.png';

const testimony = [
	{
		src: robert,
		name: 'Viezh Robert',
		location: 'Warsaw, Poland',
		primary: true,
	},
	{ src: christy, name: 'Yessica Christy', location: 'Shangai, China' },
	{ src: young, name: 'Kim Young You', location: 'Seoul, South Korea' },
];
const Testimonies = () => {
	return (
		<>
			<TestimoniesWrapper
				flexDirection='column'
				justifyContent='center'
				width='100%'
				md
			>
				<Title width='30%' fontSize='2rem' padding='1rem' bold='700' textAlign>
					Trusted By Thousands of Happy Customer
				</Title>
				<PlanText padding='1rem' width='40%' lineHeight='2' textAlign>
					Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse et
					suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies.
				</PlanText>
				<Cards
					md
					width='90%'
					margin='auto'
					justifyContent='center'
					alignItems='center'
				>
					{testimony.map(({ src, name, location, primary }) => (
						<Testimony
							key={name}
							src={src}
							name={name}
							location={location}
							primary={primary}
						/>
					))}
				</Cards>
				<CarouselButtonWrapper
					justifyContent='flex-end'
					alignItems='center'
					width='80%'
				>
					<CarouselButton>
						<ArrowBackIcon fontSize='large' />
					</CarouselButton>
					<CarouselButton primary>
						<ArrowForwardIcon fontSize='large' />
					</CarouselButton>
				</CarouselButtonWrapper>
			</TestimoniesWrapper>
		</>
	);
};

export default Testimonies;
