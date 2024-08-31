import ContactItem from "./ContactItem";

function ContactsList({
  contacts,
  deleteHandler,
  editContactHandler,
  filteredContacts,
  toggleSelect,
  removeSelectedItems,
  selectedItems,
}) {
  return (
    <div>
      <h3>Contacts List</h3>
      {selectedItems.size > 0 && (
        <button onClick={removeSelectedItems}>Remove Selected Contacts</button>
      )}
      {contacts.length ? (
        <ul>
          {filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteHandler={deleteHandler}
              editContactHandler={editContactHandler}
              toggleSelect={toggleSelect}
              removeSelectedItems={removeSelectedItems}
              selectedItems={selectedItems}
            />
          ))}
        </ul>
      ) : (
        <p>No Contacts yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
