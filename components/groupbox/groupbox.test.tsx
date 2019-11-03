import * as React from 'react'
import GroupBox, { GroupBoxProps } from './groupbox.component'
import { setup } from '../../setupTests'
setup()
import { mount } from 'enzyme'

const fakeProps: GroupBoxProps = {
  name: 'Sample Groupbox',
  width: 600,
}

describe('Nav component', () => {
  describe('rendering', () => {
    it('should render without error', () => {
      mount(<GroupBox {...fakeProps} />)
    })

    const wrapper = mount(<GroupBox {...fakeProps} />)
    it('should render a group box of 3 div', () => {
      expect(wrapper.find('div').length).toBe(3)
    })
    it('should render a group box 2 divs inside', () => {
      expect(
        wrapper
          .find('div')
          .children()
          .find('div').length
      ).toBe(2)
    })

    it('should render the name of the GB', () => {
      expect(wrapper.text()).toBe('Sample Groupbox')
    })

    const wrapper2 = mount(<GroupBox {...fakeProps}>Text inside</GroupBox>)

    it('should render the name of the GB and the text inside', () => {
      expect(wrapper2.text()).toBe('Sample GroupboxText inside')
    })
  })
})
