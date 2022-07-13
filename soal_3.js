function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

const example = "madamimadam";
console.log(isPalindrome(example));
