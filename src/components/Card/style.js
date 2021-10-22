import styled from 'styled-components';
import ItemWrapper from '../helpers/ItemWrapper';

export const CardWrapper = styled(ItemWrapper)`
	background-color: #fff;
	border: 2px solid
		${({ primary, theme }) => (primary ? theme.color.primary : '#e5e5e5')};
	border-radius: 5px;
	margin: 1rem;
	padding: 1rem 0;
	height: 700px;

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		padding: 0.5rem 0;
		height: 650px;
	}
`;

export const InnerWrapper = styled(ItemWrapper)``;

export const Pricing = styled(ItemWrapper)``;
