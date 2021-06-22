import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { itemsState } from 'js/store/items';
import Spinner from 'js/components/shared/spinner';
import RdfResolver from './resolver';

const RdfWrapper = ({ housing, setHousing }) => {
	const [items] = useRecoilState(itemsState);
	const { pathname } = useLocation();
	const [query, setQuery] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const { housingQuery } = items.find(({ route }) => route === pathname);
		fetch(housingQuery)
			.then(r => r.text())
			.then(r => {
				setQuery(r);
				setLoading(false);
			});
	}, []);

	if (loading) return <Spinner />;

	return (
		<RdfResolver query={query} housing={housing} setHousing={setHousing} />
	);
};

export default RdfWrapper;
