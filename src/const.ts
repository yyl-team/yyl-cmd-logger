/* eslint-disable no-control-regex */
export let COLUMNS = process.stdout.columns || 80
process.stdout.on('resize', () => {
  COLUMNS = process.stdout.columns || 80
})

export const COLOR_REG = /(\u001b\[\d+m|\033\[[0-9;]+m)+/g
