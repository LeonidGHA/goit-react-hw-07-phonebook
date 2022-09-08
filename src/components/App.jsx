import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './App.module.css';

import Forms from './Forms';
import ContactsList from './ContactsList';
import Filter from './Filter';

import { getContacts } from '../redux/items/items-operations';
import { itemsStore } from 'redux/items/items-selector';
import { filterStore } from 'redux/filter/filter-selector';

function App() {
  const dispatch = useDispatch();
  const contactsArr = useSelector(itemsStore);
  const filterValue = useSelector(filterStore);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

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
