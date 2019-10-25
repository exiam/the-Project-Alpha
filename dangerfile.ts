import { warn, danger, schedule } from 'danger'

function send(idea, message, method: (string) => void = warn) {
  method(`${message} - <i>${idea}</i>`)
}

schedule(async () => {
  const fileChanged = await danger.git.modified_files
  yarnNPMFavorite(fileChanged)
  yarnLockUpdate(fileChanged)
  testChanges(fileChanged)
})

function yarnNPMFavorite(fileChanged: string[]) {
  if (fileChanged.includes('package-lock.json'))
    send(
      'Please yarn instead of npm',
      "You just need to run `yarn` (if yarn isn't installed, run `npm i -g yarn`"
    )
}
function yarnLockUpdate(fileChanged: string[]) {
  if (
    fileChanged.includes('package.json') &&
    !fileChanged.includes('yarn.lock')
  ) {
    const message = 'Changes were made to package.json, but not to yarn.lock'
    const idea = 'Perhaps you need to run `yarn`?'
    send(message, idea)
  }
}

function testChanges(fileChanged: string[]) {
  const hasAppChanges = fileChanged.length > 0

  const testChanges = fileChanged.filter(filepath => filepath.includes('test'))
  const hasTestChanges = testChanges.length > 0

  // Warn if there are library changes, but not tests
  if (hasAppChanges && !hasTestChanges) {
    warn(
      "There are library changes, but not tests. That's OK as long as you're refactoring existing code"
    )
  }
}
