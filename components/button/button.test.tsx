import * as React from 'react'
import Button from './button.component'
import { render, mount } from 'enzyme'

describe('Button component', () => {
  describe('rendering', () => {
    it('should render without error', () => {
      render(<Button></Button>)
    })

    it('should render the text inside', () => {
      expect(render(<Button>text inside</Button>).text()).toBe('text inside')
    })
  })
  describe('interractions', () => {
    it('should call the onclick function when clicked', () => {
      const mockClick = jest.fn()
      const wrapper = mount(<Button onClick={mockClick} />)
      wrapper.simulate('click')
      expect(mockClick).toHaveBeenCalled()
    })
  })
})
