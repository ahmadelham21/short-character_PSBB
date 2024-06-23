function sortCharacters(s) {
    const vowels = 'aeiou';
    let vowelChars = [];
    let consonantChars = [];
    
    s = s.toLowerCase();
    
    for (let char of s) {
        if (char >= 'a' && char <= 'z') { // Ignore non-alphabetic characters
            if (vowels.includes(char)) {
                vowelChars.push(char);
            } else {
                consonantChars.push(char);
            }
        }
    }
    
    return {
        vowels: vowelChars.join(''),
        consonants: consonantChars.join('')
    };
}

// Test cases
let s1 = "Sample Case";
let s2 = "Next Case";

let result1 = sortCharacters(s1);
console.log(`Vowel Characters: ${result1.vowels}`);
console.log(`Consonant Characters: ${result1.consonants}`);

let result2 = sortCharacters(s2);
console.log(`Vowel Characters: ${result2.vowels}`);
console.log(`Consonant Characters: ${result2.consonants}`);
