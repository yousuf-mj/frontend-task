import React from 'react';
import './CompanyLogo.scss';

const CompanyLogo = ({ company, logo }) => {
  return (
    <div className="company-logo">
			<img src={logo} alt={company}/>
		</div>
  );
};

export default CompanyLogo;
