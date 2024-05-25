// Q69
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(
    dividend: number,
    divisor: number,
  ): { quotient: number, remainder: number } {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder };
  };
  console.log(divideAndRemainder(90, 4)); // Shows { quotient: 22, remainder: 2 }
  // It shows how many times 3 goes into 10, and what's left over.



  // Calculates the quotient and remainder
  // Returns both in an object
  // Trying it with 10 divided by 3