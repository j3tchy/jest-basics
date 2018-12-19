// Configure Enzyme
import { configure } from 'enzyme';
// Setup adapter from REact 15
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });