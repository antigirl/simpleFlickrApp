import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ThumbInfo from '../index.js'

describe('<ThumbInfo/>', () => {
    let wrapper;
    const thumbInfoWrapper = '.thumbnail-info';
    const thumbInfoTitle = '.thumbnail-info__title';
    const thumbInfoAuthor = '.thumbnail-info__author';

    beforeEach(() => {
        const props = {
                title: 'something',
                author: 'someAuthorURL',
                savedImages: []
            };
        wrapper = shallow(<ThumbInfo {...props}/>);
    });

    it('should have a the basic HTML structure', () => {
        expect(wrapper.find(thumbInfoWrapper)).to.have.length(1);
        expect(wrapper.find(thumbInfoTitle)).to.have.length(1);
        expect(wrapper.find(thumbInfoAuthor)).to.have.length(1);
    });

    it('should render appropriate URL and Author image', () => {
        expect(wrapper.find(thumbInfoTitle).text()).to.equal('something');
        expect(wrapper.find(thumbInfoAuthor).props().src).to.equal('someAuthorURL');
        expect(wrapper.contains(<span className="thumbnail-info__title">something</span>)).to.equal(true);
    });

    it('should render default title if not available', () => {
        const wrapper2 = shallow(<ThumbInfo title='' savedImages={[]}/>);
        expect(wrapper2.find(thumbInfoTitle).text()).to.equal('Untitled');
    });

    it('should have fav class if image is a favourite', () => {
        expect(wrapper.find(thumbInfoWrapper).props().className).to.equal('thumbnail-info');
        const props = {
            id: '0',
            savedImages: ['0', '1']
        };
        const wrapper2 = shallow(<ThumbInfo {...props}/>);
        expect(wrapper2.find(thumbInfoWrapper).props().className).to.equal('thumbnail-info thumbnail-info--fav');
    });
});
