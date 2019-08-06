function sumTwoSmallestNumbers(numbers) { 
  let sorted = numbers.sort(function(a, b){return a-b});
  return sorted[0] + sorted[1]
}


// https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/train/javascript