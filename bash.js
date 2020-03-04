const fs = require('fs')
const ls = require('./ls')
const merge = require('./merge')
process.stdout.write('prompt > ')

//The stdin 'data' event fires after a user types in a new line
process.stdin.on('data', data => {
  const cmd = data
    .toString()
    .trim()
    .split(' ') // remove the newline

  if (cmd[0] === 'ls') {
    ls(cmd)
  }

  //condition checks if we are calling merge, and that it requires
  if (cmd[0] === 'merge') {
    if (cmd.length !== 3) {
      process.stdout.write(
        'Error: invalid number of parameters! Requires input directory and output file name.'
      )
    } else {
      merge(cmd[1], cmd[2])
    }
  }

  process.stdout.write('\nprompt > ')
})
