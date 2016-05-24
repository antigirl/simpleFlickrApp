import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ThumbLarge from '../index.js'
import ThumbInfo from '../../thumbInfo/index.js'

describe('<ThumbLarge/>', () => {
    let wrapper;
    const thumbLarge = '.thumb-large';
    const thumbLargeClose = '.thumb-large__close';
    const thumbLargeWrapper = '.thumb-large__wrapper';
    const thumbLargeImage = '.thumb-large__img';

    beforeEach(() => {
        const props = {
                title: 'something',
                author: 'someAuthorURL',
                largeImage: 'something_m.jpg'
            };
        wrapper = shallow(<ThumbLarge {...props}/>);
    });

    it('should have a the basic HTML structure', () => {
        expect(wrapper.find(thumbLarge)).to.have.length(1);
        expect(wrapper.find(thumbLargeClose)).to.have.length(1);
        expect(wrapper.find(thumbLargeWrapper)).to.have.length(1);
        expect(wrapper.find(thumbLargeImage)).to.have.length(1)
        expect(wrapper.find(ThumbInfo)).to.have.length(1)
    });

    it('should translate the large image appropriatley', () => {
        expect(wrapper.find(thumbLargeImage).props().src).to.equal('something_b.jpg');
    });

    it('should fire showLargeImage action onClick', () => {
        const actions = {
            showLargeImage: sinon.spy()
        };
        const wrapper2 = shallow(<ThumbLarge largeImage="something_m.jpg" actions={actions} />);
        wrapper2.find(thumbLargeClose).simulate('click');
        expect(actions.showLargeImage.calledOnce).to.equal(true);
    });
});
