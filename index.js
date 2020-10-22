import { Init, CreateComponent } from './src/index';
import { p } from './src/element';

const FIRST_NAME = 'Andres';
const LAST_NAME = 'Ruiz';

Init();
CreateComponent(p`Hello ${FIRST_NAME} ${LAST_NAME}`);
