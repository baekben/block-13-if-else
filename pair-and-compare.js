// compare two sets of two values
// print true if at least one of the pairs is truthy

let param1A = "eight";
let param1B = "eight";
let param2A = "ate";
let param2B = "ate";

// if param1A is strictly equal to param1B
// AND param2A is strictly equal to param2B
// then it is true
if (param1A == param1B && param2A == param2B) {
	console.log(true);
} else {
	// if the conditions are not true
	// the result is false
	console.log(false);
}
