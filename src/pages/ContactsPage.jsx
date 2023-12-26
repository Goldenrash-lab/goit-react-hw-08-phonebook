import { AppWrapper, PhoneBook } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { SearchContact } from 'components/SearchContact/SearchContact';
import React from 'react';

const ContactsPage = () => {
  return (
    <AppWrapper>
      <PhoneBook>
        <h3>Phonebook</h3>
        <ContactForm />
        <h3>Contacts</h3>
        <SearchContact />
        <ContactsList />
      </PhoneBook>
    </AppWrapper>
  );
};

export default ContactsPage;
