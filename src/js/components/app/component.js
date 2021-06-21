import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Home from 'js/components/home';
import D from 'js/i18n';
import Spinner from 'js/components/shared/spinner';
import { itemsState } from 'js/store/items';

const AppWrapper = ({ children }) => {
	const [_, setItems] = useRecoilState(itemsState);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(process.env['REACT_APP_CONFIG'])
			.then(r => r.json())
			.then(r => {
				setItems([{ route: `/`, title: D.homeTitle, body: <Home /> }, ...r]);
				setLoading(false);
			});
	}, []);

	if (loading) return <Spinner />;

	return children;
};

export default AppWrapper;
