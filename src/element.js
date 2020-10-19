const thing = (strings, ...args) => console.log(strings, args);

const firstName = 'Andres';
const lastName = 'Ruiz';

thing`Hello ${firstName} ${lastName} !`;
