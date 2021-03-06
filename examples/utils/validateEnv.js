const requiredENV = ['APP_ID', 'APP_HASH']

function validateEnv() {
    if (!process.env.APP_ID || !process.env.APP_HASH) {
        const missingENV = requiredENV.filter(key => !process.env[key])

        console.log(`\nERROR: Please provide ${missingENV.join(' and ')}`)
        console.log('  |  Hint: APP_ID=123456789 APP_HASH=123456abcfghe node ./examples/main.js \n')

        process.exit(0)
    }
}

module.exports = {
    validateEnv,
}
