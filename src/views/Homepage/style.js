import styled from 'styled-components';
import { Title } from '../../style';
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
	margin-bottom: -2rem;
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
`;

export const Info = styled(ItemWrapper)``;

export const PageWrapper = styled(ItemWrapper)`
	position: relative;
	height: 100vh;
	background-color: ${({ theme }) => theme.color.secondary};
`;
export const FeatureWrapper = styled(ItemWrapper)``;

export const FeaturesContent = styled(ItemWrapper)``;

export const List = styled(ItemWrapper)``;

export const ListItem = styled(ItemWrapper)`
	padding: 0 0 1rem;
`;
