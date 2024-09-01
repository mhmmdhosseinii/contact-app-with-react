import { useState } from "react";
import styles from "./ContactsList.module.css";

import ContactItem from "./ContactItem";
import ConfirmationModal from "./ConfirmationModal";

function ContactsList({
  contacts,
  deleteHandler,
  editContactHandler,
  filteredContacts,
  toggleSelect,
  removeSelectedItems,
  selectedItems,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container} id="contacts-list">
      <h3>Contacts List</h3>

      <div className={styles.remove}>
        {selectedItems.size > 0 && (
          <button onClick={() => setIsModalOpen(true)}>Remove Selected</button>
        )}
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          removeSelectedItems();
          return setIsModalOpen(false);
        }}
      />

      {contacts.length ? (
        <ul className={styles.contacts}>
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
        <p className={styles.message}>No contacts yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
