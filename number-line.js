// take sum of two numbers
// print sum and corresponding result
// sum + message
// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";

let num1 = 109;
let num2 = 0;

let sum = num1 + num2;

// if the sum is less than -1000
if (sum < -1000) {
	console.log(`${sum} is less than -1000`);
}
// if the sum is less than 0
else if (sum < 0) {
	console.log(`${sum} is a negative number`);
}
// if the sum is equal to 0
else if (sum === 0) {
	console.log(`${sum} is equal to 0`);
} // if the sum is greater than 0 but less than or equal to 100
else if (sum <= 100 && sum > 0) {
	console.log(`${sum} is larger than 0`);
}
// if none of the other conditions are true
// the sum must be greater than 100
else {
	console.log(`${sum} is greater than 100`);
}
