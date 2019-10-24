import { configure } from '@storybook/react'
import requireContext from 'require-context.macro'

import '../static/global.css'

configure(requireContext('../components', true, /\.stories\.tsx?$/), module)
