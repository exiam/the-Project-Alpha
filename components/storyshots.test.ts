import initStoryshots, {
  snapshotWithOptions,
} from '@storybook/addon-storyshots'

const reactAttributeNameMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
}

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock: ({ type, props }) => {
      const element = document.createElement(type)
      const propNames = Object.keys(props)
      propNames.forEach(name => {
        const attributeName = reactAttributeNameMap.hasOwnProperty(name)
          ? reactAttributeNameMap[name]
          : name
        element.setAttribute(attributeName, props[name])
      })
      return element
    },
  }),
})
