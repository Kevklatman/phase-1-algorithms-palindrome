function isPalindrome(word) {
  let inputWord = word.toLowerCase();
  let reverseInputWord = inputWord.split('').reverse().join('');
  if (inputWord === reverseInputWord) {
    return true;
  } else {
    return (false);
  }
}


/* 
  Add your pseudocode here
take string and make all caps or all lowercase so they can be read equally
split the string into its components an array would Work
reverse the returned components
join the components back together so they can be evaluated against og input

/*
  Add written explanation of your solution here
  I separate the word into its components using split and then use reverse which is a function that reverses the order of an array. I then use join to turn the array
  back into a word so that it can now be evaluated against its mirrored self by setting up an if/ else statement.
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
