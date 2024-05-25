// Q69
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
;
console.log(divideAndRemainder(90, 4)); // Shows { quotient: 70, remainder: 21 }
// It shows how many times 3 goes into 10, and what's left over.
// Calculates the quotient and remainder
// Returns both in an object
// Trying it with 10 divided by 3
