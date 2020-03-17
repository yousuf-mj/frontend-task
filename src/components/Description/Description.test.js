import React from 'react';
import { shallow } from 'enzyme';
import Description from './Description';

it('renders Description component', () => {
	const props = {
		description: "This is generic description",
	};
	const result = shallow(<Description { ...props }/>);
	const html = <p className="description">This is generic description</p>;
	expect(result).toMatchElement(html);
	expect(result).toMatchSnapshot();
});
