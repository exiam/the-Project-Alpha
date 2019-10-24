import * as React from 'react'
import Nav, { NavProps } from './nav.component'
import { setup } from '../../setupTests'
setup()
import { render, shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

const fakeProps: NavProps = {
  logoText: 'Logo Text',
  items: [{ href: '', name: 'Name inside', id: 0 }],
}

describe('Nav component', () => {
  describe('rendering', () => {
    it('should render without error', () => {
      render(<Nav {...fakeProps} />)
    })

    const wrapper = render(<Nav {...fakeProps} />)

    it('should render the logo text', () => {
      expect(wrapper.find('h3').text()).toBe('Logo Text')
    })
    it('should render the links text', () => {
      expect(wrapper.find('ul li').text()).toBe('Name inside')
    })
  })
  describe('snapshot', () => {
    it('should match with the connected snapshot', () => {
      expect(
        toJSON(shallow(<Nav connected {...fakeProps} />))
      ).toMatchSnapshot()
    })
    it('should match with the not connected snapshot', () => {
      expect(toJSON(shallow(<Nav {...fakeProps} />))).toMatchSnapshot()
    })
  })
})
