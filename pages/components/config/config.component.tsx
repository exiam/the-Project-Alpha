import React from 'react'
import Highlight from 'react-highlight.js'
import { beautifier as JSONBeautifier } from '../../../utils/json'
import { config } from '../../types'

interface IProps {
  config: config
}

const Config = ({ config }: IProps) => (
  <div key={config.ID}>
    <h3>
      {config.DisplayName}({config.FileName})
    </h3>
    <Highlight language={config.FileFormat}>
      {config.FileFormat == 'json' ? JSONBeautifier(config.Data) : config.Data}
    </Highlight>
  </div>
)

export default Config
