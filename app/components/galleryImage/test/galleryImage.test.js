import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import GalleryImage from '../index.js'

describe('<Gallery Image/>', () => {
    let wrapper;
    const thumbImage = '.thumbnail__image';
    const thumbWrapper = '.thumbnail__wrapper';

    beforeEach(()=> {
        const props = {
                title: 'something',
                url: 'someURL'
            };
        wrapper = shallow(<GalleryImage {...props}/>);
    });

    it('should have a the basic HTML structure', () => {
        expect(wrapper.find(thumbWrapper)).to.have.length(1);
        expect(wrapper.find(thumbImage)).to.have.length(1);
    });

    it('should render appropriate URL and Title for the image', () => {
        const thumbImage = '.thumbnail__image';
        expect(wrapper.find(thumbImage).props().alt).to.equal('something');
        expect(wrapper.find(thumbImage).props().src).to.equal('someURL');
        expect(wrapper.contains(<img className="img-responsive thumbnail__image" src="someURL" alt="something"/>)).to.equal(true);
    });

    it('should have appropriate background styles for the thumbnail', () => {
        expect(wrapper.find(thumbWrapper).props().style.backgroundImage).to.equal('url(someURL)');
    });
});
