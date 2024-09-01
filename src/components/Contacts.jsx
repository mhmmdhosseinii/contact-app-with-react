import { useState } from "react";
import { v4 } from "uuid";

import inputs from "../constants/inputs";
import ContactsList from "./ContactsList";

import styles from "./Contacts.module.css";

function Contacts() {
  //states
  const [searchTerm, setSearchTerm] = useState("");
  const [editingContact, setEditingContact] = useState(null);
  const [alert, setAlert] = useState("");
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  //handlers
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setAlert("Please enter valid data");
      return;
    }
    setAlert("");

    if (editingContact) {
      setContacts(
        contacts.map((contact) =>
          contact.id === editingContact.id
            ? { ...contact, ...formData }
            : contact
        )
      );
      setEditingContact(null);
    } else {
      setContacts([...contacts, { id: Date.now(), ...formData }]);
    }
    setFormData({ name: "", email: "", phone: "" });
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const editContactHandler = (contact) => {
    setEditingContact(contact);
    setFormData({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  };

  const toggleSelect = (id) => {
    const updatedSelection = new Set(selectedItems);
    if (updatedSelection.has(id)) {
      updatedSelection.delete(id);
    } else {
      updatedSelection.add(id);
    }
    setSelectedItems(updatedSelection);
  };

  const removeSelectedItems = () => {
    setContacts(contacts.filter((contact) => !selectedItems.has(contact.id)));
    setSelectedItems(new Set());
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={formData[input.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler}>
          {editingContact ? "Update Contact" : "Add Contact"}
        </button>
      </div>

      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>

      <ContactsList
        contacts={contacts}
        deleteHandler={deleteHandler}
        editContactHandler={editContactHandler}
        filteredContacts={filteredContacts}
        toggleSelect={toggleSelect}
        removeSelectedItems={removeSelectedItems}
        selectedItems={selectedItems}
      />
    </div>
  );
}

export default Contacts;
