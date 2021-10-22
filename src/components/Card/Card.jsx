// jshint ignore:start
import React from 'react';
import { CardWrapper, Pricing, InnerWrapper } from './style';
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
			>
				<InnerWrapper
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
				>
					<ImageWrapper width='60%'>
						<Image src={src} alt={alt} />
					</ImageWrapper>
					<Title fontSize='1.3rem' textAlign padding='1rem'>
						{plan}
					</Title>
					<List flexDirection='column' alignItems='flex-start'>
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
				>
					{typeof price === 'number' ? (
						<Pricing
							padding='0'
							width='50%'
							justifyContent='center'
							alignItems='center'
						>
							<Title padding='0' fontSize='1.2rem' textAlign>
								$ {price}
							</Title>
							<Text padding='0' fontSize='1.1rem'>
								/mo{' '}
							</Text>
						</Pricing>
					) : (
						<Title fontSize='1.2rem' textAlign>
							{' '}
							{price}
						</Title>
					)}
					<Button isLarge primary={!!primary}>
						Select
					</Button>
				</InnerWrapper>
			</CardWrapper>
		</>
	);
};

export default Card;
