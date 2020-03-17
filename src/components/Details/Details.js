import React from 'react';
import PropTypes from 'prop-types';

import './Details.scss';

const getSalaryString = (salary) => {
	const formatter = new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
	});
	return formatter.format(salary).replace('.00','');
};

const Details = ({ salary, type, location, company }) => {
	const salaryString = getSalaryString(salary);
	return (
		<div className="details">
			<div>{ location }</div>
			<div>{ salaryString }</div>
			<div>{ type }</div>
			<div>{ company }</div>
		</div>
	);
};

Details.propTypes = {
	salary: PropTypes.number,
	type: PropTypes.string,
	location: PropTypes.string,
	company: PropTypes.string
};

export default Details;
