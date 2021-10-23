import styled from 'styled-components';
import Star from '@material-ui/icons/Star';
import { Title, Text, ListItem } from '../../style';
import ItemWrapper from '../helpers/ItemWrapper';

export const CardWrapper = styled(ItemWrapper)`
	background-color: #fff;
	border: 2px solid
		${({ primary, theme }) => (primary ? theme.color.primary : '#e5e5e5')};
	border-radius: 5px;
	margin: 1rem;
	padding: 1rem 0 0;
	min-height: 700px;

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		padding: 0.5rem 0;
		min-height: 650px;
	}
`;

export const InnerWrapper = styled(ItemWrapper)``;

export const Pricing = styled(ItemWrapper)``;

export const CardSubtitle = styled(Title)`
	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		padding: 0;
		margin: 0;
		text-align: right;
	}
`;

// Testimony Card
export const TestimonyWrapper = styled(ItemWrapper)`
	background-color: #fff;
	border: 2px solid
		${({ primary, theme }) => (primary ? theme.color.primary : '#e5e5e5')};
	border-radius: 5px;
	margin: 1rem;
	padding: 1rem;

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		padding: 0.5rem;
	}
`;

export const TestimonyInfo = styled(ItemWrapper)`
	padding: 0;
`;

export const Details = styled(ListItem)`
	padding: 0.5rem;
	flex: 0.95;
`;

export const UserName = styled(Title)`
	@media (max-width: 500px) {
		font-size: 0.5rem;
		padding: 0;
		margin: 0;
	}
`;

export const UserLocation = styled(Text)`
	@media (max-width: 500px) {
		font-size: 0.5rem;
		padding: 0;
		margin: 0;
	}
`;

export const Review = styled(ListItem)`
	padding: 0.5rem;
`;

export const UserDetail = styled(ListItem)`
	flex: 0.9;
	width: 100%;

	@media (max-width: 500px) {
		justify-content: flex-start;
	}
`;

export const StarIcon = styled(Star)`
	color: yellow;
`;
