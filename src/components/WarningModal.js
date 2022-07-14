const WarningModal = ({ message, handleClickOk, buttonText, isWarning} ) => {
  return (
    <div className={`modal-overlay ${isWarning? null : 'hidden'}`}>
      <div className="confirm-modal">
        <h2>{message}</h2>
        <button onClick={handleClickOk}>{buttonText}</button>
      </div>
    </div>
  );
};

export default WarningModal;
