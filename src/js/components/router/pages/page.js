import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from './page-title';
import PageBody from './page-body';

function Page({ title, query, body }) {
	return (
		<div>
			<PageTitle title={title} />
			<PageBody body={body} query={query} />
		</div>
	);
}

Page.proptTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Page;
