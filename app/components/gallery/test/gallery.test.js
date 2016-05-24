import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Gallery from '../index.js'
import ThumbImage from '../../thumbImage/index.js'
import ThumbInfo from '../../thumbInfo/index.js'
import ThumbLarge from '../../thumbLarge/index.js'

describe('<Gallery />', () => {
    let wrapper;

    beforeEach(() => {
        const props = {
            photos: [{
                title: 'something1',
                url: 'someURL1'
            },
            {
                title: 'something2',
                url: 'someURL2'
            }]
        };
        wrapper = shallow(<Gallery {...props}/>);
    });

    it('should have the required HTML elements', () => {
        expect(wrapper.find('.row')).to.have.length.of(1);
        expect(wrapper.find('.thumbnail-wrapper')).to.have.length.of(2);
    });

    it('should render 2 ThumbImage & ThumbInfo components', () => {
        expect(wrapper.find(ThumbImage)).to.have.length.of(2);
        expect(wrapper.find(ThumbInfo)).to.have.length.of(2);
    });

    it('should render ThumbLarge component', () => {
        expect(wrapper.find(ThumbLarge)).to.have.length.of(0);
        const wrapper2 = shallow(<Gallery photos={[]} largeImage="someLargeImageUrl"/>);
        expect(wrapper2.find(ThumbLarge)).to.have.length.of(1);
    });
});
