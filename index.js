function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}


/* 
  Add your pseudocode here
separate the string into its individual characters
reverse the string
put it back together
compare it to the original string to see if it's the same
return true if they are the same false if not
/*
Use split('') to convert the string into an array of characters.
Use reverse() to reverse the array.
Use join('') to convert the reversed array back into a string.
Check if the reversed string is equal to the original string.
Return true if they are the same, indicating the string is a palindrome.
Otherwise, return false.
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
