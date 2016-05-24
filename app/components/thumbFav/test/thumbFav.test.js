import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ThumbFav from '../index.js'

describe('<ThumbFav/>', () => {
    let wrapper;
    const thumbFav = '.thumbFav';
    const thumbFavIcon = '.thumbFav__icon';

    beforeEach(() => {
        const props = {
        };
        wrapper = shallow(<ThumbFav {...props}/>);
    });

    it('should have a the basic HTML structure', () => {
        expect(wrapper.find(thumbFav)).to.have.length(1);
        expect(wrapper.find(thumbFavIcon)).to.have.length(1);
    });
});
