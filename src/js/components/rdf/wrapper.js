import React, { useState, useEffect } from 'react';
import Spinner from 'js/components/shared/spinner';
import RdfResolver from './resolver';

const RdfWrapper = ({ queryURL }) => {
	const [query, setQuery] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(queryURL)
			.then(r => r.text())
			.then(r => {
				setQuery(r);
				setLoading(false);
			});
	}, []);

	if (loading) return <Spinner />;

	return <RdfResolver query={query} />;
};

export default RdfWrapper;
