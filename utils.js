export const greet = (name, bool) => {
	if (bool === true) {
		return `Good evening, ${name}`;
	} else {
		return `Hi, ${name}`;
	}
};

export const calculate = (x, y, z) => {
	switch (z) {
		case 'add':
			return x + y;
			break;
		case 'subtract':
			return x - y;
			break;
		case 'multiply':
			return x * y;
			break;
		case 'divide':
			return x / y;
			break;
	}
};
