import { init } from 'snabbdom/init';
const patch = init([]);

export const Init = () => {
	const APP = document.createElement('div');
	APP.id = 'app';
	document.body.append(APP);
};

export const CreateComponent = (component) => {
	const APP_ID = '#app';
	const APP = document.querySelector(APP_ID);
	patch(APP, component.template);
};
