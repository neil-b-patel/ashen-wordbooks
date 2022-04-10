const FILEPATHS = {
    "noun": "./words/nouns.json",
    "verb": "./words/verbs.json",
    "adj": "./words/adjectives.json",
    "adv": "./words/adverbs.json"
};
const NUM_NOUNS = 23;
const NUM_VERBS = 5;
const NUM_ADJECTIVES = 9;
const NUM_ADVERBS = 3;

const remix = () => {
    getAndReplaceWords(NUM_NOUNS, "noun");
    getAndReplaceWords(NUM_VERBS, "verb");
    getAndReplaceWords(NUM_ADJECTIVES, "adj");
    getAndReplaceWords(NUM_ADVERBS, "adv");
}

const getAndReplaceWords = (numWords, partOfSpeech) => {
    const url = FILEPATHS[partOfSpeech];
    fetch(url)
        .then(res => res.json())
        .then(json => replaceWords(json, numWords, partOfSpeech))
}

const replaceWords = (json, numWords, partOfSpeech) => {
    let randNums = [];
    let newWords = [];
    
    const words = Array.from(document.getElementsByClassName(partOfSpeech));
    
    while (newWords.length < numWords) {
        let randNum = json.length * Math.random() << 0;
        let newWord = json[randNum];
        newWords.push(newWord);
        randNums.push(randNum);
    }

    for (let i = 0; i < newWords.length; i++) {
        const newWord = newWords[i];
        const capitalWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
        words[i].innerText = capitalWord;
    }
}

window.addEventListener("DOMContentLoaded", remix);
