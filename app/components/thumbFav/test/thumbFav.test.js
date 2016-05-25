import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ThumbFav from '../index.js'

describe('<ThumbFav/>', () => {
    let wrapper;
    const thumbFav = '.thumbFav';
    const thumbFavIcon = '.thumbFav__icon';

    beforeEach(() => {
        const props = {
            actions: {}
        };
        wrapper = shallow(<ThumbFav {...props}/>);
    });

    it('should have a the basic HTML structure', () => {
        expect(wrapper.find(thumbFav)).to.have.length(1);
        expect(wrapper.find(thumbFavIcon)).to.have.length(1);
    });

    it('should fire favImage action onClick', () => {
        const actions = {
            favImage: sinon.spy()
        };
        const wrapper2 = shallow(<ThumbFav actions={actions}/>);
        wrapper2.find(thumbFav).simulate('click');
        expect(actions.favImage.calledOnce).to.equal(true);
    });
});
