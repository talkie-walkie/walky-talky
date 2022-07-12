const WarningModal = ({ message, handleClickOk, buttonText} ) => {
  return (
    <div className="modal-overlay">
      <div className="confirm-modal">
        <h2>{message}</h2>
        <button onClick={handleClickOk}>{buttonText}</button>
      </div>
    </div>
  );
};

export default WarningModal;
