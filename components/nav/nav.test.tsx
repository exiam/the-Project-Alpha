import * as React from 'react'
import Nav, { NavProps } from './nav.component'
import { render } from 'enzyme'

const fakeProps: NavProps = {
  logoText: 'Logo Text',
  items: [{ href: '', name: 'Name inside', id: 0 }],
  connected: false,
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
})
