const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let decodeMessage = '',
        morseSymbol,
        encodeSymbol;

    for (let i = 0; i < expr.length; i = i + 10) {
        encodeSymbol = expr.slice(i, i + 10);
        morseSymbol = '';
        if (encodeSymbol === '**********') {
            decodeMessage += ' '; 
            continue;
        }
        else
            for (let j = 0; j < encodeSymbol.length; j = j + 2) {
                switch (encodeSymbol.slice(j, j + 2)) {
                    case '00': break;
                    case '10': 
                        morseSymbol += '.'
                    break;
                    case '11': 
                        morseSymbol += '-'
                    break;
                }
            }
            decodeMessage += MORSE_TABLE[morseSymbol];
    }
    return decodeMessage;
}

module.exports = {
    decode
}