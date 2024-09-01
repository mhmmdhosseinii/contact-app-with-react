import styles from "./ConfirmationModal.module.css";

function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={styles.container} id="modal">
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to remove the selected contacts?</p>
      <div>
        <button onClick={onClose}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
