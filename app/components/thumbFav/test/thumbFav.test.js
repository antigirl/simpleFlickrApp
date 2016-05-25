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
            actions: {},
            savedImages: []
        };
        wrapper = shallow(<ThumbFav {...props}/>);
    });

    it('should have a the basic HTML structure', () => {
        expect(wrapper.find(thumbFav)).to.have.length(1);
        expect(wrapper.find(thumbFavIcon)).to.have.length(1);
    });

    it('should have fav class if image is a favourite', () => {
        expect(wrapper.find(thumbFavIcon).props().className).to.equal('thumbFav__icon');
        const props = {
            actions: {},
            id: '0',
            savedImages: ['0', '1']
        };
        const wrapper2 = shallow(<ThumbFav {...props}/>);
        expect(wrapper2.find(thumbFavIcon).props().className).to.equal('thumbFav__icon thumbFav__icon--fav');
    });

    it('should fire favImage action onClick', () => {
        const actions = {
            favImage: sinon.spy()
        };
        const wrapper2 = shallow(<ThumbFav actions={actions} savedImages={[]}/>);
        wrapper2.find(thumbFav).simulate('click');
        expect(actions.favImage.calledOnce).to.equal(true);
    });
});
