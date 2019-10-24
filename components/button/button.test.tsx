import * as React from 'react'
import Button from './button.component'
import { setup } from '../../setupTests'
setup()
import { render, shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
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
      const wrapper = shallow(<Button onClick={mockClick} />)
      wrapper.simulate('click')
      expect(mockClick).toHaveBeenCalled()
    })
  })
  describe('snapshot', () => {
    describe('primary', () => {
      it('should match with the primary snapshot', () => {
        expect(
          toJSON(shallow(<Button primary>text inside</Button>))
        ).toMatchSnapshot()
      })
      it('should match with the primary large snapshot', () => {
        expect(
          toJSON(
            shallow(
              <Button primary large>
                text inside
              </Button>
            )
          )
        ).toMatchSnapshot()
      })
    })
    describe('secondary', () => {
      it('should match with the secondary snapshot', () => {
        expect(toJSON(shallow(<Button>text inside</Button>))).toMatchSnapshot()
      })
      it('should match with the secondary large snapshot', () => {
        expect(
          toJSON(shallow(<Button large>text inside</Button>))
        ).toMatchSnapshot()
      })
    })
  })
})
