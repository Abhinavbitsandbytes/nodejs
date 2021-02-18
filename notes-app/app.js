const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created by Node.js')

// challange - append a message to notes.txt

// 1. use appendFileSync to append to the file

fs.appendFileSync('notes.txt', 'from Abhinav')


