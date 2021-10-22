// jshint ignore:start

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemWrapper from '../../components/helpers/ItemWrapper';
import Repository from '../../components/Repository';
import numeral from 'numeral';
// import robert from '../../images/testimony/robert.png';

const GithubWrapper = styled(ItemWrapper)`
	min-height: 100vh;
`;

// const testData = [
// 	{
// 		src: robert,
// 		name: 'Robert Agbabiaka',
// 		repoName: 'Tensorflow',
// 		repoDescription: 'Tensorflow is tensorflow',
// 		stars: 223,
// 		issues: 234,
// 		days: 30,
// 	},
// ];

const Github = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				'https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc'
			);
			const data = await response.json();

			return data.items;
		};

		getData().then((data) => {
			const fetchedData = [];
			data.forEach((data) => {
				return fetchedData.push({
					src: data.owner.avatar_url,
					name: data.name,
					repoName: data.name,
					repoDescription: data.description,
					stars: numeral(data.stargazers_count).format('0.0a'),
					issues: numeral(data.open_issues_count).format('0.0a'),
					day: data.updated_at,
				});
			});
			setData(fetchedData);
		});
	}, []);

	return (
		<>
			<GithubWrapper
				flexDirection='column'
				justifyContent='flex-start'
				alignItems='flex-start'
				margin='auto'
				width='60%'
			>
				{data.length &&
					data.map((data) => <Repository key={data.repoName} {...data} />)}
			</GithubWrapper>
		</>
	);
};

export default Github;
