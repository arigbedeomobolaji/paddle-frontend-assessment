import { useEffect, useState } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import moment from 'moment';
const useGithubRepo = (pageNumber) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [repositories, setRepositories] = useState([]);
	const [hasMore, setHasMore] = useState(false);

	let cancel;

	useEffect(() => {
		if (pageNumber === 1) setRepositories([]);
	}, [pageNumber]);

	useEffect(() => {
		setLoading(true);
		setError('');
		let url =
			pageNumber > 1
				? `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc&page=${pageNumber}`
				: 'https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc';
		axios({
			method: 'GET',
			url: url,
			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then((res) => {
				const newRepositories = res.data.items.map((repository) => ({
					repoId: repository.id,
					src: repository.owner.avatar_url,
					name: repository.name,
					repoName: repository.name,
					repoDescription: repository.description,
					stars: numeral(repository.stargazers_count).format('0.0a'),
					issues: numeral(repository.open_issues_count).format('0.0a'),
					day: moment().diff(repository.updated_at, 'days'),
				}));
				setRepositories((prevRepositories) => {
					return [...new Set([...prevRepositories, ...newRepositories])];
				});
				setHasMore(res.data.items.length > 0);
				setLoading(false);
			})
			.catch((e) => {
				if (axios.isCancel(e)) return;
				setError(e.message);
			});
		return () => cancel();
	}, [pageNumber]);
	console.log(repositories);
	return { loading, error, repositories, hasMore };
};

export default useGithubRepo;
