import { configure } from '@storybook/react'

import '../static/global.css'

configure(require.context('../components', true, /\.stories\.tsx?$/), module)
