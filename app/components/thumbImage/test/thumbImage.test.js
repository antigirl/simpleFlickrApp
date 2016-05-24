import React from 'react';
import { shallow } from 'enzyme';
import { expect, mount } from 'chai';
import sinon from 'sinon';
import ThumbImage from '../index.js'

describe('<ThumbImage/>', () => {
    let wrapper;
    const thumbImage = '.thumbnail-image__img';
    const thumbWrapper = '.thumbnail-image';

    beforeEach(() => {
        const props = {
                title: 'something',
                url: 'someURL'
            };
        wrapper = shallow(<ThumbImage {...props}/>);
    });

    it('should have a the basic HTML structure', () => {
        expect(wrapper.find(thumbWrapper)).to.have.length(1);
        expect(wrapper.find(thumbImage)).to.have.length(1);
    });

    it('should render appropriate URL and Title for the image', () => {
        expect(wrapper.find(thumbImage).props().alt).to.equal('something');
        expect(wrapper.find(thumbImage).props().src).to.equal('someURL');
        expect(wrapper.contains(<img className="img-responsive thumbnail-image__img" src="someURL" alt="something"/>)).to.equal(true);
    });

    it('should have appropriate background styles for the thumbnail', () => {
        expect(wrapper.find(thumbWrapper).props().style.backgroundImage).to.equal('url(someURL)');
    });

    it('should fire showLargeImage action onClick', () => {
        const actions = {
            showLargeImage: sinon.spy()
        };
        const wrapper2 = shallow(<ThumbImage actions={actions} url="" title=""/>);
        wrapper2.find(thumbWrapper).simulate('click');
        expect(actions.showLargeImage.calledOnce).to.equal(true);
    });

});
