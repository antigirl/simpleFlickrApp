import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Gallery from '../index.js'
import GalleryImage from '../../galleryImage/index.js'

describe('<Gallery />', () => {
    let wrapper;

    beforeEach(()=> {
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
        wrapper = shallow(<Gallery photos={props.photos}/>);
    });

    it('should have the required HTML elements', () => {
        expect(wrapper.find('.row')).to.have.length.of(1);
        expect(wrapper.find('.thumbnail')).to.have.length.of(2);
    });

    it('should render 2 GalleryImage components', () => {
        expect(wrapper.find(GalleryImage)).to.have.length.of(2);
    });
});
