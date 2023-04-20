// if value is truthy, print true;

// if value is falsy, print result:
// "The boolean is falsy"
// "The null value is falsy"
// "undefined is falsy"
// "The number 0 is falsy (the only falsy number)"
// "The empty string is falsy (the only falsy string)"

let input = null;

// if the input is equal to false then the boolean is false
if (input === false) {
	console.log("The boolean value false is falsy");
}
// if the input is equal to null then the input value is falsy
else if (input === null) {
	console.log("The null value is falsy");
}
// if the input is undefined then it is falsy
else if (input === undefined) {
	console.log("undefined is falsy");
}
// if the input is 0 then it is falsy
else if (input === 0) {
	console.log("The number 0 is falsy (the only falsy number)");
}
// if the input an empty string then it is falsy
else if (input === "") {
	console.log("The empty string is falsy(the only falsy string)");
} else {
	// when all the other conditions are not true
	// then the result is true
	console.log(true);
}
