import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdPerson, MdClose } from 'react-icons/md';
import { deleteContact } from 'redux/operations';
import IconBtn from 'components/buttons/IconBtn/IconBtn';
import { Item, Name, Number } from './Item.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item key={id}>
      <MdPerson size={15} />
      <Name>{name}</Name>
      <Number>{number}</Number>
      <IconBtn aria-label="Delete contact" onClick={handleDelete}>
        <MdClose size={15} />
      </IconBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
