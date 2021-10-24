// jshint ignore:start

import React from 'react';
import styled from 'styled-components';
import { ImageWrapper, Image, Title, Text } from '../style';
import ItemWrapper from './helpers/ItemWrapper';
import Button from './helpers/Button';

const RepositoryWrapper = styled(ItemWrapper)`
	width: 100%;
	margin-bottom: 1rem;
	box-shadow: 1px 1px 5px #b9b9b9;

	& > *:first-child {
		flex: 3;
		padding-right: 1rem;
	}
`;

const RepositoryInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const RepositoryDetails = styled(ItemWrapper)``;

const RepoButton = styled(Button)`
	padding: 0.5rem 1rem;
	font-size: 0.77rem;
	font-weight: bold;
`;
const Repository = ({
	src,
	name,
	repoName,
	repoDescription,
	stars,
	issues,
	days,
	...rest
}) => {
	return (
		<RepositoryWrapper md {...rest}>
			<ImageWrapper>
				<Image src={src} alt={name} />
			</ImageWrapper>
			<RepositoryInfo>
				<Title fontSize='1.5rem'>{repoName}</Title>
				<Text fontSize='0.95rem'>{repoDescription}</Text>
				<RepositoryDetails md>
					<RepoButton>Stars: {stars}</RepoButton>
					<RepoButton>Issues: {issues}</RepoButton>
					<Text width='50%'>
						Submitted {days ? days : '0'} days ago by {repoName.toLowerCase()}
					</Text>
				</RepositoryDetails>
			</RepositoryInfo>
		</RepositoryWrapper>
	);
};

export default Repository;
