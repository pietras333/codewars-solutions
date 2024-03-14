// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    let index = 0;
    let len = str2.length;
    let savedIndexes = {};
    let isMatch = false;
    while (index < len) {
        let letter = str2[index];
        let startingLetterIndex = (savedIndexes[letter] + 1) || 0;
        let matchIndex = str1.indexOf(letter, startingLetterIndex);
        isMatch = matchIndex > -1;
        if (!isMatch)
            break;
        index++;
        savedIndexes[letter] = matchIndex;
    }
    return isMatch;
}
