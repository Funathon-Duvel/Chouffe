import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { itemsState } from 'js/store/items';

const Home = () => {
	const [items] = useRecoilState(itemsState);
	return (
		<ul>
			{items.map(
				({ route, title }, i) =>
					i !== 0 &&
					(route ? (
						<li key={i} className="item">
							<Link to={route}>{title}</Link>
						</li>
					) : (
						<React.Fragment key={i}>
							<br />
							<h2 className="item-title centered">
								<i>{title}</i>
							</h2>
						</React.Fragment>
					))
			)}
		</ul>
	);
};

export default Home;
