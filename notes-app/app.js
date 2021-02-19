
const chalk = require('chalk')
const { argv } = require('process')
const  yargs  = require('yargs')
const notes = require('./notes.js')

// create add command

yargs.command({

command:'add',
describe:'add a new note',
builder:{
title:{
    describe:'Note Title',
    demandOption:true,
    type:'string'
},
body:{
    describe:'Note body',
    demandOption:true,
    type:'string'
}
},
handler: function(argv){
notes.addNote(argv.title, argv.body)
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

yargs.parse()

// console.log(process.argv)
// console.log(yargs.argv)


