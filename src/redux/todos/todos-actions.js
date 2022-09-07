import { createAction } from '@reduxjs/toolkit';

// const addContact = createAction('contact/add', (name, number) => ({
//   payload: {
//     name,
//     number,
//     id: nanoid(5),
//   },
// }));

// const deleteContact = createAction('contact/delete');

const changeFilter = createAction('contact/filter');

const todosActions = { changeFilter };
export default todosActions;
