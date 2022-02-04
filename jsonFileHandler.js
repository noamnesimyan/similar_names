const fs = require('fs')

class JsonFileHandler {
    readFile = (path) => {
        let fileData = fs.readFileSync(path, {encoding: 'utf8'});
        return JSON.parse(fileData);
    }
}

module.exports = new JsonFileHandler();
