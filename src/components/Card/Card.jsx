// jshint ignore:start
import React from 'react';
import { CardWrapper, Pricing, InnerWrapper, CardSubtitle } from './style';
import {
	ImageWrapper,
	Image,
	Title,
	Text,
	List,
	ListItem,
	ListText,
	CheckIcon,
} from '../../style';
import Button from '../helpers/Button';

const Card = ({ src, alt, plan, planAccess, price, primary }) => {
	return (
		<>
			<CardWrapper
				flexDirection='column'
				alignItems='center'
				justifyContent='space-between'
				primary={primary}
				width='95%'
				md
			>
				<InnerWrapper
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					width='100%'
					md
				>
					<ImageWrapper width='60%'>
						<Image src={src} alt={alt} />
					</ImageWrapper>
					<Title fontSize='1.3rem' textAlign padding='1rem'>
						{plan}
					</Title>
					<List flexDirection='column' alignItems='flex-start' md>
						{planAccess.map((access) => {
							return (
								<ListItem
									key={access}
									justifyContent='flex-start'
									alignItems='center'
								>
									<CheckIcon />
									<ListText>{access}</ListText>
								</ListItem>
							);
						})}
					</List>
				</InnerWrapper>
				<InnerWrapper
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					width='100%'
					md
				>
					{typeof price === 'number' ? (
						<Pricing
							padding='0'
							width='90%'
							justifyContent='center'
							alignItems='center'
						>
							<CardSubtitle padding='0' fontSize='1.5rem' textAlign>
								$ {price}
							</CardSubtitle>
							<Text padding='0' fontSize='1.5rem'>
								/ mo{' '}
							</Text>
						</Pricing>
					) : (
						<Title fontSize='1.5rem' textAlign>
							{' '}
							{price}
						</Title>
					)}
					<Button width='60%' isLarge primary={!!primary}>
						Select
					</Button>
				</InnerWrapper>
			</CardWrapper>
		</>
	);
};

export default Card;
