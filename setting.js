const chalk = require('chalk')
const fs = require('fs')


global.owner = ['6289629929193'] 
global.ownernomer = "6289629929193"
global.socialmedia = "IG: vlntncptr"
global.yutubs = "YT: lenttobs"
global.lokasi = "Indonesia, Jawatimur, Mojokerto"//

global.packgename = "by"
global.author = "lenttobs"

global.title = 'SakuraMD'//Tittle reply
global.body = 'Subscribe lenttobs' //body reply

global.welcome = false 
global.left = false

global.autoread = true


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})