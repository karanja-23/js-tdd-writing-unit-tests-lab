// Your code here
function isPalindrome(word) {
    if (word === "") {
        return false
    }   
    else if (word !== "" && word.toLowerCase() === word.toLowerCase().split("").reverse().join("")) {
       return true
   }
   else {
       return false
   }
}
export { isPalindrome}