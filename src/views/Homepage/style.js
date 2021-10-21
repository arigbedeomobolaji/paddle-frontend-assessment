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
