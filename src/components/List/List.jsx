import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getIsLoading,
  getError,
  getFilter,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactItem } from 'components/Item/Item';
import { List, Notify } from './List.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };
  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {isLoading && !error && <Notify>Loading contacts...</Notify>}
      {error && <Notify>{error}</Notify>}

      {visibleContacts.length === 0 && !error && !isLoading && (
        <Notify>No contacts</Notify>
      )}

      {contacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
    </List>
  );
};
