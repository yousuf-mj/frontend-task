import React from 'react';
import { shallow } from 'enzyme';

import Details from './Details';

it('renders Details component', () => {
	const props = {
		location: 'London',
		salary: 50000,
		type: 'Permanent',
		company: 'Acme'
	};
	const result = shallow(<Details { ...props }/>);
	const html = <div className="details"><div>London</div><div>£50,000</div><div>Permanent</div><div>Acme</div></div>;
	expect(result).toMatchElement(html);
	expect(result).toMatchSnapshot();
});
