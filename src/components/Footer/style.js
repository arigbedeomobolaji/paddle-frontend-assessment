import styled from 'styled-components';
import ItemWrapper from '../helpers/ItemWrapper';

export const FooterWrapper = styled(ItemWrapper)`
	background-color: ${({ theme }) => theme.color.secondary};
	padding-top: 4rem;
`;

export const FooterContent = styled(ItemWrapper)``;
export const FooterInfo = styled(ItemWrapper)`
	& > *:not(:first-child) {
		flex: 1 1 50%;
	}
`;
export const CompanyInfo = styled(ItemWrapper)``;
export const Navbar = styled(ItemWrapper)``;
export const Copyright = styled.div`
	color: ${({ theme }) => theme.color.lightDark};
	padding-left: 1rem;
`;
