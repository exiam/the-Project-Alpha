import arg from 'arg'
import boxen from 'boxen'
import ora from 'ora'
import { red, white, blue, bold } from 'kleur'
import email from 'email-prompt'
import { prompt } from 'enquirer'

export function cli(raw) {
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: raw.slice(2),
    }
  )
  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    template: args._[0],
    runInstall: args['--install'] || false,
  }
}
