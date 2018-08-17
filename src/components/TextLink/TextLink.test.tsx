import * as React from 'react';
import { shallow } from 'enzyme';
import TextLink from './TextLink';

describe('<TextLink />', () => {
    it('it renders TextLink', () => {
        const wrapper = shallow(<TextLink />);
        expect(wrapper).toMatchSnapshot();
    });

    it('it calls onClick handler', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<TextLink onClick={onClick} />);
        wrapper.simulate('click');
        expect(onClick.mock.calls).toHaveLength(1);
    });
});
