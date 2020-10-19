const createElement = tagName => (strings, ...args) => ({
	type: tagName,
	template: strings.reduce((acc, currentString, index) =>
		acc + currentString + (args[index] || ""), "")
});

const div = createElement("div");
const p = createElement("p");

const firstName = 'Andres';
const lastName = 'Ruiz';

const template = p`Hello ${firstName} ${lastName}!`;
console.log(template);
