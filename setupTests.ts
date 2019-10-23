import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
export function setup() {
  configure({ adapter: new Adapter() })
}
