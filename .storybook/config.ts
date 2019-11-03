import { configure } from '@storybook/react'
import { configure as configureEnzyme } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import requireContext from 'require-context.macro'

import '../static/global.css'

configureEnzyme({ adapter: new Adapter() })
configure(requireContext('../components', true, /\.stories\.tsx?$/), module)
