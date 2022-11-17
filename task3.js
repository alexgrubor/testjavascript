let wordConverter = (words, suffix) => {
    let newWords = words.map(word => word + suffix)
    return newWords
}

let adjectives = ["smart", "kind", "sweet", "small", "clear"];
console.log(wordConverter(adjectives, "er"));