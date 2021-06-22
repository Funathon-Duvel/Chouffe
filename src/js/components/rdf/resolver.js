import React, { useState, useEffect } from 'react';
import Housing from './housing';
import Map from './map';
import Spinner from 'js/components/shared/spinner';
import config from 'config';

const RdfResolver = ({ query }) => {
	const [res, setRes] = useState([]);
	const [housing, setHousing] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (housing) {
			setLoading(true);
			fetch(
				`${config.FUNATHON_ENDPOINT}?query=${encodeURIComponent(
					query.replace('HOUSING', `<${housing}>`)
				)}`,
				{
					headers: { Accept: 'application/json' },
				}
			)
				.then(r => r.json())
				.then(r => {
					setRes(r.results.bindings);
					setLoading(false);
				});
		}
	}, [housing]);

	const data = res.reduce((acc, r) => {
		const up = Object.entries(r).reduce(
			(subAcc, [k, v]) => ({ ...subAcc, [k]: v.value }),
			{}
		);
		return [...acc, up];
	}, []);

	return (
		<>
			<Housing housing={housing} setHousing={setHousing} />
			{loading && <Spinner />}
			{housing && !loading && res.length !== 0 && (
				<Map
					data={data}
					longitude={data[0].longitude}
					latitude={data[0].latitude}
					zoom={11}
				/>
			)}
		</>
	);
};

export default RdfResolver;
