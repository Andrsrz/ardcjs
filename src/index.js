export const Init = () => {
	const APP = document.createElement('div');
	APP.id = 'app';
	document.body.append(APP);
};

export const CreateComponent = (component) => {
	const APP_ID = '#app';
	const APP = document.querySelector(APP_ID);
	const NEW_ELEMENT = document.createElement(component.type);
	const NEW_TEXT_CONTENT = document.createTextNode(component.template);

	NEW_ELEMENT.append(NEW_TEXT_CONTENT);
	APP.append(NEW_ELEMENT);
};
