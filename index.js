function myEach(collection, callback) {
    let conglomeration = collection
    if (!Array.isArray(collection)) {
        conglomeration = Object.values(collection)
    } 

    conglomeration.forEach(element => {
        callback(element)    
    })

    return collection
}

function myMap(collection, callback) {
    let conglomeration = collection
    if (!Array.isArray(collection)) {
        conglomeration = Object.values(collection)
    }

    let newArray = []

    conglomeration.forEach(item => {
        newArray.push(callback(item))
    })

    return newArray
}

function myReduce(collection, callback, acc) {
    let conglomeration = collection
    if (!Array.isArray(collection)) {
        conglomeration = Object.values(collection)
    }

    if (!acc) {
        let acc = conglomeration[0]
        for (let i = 1; i < conglomeration.length; i++) {
            acc = callback(acc, conglomeration[i])
        }
        return acc
    }
    
    for(let i = 0; i < conglomeration.length; i++) {
        acc = callback(acc, conglomeration[i])
    }

    return acc

}

function myFind(collection, predicate) {
    let conglomeration = collection
    if (!Array.isArray(collection)) {
        conglomeration = Object.values(collection)
    }

    for (let i = 0; i < conglomeration.length; i++) {
        if (predicate(conglomeration[i])) {
            return conglomeration[i]
        }

    }

    return undefined

}

function myFilter(collection, predicate) {
    let conglomeration = collection
    if (!Array.isArray(collection)) {
        conglomeration = Object.values(collection)
    }

    let filteredCigarettes = []

    conglomeration.forEach(element => {
        if (predicate(element)) {
            filteredCigarettes.push(element)
        }
    })

    return filteredCigarettes

}

function mySize(collection) {
    let conglomeration = collection
    if (!Array.isArray(collection)) {
        conglomeration = Object.values(collection)
    }

    return conglomeration.length

}

function myFirst(array, position) {

    if (position) {
        return array.slice(0,position)
    }

    return array[0]

}

function myLast(array, howmany) {
    if (howmany) {
        const startingPosition = array.length - howmany
        return array.slice(startingPosition)
    }

    return array[array.length - 1]
}

function myKeys(predmet) {
    let keyArray = []
    for (let key in predmet) {
        keyArray.push(key)
    }

    return keyArray
}

function myValues(predmet) {
    let valueArray = []
    for (let key in predmet) {
        valueArray.push(predmet[key])
    }

    return valueArray
}