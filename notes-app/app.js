
const chalk = require('chalk')
const  yargs  = require('yargs')
const getNotes = require('./notes.js')

// create add command

yargs.command({

command:'add',
describe:'add a new note',
handler: function(){
    console.log('adding a new note!')
}
})

// create remove command

yargs.command({
  command:'remove',
  describe:'remove a note',
  handler: function(){
      console.log('removing the note')
  }  
})

console.log(process.argv)
console.log(yargs.argv)


