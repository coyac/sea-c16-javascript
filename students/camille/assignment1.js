// Implement an exclusive OR function called `preferredName` that has the following interface:

var preferredNamed = function (firstName, lastName) {
	if (firstName && !lastName) return false;
	if (firstName && lastName) return false;
	return firstName || lastName;
};

// Test

var FirstName,
    LastName;


console.log(preferredName(FirstName, LastName));
// -> false

FirstName = 'Hank';

console.log(preferredName(FirstName, LastName));
// -> 'Hank'

LastName = 'Yates';

console.log(preferredName(FirstName, LastName));
// -> false

FirstName = '';

console.log(preferredName(FirstName, LastName));
// -> 'Yates'