import { init } from 'src/index';
import { p } from 'src/element';

const FIRST_NAME = 'Andres';
const LAST_NAME = 'Ruiz';

init('#app', div`Hello ${FIRST_NAME} ${LAST_NAME}`);
