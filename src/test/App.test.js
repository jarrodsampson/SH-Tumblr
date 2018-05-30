import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';


describe('Test Suite', () => {

    beforeAll(() => {});

    beforeEach(() => {});

    it('renders without crashing', () => {
      let div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
      let tree = renderer
        .create(<App />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders header correctly', () => {
      let wrapper = shallow(<App />);
      expect(wrapper.find('.App .App-header h1').children().text()).toEqual("SkillShare");
    });

    afterAll(() => {});

    afterEach(() => {});

});