import { h } from 'snabbdom/h';

const CreateElement = tagName => (strings, ...args) => ({
	type: 'element',
	template: h(
		tagName,
		{},
		strings.reduce((acc, currentString, index) =>
			acc + currentString + (args[index] || ""), "")
	)
});

export const div = CreateElement("div");
export const p = CreateElement("p");
