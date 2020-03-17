import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders Button component', () => {
	const result = shallow(<Button />);
	const html = <div className="btn-primary-apply"><button>Apply</button></div>;
	expect(result).toMatchElement(html);
	expect(result).toMatchSnapshot();
});
