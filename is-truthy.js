// if value is truthy, print true;

// if value is falsy, print result:
// "The boolean is falsy"
// "The null value is falsy"
// "undefined is falsy"
// "The number 0 is falsy (the only falsy number)"
// "The empty string is falsy (the only falsy string)"

let input = null;

if (input === false) {
	console.log("The boolean value false is falsy");
} else if (input === null) {
	console.log("The null value is falsy");
} else if (input === undefined) {
	console.log("undefined is falsy");
} else if (input === 0) {
	console.log("The number 0 is falsy (the only falsy number)");
} else if (input === "") {
	console.log("The empty string is falsy(the only falsy string)");
} else {
	console.log(true);
}
