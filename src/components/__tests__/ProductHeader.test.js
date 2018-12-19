import React from 'react';

// import ReactTestUtils from 'react-dom/test-utils';

// Pull shallow method to creat unit tests. Prevent any child components from being rendered
import { shallow } from 'enzyme';

// Pull component through
import ProductHeader from '../../ProductHeader';

describe('ProductHeader', () => {
    // Create variables
    let component;
    let node;

    /**
     * Before each test, as the same component will be used, cache it.
     * Do not need the children from the node so shallow can be used.
     * Within the component, get the h2 tag(s).
     */

    beforeEach(() => component = shallow(<ProductHeader />));
    beforeEach(() => node = component.find('h2'));

    // Create unit tests
    it('has an h2 tag', () => {
        expect(node.length).toBe(1);
    });

    it('is wrapped inside a title class', () => {
        expect(node.hasClass('title')).toBeTruthy();
    });
})