const {buildNamesConversions, setNamesFrequency} = require("./mapHandler");
const JsonFileHandler = require('./jsonFileHandler')

const path = 'C:/Users/Noam/Desktop/BudasProjects/JS/similar_names/info.txt';
const {names, synonyms} = JsonFileHandler.readFile(path);

const namesConversions = buildNamesConversions(synonyms);
const namesFrequency = setNamesFrequency(names, namesConversions);


console.log(namesFrequency);
