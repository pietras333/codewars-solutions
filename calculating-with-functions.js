// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

const connectFunctions = (num, operation) => {
    if (!operation)
        return num
    return operation(num)
}

function zero(op) {
    return connectFunctions(0, op)
}

function one(op) {
    return connectFunctions(1, op)
}

function two(op) {
    return connectFunctions(2, op)
}

function three(op) {
    return connectFunctions(3, op)
}

function four(op) {
    return connectFunctions(4, op)
}

function five(op) {
    return connectFunctions(5, op)
}

function six(op) {
    return connectFunctions(6, op)
}

function seven(op) {
    return connectFunctions(7, op)
}

function eight(op) {
    return connectFunctions(8, op)
}

function nine(op) {
    return connectFunctions(9, op)
}

function plus(number) {
    return function(num) {
        return num + number
    }
}

function minus(number) {
    return function(num) {
        return num - number
    }
}

function times(number) {
    return function(num) {
        return num * number
    }
}

function dividedBy(number) {
    return function(num) {
        return Math.floor(num / number)
    }
}
