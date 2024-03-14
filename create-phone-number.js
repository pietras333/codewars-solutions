// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
    const prefix = numbers.slice(0, 3);
    const midpart = numbers.slice(3, 6);
    const endpart = numbers.slice(6, 10);
    const number = "(" + prefix[0] + prefix[1] + prefix[2] + ")" + " " + midpart[0] + midpart[1] + midpart[2] + "-" + endpart[0] + endpart[1] + endpart[2] + endpart[3];
    return number
}
