import React from 'react';
import type { RefObject } from 'react';
import { shallow } from 'enzyme';
import Tooltip, { ITooltipProps } from './Tooltip';

const props: ITooltipProps = {
    placement: 'left',
    fallbackPlacements: ['left'],
    paddings: 'none',
    triggerEvent: 'click',
    isOpened: false,
    isPortal: false,
    className: 'className',
    triggerElement: {
        current: {} as HTMLElement,
    },
    classes: {
        root: 'rootClass',
        arrow: 'arrow',
        content: 'content',
        contentShadow: 'content-shadow',
    },
    dataAttrs: {
        root: {
            'data-root': 'test',
            'incorrect-attr': 'test',
        },
        content: {
            'data-content': 'test',
            'incorrect-attr': 'test',
        },
    },
    onOpen: jest.fn(),
    onClose: jest.fn(),
};

describe('<Tooltip/>', () => {
    it('renders component with default props', () => {
        const triggerElement: RefObject<HTMLElement> = React.createRef();
        const wrapper = shallow(<Tooltip triggerElement={triggerElement}>Some test content</Tooltip>);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders with props', () => {
        const triggerElement: RefObject<HTMLElement> = React.createRef();
        const wrapper = shallow(<Tooltip triggerElement={triggerElement} {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
