import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ThumbInfo from '../index.js'

describe('<ThumbInfo/>', () => {
    let wrapper;
    const thumbInfoWrapper = '.thumbnail-info';
    const thumbInfoTitle = '.thumbnail-info__title';
    const thumbInfoAuthor = '.thumbnail-info__author';

    beforeEach(()=> {
        const props = {
                title: 'something',
                author: 'someAuthorURL'
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
});
