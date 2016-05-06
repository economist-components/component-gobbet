import 'babel-polyfill';
import Gobbet from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe('Gobbet', () => {

  it('renders a React element', () => {
    React.isValidElement(<Gobbet />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let gobbet = null;
    beforeEach(() => {
      rendered = mount(
        <Gobbet title="foobar">
          <div className="wizzbang" />
        </Gobbet>
      );
      gobbet = rendered.find('.gobbet');
    });

    it('renders a top level div.gobbet', () => {
      gobbet.should.have.tagName('div');
      gobbet.should.have.className('gobbet');
    });

    it('renders a title', () => {
      gobbet.find('.gobbet__header-title').should.have.text('foobar');
    });

    it('renders children', () => {
      gobbet.find('.wizzbang').should.be.present();
    });
  });

});
