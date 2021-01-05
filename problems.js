[
  {
    1: ` Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

        For example:
        
        uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
        uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
        uniqueInOrder([1,2,2,3,3])       == [1,2,3]`,
  },
  {
    2: `Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

  If you want to know more http://en.wikipedia.org/wiki/DNA
  
  In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
  
  More similar exercise are found here http://rosalind.info/problems/list-view/ (source)
  
  `,
  },
  {
    3: `ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

      If the function is passed a valid PIN string, return true, else return false.
      
      Examples
      "1234"   -->  true
      "12345"  -->  false
      "a234"   -->  false`,
  },
];

let problemSet1_1 = [
  {
    1: `Trolls are attacking your comment section!

    A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
    
    Your task is to write a function that takes a string and return a new string with all vowels removed.
    
    For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!`,
  },
  {
    2: `You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
    [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11 (the only odd number)

    [160, 3, 1719, 19, 11, 13, -21]
    Should return: 160 (the only even number)
    `,
  },
  {
    3: `Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

    #Example 1: a1 = ["arp", "live", "strong"]
    
    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
    
    returns ["arp", "live", "strong"]
    
    #Example 2: a1 = ["tarp", "mice", "bull"]
    
    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
    
    returns []
    
    Notes:
    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    
    Beware: r must be without duplicates.
    Don't mutate the inputs.`,
    testCases: `a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

    a1 = ["xyz", "live", "strong"]
    Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
    a1 = ["live", "strong", "arp"]
    Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
    a1 = ["tarp", "mice", "bull"]
    Test.assertSimilar(inArray(a1, a2), [])`,
  },
  {
    4: ` 
    This time we want to write calculations using functions and get the results. Let's have a look at some examples:
    seven(times(five())); // must return 35
    four(plus(nine())); // must return 13
    eight(minus(three())); // must return 5
    six(dividedBy(two())); // must return 3
    Requirements:
    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:`,
  },
];
