const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

const savePassword = (password) => {
    /* create file - params: 
        '../':  one step up (out from utils dir) 
        'a':    append content, no override it
        777:    permissions
    */
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 777, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.green('Password was saved to passwords.txt'))
            })
        })
    })
}

module.exports = savePassword