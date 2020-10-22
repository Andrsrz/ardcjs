import { Init, CreateComponent } from './src/index';
import { User } from './src/components/user';

const FIRST_NAME = 'Andres';
const LAST_NAME = 'Ruiz';

Init();
CreateComponent(User({ firstName: FIRST_NAME, lastName: LAST_NAME }));
