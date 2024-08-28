function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}


/* 
  Add your pseudocode here
Define a function isPalindrome that takes str as an argument.
Loop through the string from the start to the middle:
For each character at position i, compare it with the character at position length - 1 - i.
If any characters don't match, return false.
If the loop completes without finding mismatches, return true.

/*
1. The function isPalindrome takes a single argument str, which is the string to check.
Loop Through the String:
The loop runs from the start of the string to the middle. (because second half of word is same)
2. For each character at position i, compare it with the character at position str.length - 1 - i.
If these characters are different, the string is not a palindrome, and the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
