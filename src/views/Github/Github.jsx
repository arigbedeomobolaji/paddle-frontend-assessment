/* eslint-disable no-mixed-spaces-and-tabs */
// jshint ignore:start
import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import ItemWrapper from '../../components/helpers/ItemWrapper';
import Repository from '../../components/Repository';
import useGithubRepo from '../../hooks/useGithubRepo';

const GithubWrapper = styled(ItemWrapper)`
	min-height: 100vh;
`;

const Github = () => {
	const [pageNumber, setPageNumber] = useState(1);

	const { loading, error, repositories, hasMore } = useGithubRepo(pageNumber);

	const observer = useRef();
	const lastRepositoryElementRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((prevPageNumber) => prevPageNumber + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	return (
		<>
			<GithubWrapper
				flexDirection='column'
				justifyContent='flex-start'
				alignItems='flex-start'
				margin='0.5rem auto'
				width='60%'
				md
			>
				{repositories.length
					? repositories.map((repository, index) => {
							if (repositories.length === index + 1) {
								return (
									<div
										ref={lastRepositoryElementRef}
										key={repository.repoId + index}
									>
										<Repository {...repository} />
									</div>
								);
							} else {
								return (
									<Repository
										key={repository.repoName}
										index={index}
										{...repository}
									/>
								);
							}
					  })
					: !loading && <div>No repository found!</div>}
				<div>{loading && 'loading...'}</div>
				<div>{!!error && error}</div>
			</GithubWrapper>
		</>
	);
};

export default Github;
