export const init = (selector, component) => {
	const APP = document.querySelector(selector);
	const NEW_ELEMENT = document.createElement(component.type);
	const NEW_TEXT_CONTENT = document.createTextContent(component.template);

	NEW_ELEMENT.append(NEW_TEXT_CONTENT);
	APP.append(NEW_ELEMENT);
};
