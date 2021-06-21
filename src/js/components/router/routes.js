import React from 'react';
import { useRecoilState } from 'recoil';
import { Route } from 'react-router-dom';
import Page from 'js/components/router/pages/page';
import { itemsState } from 'js/store/items';

const Routes = () => {
	const [items] = useRecoilState(itemsState);

	return (
		<div>
			{items.map(({ route, title, body, query }) => (
				<Route
					key={route}
					exact
					path={route}
					component={() => (
						<Page title={title} body={body} route={route} query={query} />
					)}
				/>
			))}
		</div>
	);
};

export default Routes;
