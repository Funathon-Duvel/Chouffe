import React, { useState, useEffect } from 'react';
import ReactSelect from 'js/components/shared/react-select';
import Spinner from 'js/components/shared/spinner';
import D from 'js/i18n';
import config from 'config';

const Resolver = ({ query, housing, setHousing }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${config.FUNATHON_ENDPOINT}?query=${encodeURIComponent(query)}`, {
			headers: { Accept: 'application/json' },
		})
			.then(r => r.json())
			.then(r => {
				setData(r.results.bindings);
				setLoading(false);
			});
	}, []);

	if (loading) return <Spinner />;

	const options = data.reduce((acc, r) => {
		const up = Object.entries(r).reduce(
			(subAcc, [k, v]) => ({ ...subAcc, [k]: v.value }),
			{}
		);
		return [...acc, up];
	}, []);

	return (
		<ReactSelect
			placeholder={D.selectHousing}
			options={options}
			value={housing ? options.find(n => n.value === housing) : ''}
			onChange={setHousing}
			searchable={true}
		/>
	);
};

export default Resolver;
