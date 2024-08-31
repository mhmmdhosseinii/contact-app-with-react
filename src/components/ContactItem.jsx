function ContactItem({
  contact: { id, name, email, phone },
  contact,
  deleteHandler,
  editContactHandler,
  toggleSelect,
  selectedItems,
}) {
  return (
    <li key={id}>
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
        <span>📱</span> {phone}
      </p>
      <button onClick={() => deleteHandler(id)}>🗑️</button>
      <button onClick={() => editContactHandler(contact)}>📝</button>
    </li>
  );
}

export default ContactItem;
