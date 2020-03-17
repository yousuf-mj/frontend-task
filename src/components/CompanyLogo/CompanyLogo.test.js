import React from 'react';
import { shallow } from 'enzyme';
import CompanyLogo from './CompanyLogo';

it('renders CompanyLogo component', () => {
	const props = {
		logo: "http://host.com/photo.jpg",
		company:"acme"
	};
	const result = shallow(<CompanyLogo { ...props }/>);
	const html = <div className="company-logo"><img src="http://host.com/photo.jpg" alt="acme"/></div>;
	expect(result).toMatchElement(html);
	expect(result).toMatchSnapshot();
});
