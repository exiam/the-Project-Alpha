import React from 'react'
import Highlight from 'react-highlight.js'
import { beautifier as JSONBeautifier } from '../../utils/json'
import { Config } from '../../@types'

export interface Props {
  config: Config
}

const ConfigComponent = ({ config }: Props) => (
  <div key={config.ID}>
    <h3>
      {config.DisplayName}({config.FileName})
    </h3>
    <Highlight language={config.FileFormat}>
      {config.FileFormat == 'json' ? JSONBeautifier(config.Data) : config.Data}
    </Highlight>
  </div>
)

export default ConfigComponent
