import * as React from 'react'
import TextField, { Color } from './textfield.component'

export default { title: 'Text Field' }

export const Good = () => <TextField color={Color.good} text="good" />
export const Flat = () => <TextField color={Color.none} text="none" />
export const Error = () => <TextField color={Color.error} text="error" />
