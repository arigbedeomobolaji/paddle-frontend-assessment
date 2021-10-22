import styled from 'styled-components';
import { Title, Text } from '../../style';
import ItemWrapper from '../../components/helpers/ItemWrapper';

export const ShowcaseTitle = styled(Title)`
	text-shadow: 1px 1px 2px ${({ theme }) => theme.color.primary};
`;
export const ShowcaseWrapper = styled(ItemWrapper)``;
export const ShowcaseContent = styled(ItemWrapper)`
	@media (max-width: ${({ theme }) =>
			theme.screen.tablet && theme.screen.tablet}) {
		align-items: flex-start;

		& * {
			margin-bottom: 0.85rem;
		}
	}
`;

export const AppInfoWrapper = styled(ItemWrapper)`
	margin: ${({ margin }) =>
		margin ? margin + ' auto -3rem' : '4rem auto -3rem'};
	border-radius: 10px;
	box-shadow: 1px 1px 5px #e7e7e7;
	position: relative;
	background: #fff;
	z-index: 100;

	& > * {
		flex: 1;
	}

	& > *:not(:last-child) {
		border-right: 2px solid #eeeff2;
	}

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		width: 80%;

		& > *:not(:last-child) {
			border: none;
			border-bottom: 2px solid #eeeff2;
		}
	}
`;

export const Info = styled(ItemWrapper)``;

export const PageWrapper = styled(ItemWrapper)`
	position: relative;
	min-height: 100vh;
	padding-top: 5rem;
	background-color: ${({ theme }) => theme.color.secondary};
`;
export const FeatureWrapper = styled(ItemWrapper)``;

export const FeaturesContent = styled(ItemWrapper)``;

export const ChoosePlanContainer = styled(ItemWrapper)`
	background-color: #f0f0f0;
	padding-bottom: 4rem;
`;

export const PlanText = styled(Text)`
	margin: auto;
`;

export const Cards = styled(ItemWrapper)``;

// Getting Started
export const GettingStartedWrapper = styled(ChoosePlanContainer)``;

export const Sponsors = styled(ItemWrapper)`
	padding-top: 3rem;
`;

// Testimonies
export const TestimoniesWrapper = styled(ChoosePlanContainer)``;

// subscribe
export const SubscribeWrapper = styled(ItemWrapper)`
	background: ${({ theme }) => theme.color.secondary};
`;
