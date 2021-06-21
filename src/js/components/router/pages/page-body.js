import React from 'react';
import PropTypes from 'prop-types';
import Rdf from 'js/components/rdf';

function PageBody({ body, query }) {
	if (query)
		return (
			<div className="mui-row slide-text">
				<Rdf query={query} />
			</div>
		);
	return <div className="mui-row slide-text">{body}</div>;
}

PageBody.propTypes = {
	body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default PageBody;
