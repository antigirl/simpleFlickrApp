import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Gallery from '../index.js'

function setup() {
    const props = {
        photos: [{
            title: 'something',
            url: 'someURL'
        }]
    };
    return shallow(<Gallery photos={props.photos}/>);
}

describe('<Gallery />', () => {
    it('should have a the basic gallery structure', () => {
        const wrapper = setup();
        expect(wrapper.find('.thumbnail')).to.have.length(1);
        expect(wrapper.find('.thumbnail__wrapper')).to.have.length(1);
        expect(wrapper.find('.thumbnail__image')).to.have.length(1);
    });

    it('should render appropriate URL and Title for the image', () => {
        const wrapper = setup();
        expect(wrapper.find('.thumbnail__image').html()).to.equal('<img class="img-responsive thumbnail__image" src="someURL" alt="something"/>');
    });

    it('should have appropriate background styles for the thumbnail', () => {
        const wrapper = setup();
        expect(wrapper.find('.thumbnail__wrapper').props().style.backgroundImage).to.equal('url(someURL)');
    });
});
