const fs = require('fs')
const path = require('path')

const saveToDatabase = (DB) => {
    const filePath = path.join(__dirname, 'products.json')
    fs.writeFileSync(filePath, JSON.stringify(DB, null, 2), { encoding: 'utf-8' })
}

module.exports = {
    saveToDatabase
}
