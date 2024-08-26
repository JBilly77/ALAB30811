//This is my ALAB 308.1.1 Assignment
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//====================PART ONE========================//

//Check if all numbers are divisible by 5. Cache the result in a variable:
const divisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`All numbers are divisible by 5: ${divisibleBy5}`);

//Check if the first number is larger than the last. Cache the result in a variable:
const largerThan = (n1 > n4);
console.log(`The first number is larger than the last one: ${largerThan}`);

// Accomplish the following arithmetic chain:
// Subtract the fi rst number from the second number
// Multiply the result by the third number
// Find the remainder of dividing the result by the fourth number
const result = ((n2 - n1) * n3) % n4;
console.log("The result of this arithmetic is: " + result);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!)
// in other logic comparisons. Rename the variable as appropriate
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log("No number larger than 25: " + isUnder25);

//====================PART TWO========================//
// Declaratrions
const tripDistance = 1500;
const fuelBudget = 175;
const fuelCost = 3;
const fuelEfficiency55 = 30;
const fuelEfficiency60 = 28;
const fuelEfficiency75 = 23; 

//Calculate the number of gallons of fuel needed for the entire trip per speed
const tolGal55 = tripDistance / fuelEfficiency55;
console.log("The number of gallons needed for the trip at 55 MPH: " + tolGal55);

const tolGal60 = tripDistance / fuelEfficiency60;
console.log("The number of gallons needed for the trip at 60 MPH: " + tolGal60);

const tolGal75 = tripDistance / fuelEfficiency75;
console.log(`The number of gallons needed for the trip at 75 MPH: ${tolGal75} `);

//Will your budget be enough to cover the fuel expense?
const fuelBudget55 = tolGal55 * fuelCost;
const budgetEnough55 = fuelBudget55 <= fuelBudget;
console.log("The fuel budget is at 55 MPH " + fuelBudget55 + " and is " + budgetEnough55);

const fuelBudget60 = tolGal60 * fuelCost;
const budgetEnough60 = fuelBudget60 <= fuelBudget;
console.log("The fuel budget is at 60 MPH " + fuelBudget60 + " and is " + budgetEnough60);

const fuelBudget75 = tolGal75 * fuelCost;
const budgetEnough75 = fuelBudget75 <= fuelBudget;
console.log("The fuel budget is at 75 MPH " + fuelBudget75 + " and is " + budgetEnough75);

//How long will the trip take, in hours?
const tripDuration55 = tripDistance / 55;
console.log("The duration of trip at 55 MPH is: " + tripDuration55 + " hours");

const tripDuration60 = tripDistance / 60;
console.log("The duration of trip at 60 MPH is: " + tripDuration60 + " hours");

const tripDuration75 = tripDistance / 75;
console.log("The duration of trip at 75 MPH is: " + tripDuration75 + " hours");



//**************************************************************************************************************/
/*
// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25)

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

*/

