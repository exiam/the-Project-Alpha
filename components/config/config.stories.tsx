import * as React from 'react'
import Config from './config.component'

export default { title: 'Config' }

export const withJSON = () => (
  <Config
    config={{
      ID: 1,
      UserID: 1,
      DisplayName: 'Prettier',
      Date: '2019-10-21',
      Type: 'json',
      FileFormat: 'json',
      FileName: '.prettierrc',
      Data: `
        {
          "trailingComma": "es5",
          "tabWidth": 2,
          "singleQuote": true,
          "semi": false
        }
      `,
    }}
  />
)
