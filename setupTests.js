const Adapter = require('enzyme-adapter-react-16')

require('enzyme').configure({ adapter: new Adapter() })

require('dotenv').config({ path: '.env' })
