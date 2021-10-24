import styled, { createGlobalStyle } from 'styled-components';
import MuiCheckIcon from '@material-ui/icons/Check';
import ItemWrapper from './components/helpers/ItemWrapper';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Ranchers&family=Rubik:ital,wght@0,300;0,400;0,500;1,400&display=swap');
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html, body {
		font-size: 100%;
	}

  body {
  font-family: 'Rubik', sans-serif;
}
`;

export const theme = {
	color: {
		primary: '#ba55d3',
		secondary: '#f5f5f5',
		dark: '#0b132a',
		lightDark: '#4f5665',
	},

	screen: {
		tablet: '768px',
	},
};

export const Logo = styled.h1`
	font-family: 'Ranchers', cursive;
	font-weight: 30px;
	color: ${({ theme }) => theme.color.primary};
`;

export const Title = styled.h1`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '3.25rem')};
	font-weight: ${({ bold }) => (bold ? bold : 'bold')};
	padding: ${({ padding }) => (padding ? padding : '0.5rem')};
	width: ${({ width }) => (width ? width : '100%')};
	line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1.6)};
	text-align: ${({ textAlign }) => !!textAlign && 'center'};

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		font-size: ${({ small }) => (small ? '1rem' : '2rem')};
		padding: 0.35rem 1rem;
		width: 100%;
	}

	@media (max-width: 500px) {
		font-size: 1.5rem;
		font-weight: bold;
	}
`;

export const Text = styled.p`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
	font-weight: ${({ isBold }) => !!isBold && 'bold'};
	padding: ${({ padding }) => (padding ? padding + ' 0' : '0.5rem 0')};
	width: ${({ width }) => (width ? width : '100%')};
	line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1.3)};
	text-align: ${({ textAlign }) => !!textAlign && 'center'};

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		font-size: 0.85rem;
		padding: 1rem;
		width: 100%;
	}

	@media (max-width: 500px) {
		font-size: 0.85rem;
	}
`;

export const Rating = styled.p`
	font-size: 0.95rem;
	font-weight: 300;
	padding-right: 0.5rem;
`;

export const ImageWrapper = styled.div`
	width: ${({ width }) => (width ? width : '100%')};
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: ${({ theme }) =>
			theme.screen.tablet && theme.screen.tablet}) {
		width: 90%;
	}
`;

export const Avatar = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	padding-right: 0.5rem;
`;

export const Image = styled.img`
	object-fit: contain;
	width: 100%;
`;

export const Icon = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #e5e5e5;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(186, 85, 211, 0.25);
	color: ${({ theme }) => theme.color.primary};
`;

export const Data = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 0 0 2.5rem;

	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		padding-left: 0.5rem;
	}
`;

export const Bullet = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 5px;
	background: ${({ theme }) => theme.color.primary};
`;

export const ListText = styled.p`
	font-size: 0.9rem;
	padding: 0 0 0 1rem;
`;

// List style
export const List = styled(ItemWrapper)`
	@media (max-width: ${({ theme }) => theme.screen.tablet}) {
		align-items: flex-start;
		padding-top: 2rem;
	}
`;

export const ListItem = styled(ItemWrapper)`
	padding: ${({ padding }) => (padding ? padding + ' 0' : '0 0 1rem')};
`;

// Icons

export const CheckIcon = styled(MuiCheckIcon)`
	color: ${({ theme }) => theme.color.primary};
`;

export const CarouselButton = styled.div`
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ primary, theme }) =>
		primary ? theme.color.primary : '#fff'};
	color: ${({ primary, theme }) => (primary ? '#fff' : theme.color.primary)};
	margin-right: 1rem;
	border-radius: 100%;

	& > * {
		font-size: 2rem;
	}
`;
