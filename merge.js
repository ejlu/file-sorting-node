const path = require('path')
const fs = require('fs')
const readline = require('readline')

function merge(inputDirectory, outputFile) {
  //the call is 'merge inputs output.txt
  const allFileContents = new Set()

  fs.readdir(`./${inputDirectory}`, (err, files) => {
    if (err) throw err

    files.forEach(file => {
      const rl = readline.createInterface({
        input: fs.createReadStream(`./${inputDirectory}/${file}`)
      })
      let prevLine
      rl.on('line', line => {
        if (line !== '') {
          if (prevLine && prevLine > line) {
            const err = `The contents of ${file} are not sorted!`
            throw err
          }
          prevLine = line
          allFileContents.add(line)
        }
      })
      rl.on('close', () => {
        const finalText = Array.from(allFileContents)
          .sort()
          .join('\n')

        fs.writeFile(`./${outputFile}`, finalText, err => {
          if (err) throw err
        })
      })
    })

    console.log(`${outputFile} saved!`)
  })
}

module.exports = merge
