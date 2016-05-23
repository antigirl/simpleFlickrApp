import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import Button from '../index.js'

function setup() {
    const props = {
        actions: {}
    };
    return shallow(<Button {...props}/>);
}

describe('Button test', () => {
    it('should have a button element', () => {
        const wrapper = setup();
        expect(wrapper.find('button').length).toBe(1);
    });
});
