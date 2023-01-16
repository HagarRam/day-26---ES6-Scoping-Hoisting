import { greet, calculate } from './utils.js';
//ex1
const square = (x) => {
	return x * x;
};
// console.log(square(4));

//ex2
const isPositive = (x) => {
	if (x > 0) {
		return true;
	} else {
		return false;
	}
};
// console.log(isPositive(4));

//ex3
const formatName = (firstName, lastName, Separator) => {
	if (Separator != '') {
		return `${firstName} " " ${lastName} `;
	} else {
		return `${firstName} ${Separator} ${lastName}`;
	}
};

//ex4
// console.log(greet('hagar', true));

//ex5
// console.log(calculate(4, 4, 'multiply'));

//ex6
const array = () => {
	const team = ['Chennai', 'Mumbai', 'Bangalore'];
	const captain = ['Dhoni', 'Rohit', 'Kohli'];
	const all = team.concat(captain);
	return all;
};
console.log(array());

//ex9
const userName = ['hello', 'World', '!'];
const [first, second, operator] = userName;
console.log(first);
console.log(second);
console.log(operator);

//ex10

//ex11
const actors = [
	{ actorName: 'Tom Hanks', birthdate: 'July 9, 1956' },
	{ actorName: 'Meryl Streep', birthdate: 'June 22, 1949' },
	{ actorName: 'Leonardo DiCaprio', birthdate: 'November 11, 1974' },
];
const [actorName, birthdate] = actors;
let firstActor = actors[0];
let thirdActor = actors[2].birthdate;
console.log(thirdActor);

//ex12
const sortDescending = (array1) => {
	return array1.sort();
};
// console.log(sortDescending([2, 5, 1, 9]));

//ex13
const person = [
	{ name: 'Tom Hanks', age: 2 },
	{ name: 'Meryl Streep', age: 3 },
	{ name: 'Leonardo DiCaprio', age: 22 },
];
const [name, age] = person;
const class1 = () => {
	for (let i = 0; i < person.length; i++) {
		console.log(
			`Hello, my name is ${person[i].name} and I am ${person[i].age} years old`
		);
	}
};

console.log(class1());
