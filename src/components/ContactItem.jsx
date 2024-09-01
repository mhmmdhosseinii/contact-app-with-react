import styles from "./ContactItem.module.css";

function ContactItem({
  contact: { id, name, email, phone },
  contact,
  deleteHandler,
  editContactHandler,
  toggleSelect,
  selectedItems,
}) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={selectedItems.has(id)}
        onChange={() => toggleSelect(id)}
      />
      <p>{name}</p>
      <p>
        <span>📥</span> {email}
      </p>
      <p>
        <span>☎️</span> {phone}
      </p>
      <div>
        <button onClick={() => deleteHandler(id)}>🗑️</button>
        <button onClick={() => editContactHandler(contact)}>📝</button>
      </div>
    </li>
  );
}

export default ContactItem;
