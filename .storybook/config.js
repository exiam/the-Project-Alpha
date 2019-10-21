import { configure } from '@storybook/react'

configure(require.context('../pages', true, /\.stories\.tsx?$/), module)
