function palindrome(string) {
    let isPalindrome = ''
    for (let i = string.length - 1; i >= 0; --i) {
      isPalindrome += string[i]
    }
    return string == isPalindrome
  }
  
  console.log("String is palindrome: " + palindrome('aba'))
  console.log("String is palindrome: " + palindrome('abv'))
