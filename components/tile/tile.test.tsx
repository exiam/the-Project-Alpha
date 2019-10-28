import * as React from 'react'
import Tile, { TileProps } from './tile.component'
import { setup } from '../../setupTests'
setup()
import { mount } from 'enzyme'

const fakeProps: TileProps = {
  label: 'Sample Tile',
  img: './React.png',
}

describe('Nav component', () => {
  describe('rendering', () => {
    it('should render without error', () => {
      mount(<Tile {...fakeProps} />)
    })

    const wrapper = mount(<Tile {...fakeProps} />)
    it('should render a tile made of an a', () => {
      expect(wrapper.exists('a')).toBe(true)
    })
    const children = wrapper.find('a').children()
    it('should render a tile made of an img inside the a', () => {
      expect(children.exists('img')).toBe(true)
    })
    it('should render a tile made of a span inside the a', () => {
      expect(children.exists('span')).toBe(true)
    })

    it('should render the label of the tile', () => {
      expect(wrapper.text()).toBe('Sample Tile')
    })
  })
})
