function buildNamesConversions(synonyms) {
    let res = {};
    Object.entries(synonyms).forEach(([primary, similar]) => {
        if (!(primary in res)) {
            similar in res ? res[primary] = res[similar] : res[primary] = primary;
        }
        if (!(similar in res)) {
            res[similar] = res[primary];
        }
    })

    return res;
}

function setNamesFrequency(names, namesConversions) {
    let namesFrequency = {};
    Object.entries(names).forEach(([key, value]) => {
        key in namesConversions ?
            createOrAppend(namesFrequency, namesConversions[key], value) :
            createOrAppend(namesFrequency, key, value);
    })
    return namesFrequency;
}

const createOrAppend = (entity, key, value) => {
    key in entity ?
        entity[key] = entity[key] + value :
        entity[key] = value
}

exports.buildNamesConversions = buildNamesConversions;
exports.setNamesFrequency = setNamesFrequency;
