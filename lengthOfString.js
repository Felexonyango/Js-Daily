function checkIfStringIsInAnotherString(sentence) {
    let sentenceArray = sentence.split(' ');
    for (let index = 0; index < sentenceArray.length; index++) {
        let word = sentenceArray[index];
        for (let j = 1; j < sentenceArray.length; j++) {
            let secondWord = sentenceArray[j];
            if(secondWord.includes(word) && secondWord !== word) {
                console.log(`The word ${word} appears in ${secondWord}`);
            }
        }
    }
}
console.log(checkIfStringIsInAnotherString('jdhhdhdkj'))