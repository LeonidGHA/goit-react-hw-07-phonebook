import css from './App.module.css';

import Forms from './Forms';
import ContactsList from './ContactsList';
import Filter from './Filter';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { filterStore, itemsStore } from 'redux/todos/todos-selector';

import { getContacts } from '../redux/todos/todos-operations';

function App() {
  const dispatch = useDispatch();
  const contactsArr = useSelector(itemsStore);
  const filterValue = useSelector(filterStore);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const filterState = () => {
    return contactsArr?.filter(el =>
      el.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };
  const renderFiterItem = filterState();

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Forms />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {contactsArr.length !== 0 && (
        <ContactsList renderFilterContacts={renderFiterItem} />
      )}
    </div>
  );
}

export default App;
