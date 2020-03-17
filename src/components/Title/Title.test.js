import React from 'react';
import { shallow } from 'enzyme';

import Title from './Title';

it('renders Title component', () => {
	const props = {
		title: 'React Developer in London £90K',
	};
	const result = shallow(<Title { ...props }/>);
	const titleHtml = <h1 className="title">React Developer in London £90K</h1>;
	expect(result).toMatchElement(titleHtml);
	expect(result).toMatchSnapshot();
});
