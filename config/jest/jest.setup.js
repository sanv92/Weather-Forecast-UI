const configure = require('enzyme').configure
const Adapter = require('enzyme-adapter-react-16')

require('jest-styled-components')
require('regenerator-runtime/runtime')


configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});
