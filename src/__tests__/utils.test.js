// Your tests here
import { isPalindrome } from "../utils.js";
describe("isPalindrome", () => {
    it("should return true if the word is a palindrome", () => {
        expect(isPalindrome("racecar")).toBe(true);
    });
    it("should return true if the word is a palindrome  butcase insensitive", () => {
        expect(isPalindrome("RaCecAr")).toBe(true);
    });    
    it("should return false if the word is not a palindrome", () => {
        expect(isPalindrome("hello")).toBe(false);
    });
    it ("should return false if the word is an empty string", () => {
        expect(isPalindrome("")).toBe(false);
    });
})