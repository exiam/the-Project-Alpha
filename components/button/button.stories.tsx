import * as React from 'react'
import Button from './button.component'
import { specs, describe, it } from 'storybook-addon-specifications'
import { shallow } from 'enzyme'
import expect from 'expect'

export default { title: 'Button', component: Button }

export const primary = () => {
  const story = (
    <>
      <Button primary>Prim button</Button>
      <Button primary large>
        Prim button
      </Button>
    </>
  )

  specs(() =>
    describe('primary', () => {
      const StoryComponent = () => story

      it('Should render text in button', () => {
        const output = shallow(<StoryComponent />)
        expect(output.text()).toContain('Prim button')
      })
    })
  )

  return story
}

export const secondary = () => {
  const story = (
    <>
      <Button>Second button</Button>
      <Button large>Second button</Button>
    </>
  )

  specs(() =>
    describe('secondary', () => {
      const StoryComponent = () => story

      it('Should render text in button', () => {
        const output = shallow(<StoryComponent />)
        expect(output.text()).toContain('Second button')
      })
    })
  )

  return story
}
