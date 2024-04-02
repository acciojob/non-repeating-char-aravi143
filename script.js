function firstNonRepeatedChar(str) {
 // Write your code here
	let charCount = {}; // Object to store character counts
    let result = null;
    
    // Count occurrences of each character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount[char] === 1) {
            result = char;
            break;
        }
    }

    return result;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
