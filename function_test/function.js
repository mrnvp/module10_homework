export function createAdder(x) {
	if (typeof x !== 'number') {
		throw new Error('Аргумент должен быть числом');
	}

	return function addA(y) {
		if (typeof y !== 'number') {
			throw new Error('Аргумент должен быть числом');
		}
		return x + y;
	};
}