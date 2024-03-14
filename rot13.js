// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
    const alphabetU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
    const alphabetL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
    const mess = message.split("")

    for (let i = 0; i < mess.length; i++) {
        if (mess[i] === "N") {
            mess[i] = "A"
        } else if (mess[i] === "n") {
            mess[i] = "a"
        } else {
            if (mess[i] === mess[i].toUpperCase()) {
                const id = alphabetU.indexOf(mess[i]);
                let fixed = id + 13;
                if (fixed > 26) {
                    fixed -= 26;
                }
                if (id === -1) {
                    mess[i] = mess[i]
                } else {
                    mess[i] = alphabetU[fixed]
                }
            } else if (mess[i] === mess[i].toLowerCase()) {
                const id = alphabetL.indexOf(mess[i]);
                let fixed = id + 13;
                if (fixed > 26) {
                    fixed -= 26;
                }
                if (id === -1) {
                    mess[i] = mess[i]
                } else {
                    mess[i] = alphabetL[fixed]
                }
            }
        }
    }
    return mess.join("")
}
