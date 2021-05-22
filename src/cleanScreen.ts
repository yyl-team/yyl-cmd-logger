export function cleanScreen() {
  process.stdout.write('\x1Bc')
}
