// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
    // nFloors = 4
    // 2 * 4 - 1 = 7
    const answer = []
    for (let i = 0; i < nFloors; i++) {
        answer.push(" ".repeat((nFloors - i) - 1) + "*".repeat((i * 2) + 1) + " ".repeat((nFloors - i) - 1));
    }
    return answer;
}
