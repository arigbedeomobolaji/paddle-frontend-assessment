// jshint ignore:start

import React from 'react';
import { ChoosePlanContainer, PlanText, Cards } from './style';
import { Title } from '../../style';
import Card from '../../components/Card/Card';
import free_plan from '../../images/illustration/free_plan.png';
import standard_plan from '../../images/illustration/standard_plan.png';
import premium_plan from '../../images/illustration/premium_plan.png';

const cards = [
	{
		src: free_plan,
		alt: 'Free Plan',
		plan: 'Free Plan',
		planAccess: [
			'Mauris sem neque',
			'Mauris sem neque',
			'Mauris sem neque',
			'Mauris sem neque',
		],
		price: 'Free',
	},
	{
		src: standard_plan,
		alt: 'Standard Plan',
		plan: 'Standard Plan',
		planAccess: [
			'Mauris sem neque',
			'Mauris sem neque',
			'Mauris sem neque',
			'Mauris sem neque',
			'Mauris sem neque',
		],
		price: 9,
	},
	{
		src: premium_plan,
		alt: 'Premium Plan',
		plan: 'Premium Plan',
		planAccess: [
			'Mauris sem neque',
			'Mauris sem neque',
			'Mauris sem neque',
			'Mauris sem neque',
			'Mauris sem neque',
			'Mauris sem neque',
		],
		price: 12,
		primary: true,
	},
];

const ChoosePlan = () => {
	return (
		<ChoosePlanContainer
			flexDirection='column'
			justifyContent='center'
			width='100%'
			md
		>
			<Title fontSize='2rem' padding='1rem' bold='700' textAlign>
				Choose Your Plan
			</Title>
			<PlanText padding='1rem' width='40%' lineHeight='2' textAlign>
				Lets choose the package that is best for you and explore it happily and
				cheerfully.
			</PlanText>
			<Cards
				md
				width='90%'
				margin='auto'
				justifyContent='center'
				alignItems='center'
			>
				{cards.map(({ src, alt, plan, planAccess, price, primary }) => (
					<Card
						key={plan}
						src={src}
						alt={alt}
						plan={plan}
						planAccess={planAccess}
						price={price}
						primary={primary}
					/>
				))}
			</Cards>
		</ChoosePlanContainer>
	);
};

export default ChoosePlan;
