import React from 'react';
import PropTypes from 'prop-types'
import './Description.scss';

const Description = ({ description}) => {
  return (
    <p className="description">{ description }</p>
  );
};

Description.propTypes = {
	description: PropTypes.string
};

export default Description;
