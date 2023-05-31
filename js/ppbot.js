const chalk = require('chalk')
const fs = require('fs')
global.ppbot = `https://telegra.ph/file/28ef9dddb0edeebe30e0b.jpg`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})