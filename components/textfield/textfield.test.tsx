import * as React from 'react'
import TextField, { Props, Color } from './textfield.component'
import { setup } from '../../setupTests'
setup()
import { mount, shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

const fakeProps: Props = {
  text: 'Hello',
  color: Color.good,
}

describe('Nav component', () => {
  describe('rendering', () => {
    it('should render without error', () => {
      mount(<TextField {...fakeProps} />)
    })

    const wrapper = mount(<TextField {...fakeProps} />)
    it('should render a label input', () => {
      expect(wrapper.exists('label')).toBe(true)
    })
    it('should render a text typed input in the label element', () => {
      expect(wrapper.exists('input[type="text"]')).toBe(true)
    })

    it('should render the label text uppercase', () => {
      expect(wrapper.find('label').text()).toBe('HELLO')
    })
  })
  describe('snapshot', () => {
    it('should match with the snapshot', () => {
      expect(toJSON(shallow(<TextField {...fakeProps} />))).toMatchSnapshot()
    })
  })
})
